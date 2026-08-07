import type { ThemeId } from "../themes/types"

export const ACTIVE_THEME_KEY = "activeTheme"

type StorageResult = Record<string, unknown>

function hasChromeStorage(): boolean {
  return typeof chrome !== "undefined" && !!chrome.storage?.local
}

function storageGet(keys: string | string[] | null): Promise<StorageResult> {
  return new Promise((resolve, reject) => {
    if (!hasChromeStorage()) {
      resolve({})
      return
    }

    chrome.storage.local.get(keys, (result) => {
      const error = chrome.runtime.lastError
      if (error) {
        reject(new Error(error.message))
        return
      }
      resolve(result)
    })
  })
}

function storageSet(items: Record<string, unknown>): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!hasChromeStorage()) {
      resolve()
      return
    }

    chrome.storage.local.set(items, () => {
      const error = chrome.runtime.lastError
      if (error) {
        reject(new Error(error.message))
        return
      }
      resolve()
    })
  })
}

function storageRemove(keys: string | string[]): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!hasChromeStorage()) {
      resolve()
      return
    }

    chrome.storage.local.remove(keys, () => {
      const error = chrome.runtime.lastError
      if (error) {
        reject(new Error(error.message))
        return
      }
      resolve()
    })
  })
}

export async function getActiveTheme(): Promise<ThemeId | null> {
  try {
    const result = await storageGet(ACTIVE_THEME_KEY)
    const themeId = result[ACTIVE_THEME_KEY]

    if (themeId === "comics" || themeId === "apple") {
      return themeId
    }
  } catch (error) {
    console.error("[WebStyle] Failed to read theme:", error)
  }

  return null
}

export async function setActiveTheme(themeId: ThemeId | null): Promise<void> {
  try {
    if (themeId === null) {
      await storageRemove(ACTIVE_THEME_KEY)
      return
    }

    await storageSet({ [ACTIVE_THEME_KEY]: themeId })
  } catch (error) {
    console.error("[WebStyle] Failed to save theme:", error)
    throw error
  }
}
