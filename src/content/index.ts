import { ACTIVE_THEME_KEY, getActiveTheme } from "../lib/theme-storage"
import { injectThemeStyle } from "../lib/inject-theme-style"
import type { ThemeId } from "../themes/types"

function isThemeId(value: unknown): value is ThemeId {
  return value === "comics" || value === "apple"
}

async function syncTheme(): Promise<void> {
  injectThemeStyle(await getActiveTheme())
}

function startThemeListener(): void {
  chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName !== "local" || !(ACTIVE_THEME_KEY in changes)) {
      return
    }

    const nextTheme = changes[ACTIVE_THEME_KEY]?.newValue
    injectThemeStyle(isThemeId(nextTheme) ? nextTheme : null)
  })

  chrome.runtime.onMessage.addListener((message) => {
    if (message?.type === "WEBSTYLE_SYNC_THEME") {
      void syncTheme()
    }
  })
}

export function onExecute(): void {
  void syncTheme()
  startThemeListener()
}
