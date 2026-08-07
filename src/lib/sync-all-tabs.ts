import { THEME_STYLE_ID } from "./inject-theme-style"
import type { ThemeId } from "../themes/types"
import { themeToCss } from "../themes/to-css"

function isInjectableUrl(url?: string): boolean {
  if (!url) {
    return false
  }

  return url.startsWith("http://") || url.startsWith("https://")
}

function tabsQuery(): Promise<chrome.tabs.Tab[]> {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({}, (tabs) => {
      const error = chrome.runtime.lastError
      if (error) {
        reject(new Error(error.message))
        return
      }
      resolve(tabs)
    })
  })
}

function executeThemeInjection(
  tabId: number,
  css: string | null,
): Promise<void> {
  return new Promise((resolve, reject) => {
    chrome.scripting.executeScript(
      {
        target: { tabId },
        func: ((cssText: string | null, styleId: string) => {
          document.getElementById(styleId)?.remove()

          if (!cssText) {
            return
          }

          const style = document.createElement("style")
          style.id = styleId
          style.textContent = cssText
          ;(document.head ?? document.documentElement).appendChild(style)
        }) as (...args: unknown[]) => void,
        args: [css, THEME_STYLE_ID],
      },
      () => {
        const error = chrome.runtime.lastError
        if (error) {
          reject(new Error(error.message))
          return
        }
        resolve()
      },
    )
  })
}

export async function syncThemeToAllTabs(themeId: ThemeId | null): Promise<void> {
  const css = themeId ? themeToCss(themeId) : null
  const tabs = await tabsQuery()

  await Promise.all(
    tabs.map(async (tab) => {
      if (!tab.id || !isInjectableUrl(tab.url)) {
        return
      }

      try {
        await executeThemeInjection(tab.id, css)
      } catch (error) {
        console.warn("[WebStyle] Could not inject into tab:", tab.url, error)
      }
    }),
  )
}
