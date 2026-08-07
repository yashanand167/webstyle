import { ACTIVE_THEME_KEY } from "../lib/theme-storage"
import { syncThemeToAllTabs } from "../lib/sync-all-tabs"
import type { ThemeId } from "../themes/types"

function isThemeId(value: unknown): value is ThemeId {
  return value === "comics" || value === "apple"
}

chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName !== "local" || !(ACTIVE_THEME_KEY in changes)) {
    return
  }

  const nextTheme = changes[ACTIVE_THEME_KEY]?.newValue
  const themeId = isThemeId(nextTheme) ? nextTheme : null
  void syncThemeToAllTabs(themeId)
})
