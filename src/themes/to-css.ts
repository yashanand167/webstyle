import { getTheme } from "./index"
import type { Theme, ThemeId } from "./types"

export const THEME_STYLE_ID = "webstyle-theme"

function buildCss(theme: Theme): string {
  return `
    :root {
      --webstyle-font: ${theme.typography.fontFamily};
      --webstyle-font-weight: ${theme.typography.fontWeight};
      --webstyle-border-width: ${theme.borders.width};
      --webstyle-border-style: ${theme.borders.style};
      --webstyle-radius: ${theme.borders.radius};
      --webstyle-shadow: ${theme.shadows.default};
    }

    html,
    body {
      font-family: var(--webstyle-font) !important;
      font-weight: var(--webstyle-font-weight) !important;
    }

    main,
    header,
    nav,
    footer,
    aside,
    section,
    article,
    p,
    span,
    li,
    label,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: var(--webstyle-font) !important;
    }

    button,
    input,
    textarea,
    select {
      font-family: var(--webstyle-font) !important;
      font-weight: var(--webstyle-font-weight) !important;
      border-width: var(--webstyle-border-width) !important;
      border-style: var(--webstyle-border-style) !important;
      border-radius: var(--webstyle-radius) !important;
      box-shadow: var(--webstyle-shadow) !important;
    }

    [role="button"],
    [role="menu"],
    [role="menuitem"],
    [role="dialog"],
    [role="tab"],
    [role="tabpanel"],
    [role="listbox"],
    [role="option"] {
      font-family: var(--webstyle-font) !important;
      border-radius: var(--webstyle-radius) !important;
    }

    img,
    video,
    svg,
    canvas {
      border-radius: var(--webstyle-radius) !important;
    }
  `.trim()
}

export function themeToCss(themeId: ThemeId): string {
  return buildCss(getTheme(themeId))
}
