import type { ThemeId } from "../themes/types"
import { THEME_STYLE_ID, themeToCss } from "../themes/to-css"

export function injectThemeStyle(themeId: ThemeId | null): void {
  document.getElementById(THEME_STYLE_ID)?.remove()

  if (!themeId) {
    return
  }

  const style = document.createElement("style")
  style.id = THEME_STYLE_ID
  style.textContent = themeToCss(themeId)
  ;(document.head ?? document.documentElement).appendChild(style)
}

export function injectThemeCss(css: string | null, styleId = THEME_STYLE_ID): void {
  document.getElementById(styleId)?.remove()

  if (!css) {
    return
  }

  const style = document.createElement("style")
  style.id = styleId
  style.textContent = css
  ;(document.head ?? document.documentElement).appendChild(style)
}

export { THEME_STYLE_ID }
