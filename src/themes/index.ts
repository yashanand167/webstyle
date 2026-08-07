import { appleTheme } from "./apple"
import { comicsTheme } from "./comics"
import type { Theme, ThemeId } from "./types"

export const themes: Record<ThemeId, Theme> = {
  comics: comicsTheme,
  apple: appleTheme,
}

export const themeList: Theme[] = [comicsTheme, appleTheme]

export function getTheme(themeId: ThemeId): Theme {
  return themes[themeId]
}

export type { Theme, ThemeId } from "./types"
