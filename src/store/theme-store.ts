import { create } from "zustand"
import { getActiveTheme, setActiveTheme } from "../lib/theme-storage"
import { syncThemeToAllTabs } from "../lib/sync-all-tabs"
import type { ThemeId } from "../themes/types"

type ThemeStore = {
  activeTheme: ThemeId | null
  load: () => Promise<void>
  select: (themeId: ThemeId | null) => Promise<void>
}

export const useThemeStore = create<ThemeStore>((set) => ({
  activeTheme: null,
  load: async () => {
    const activeTheme = await getActiveTheme()
    set({ activeTheme })
  },
  select: async (themeId) => {
    await setActiveTheme(themeId)
    set({ activeTheme: themeId })
    await syncThemeToAllTabs(themeId)
  },
}))
