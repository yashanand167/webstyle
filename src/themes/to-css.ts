import { getTheme } from "./index"
import type { Theme, ThemeId } from "./types"

export const THEME_STYLE_ID = "webstyle-theme"

function buildCss(theme: Theme): string {
  return `
    :root {
      --webstyle-bg: ${theme.colors.background};
      --webstyle-fg: ${theme.colors.foreground};
      --webstyle-accent: ${theme.colors.accent};
      --webstyle-secondary: ${theme.colors.secondary};
      --webstyle-font: ${theme.typography.fontFamily};
      --webstyle-font-weight: ${theme.typography.fontWeight};
      --webstyle-border-width: ${theme.borders.width};
      --webstyle-border-style: ${theme.borders.style};
      --webstyle-border-color: ${theme.borders.color};
      --webstyle-radius: ${theme.borders.radius};
      --webstyle-shadow: ${theme.shadows.default};
    }

    html {
      background-color: var(--webstyle-bg) !important;
      color: var(--webstyle-fg) !important;
      font-family: var(--webstyle-font) !important;
      font-weight: var(--webstyle-font-weight) !important;
    }

    body {
      background-color: var(--webstyle-bg) !important;
      color: var(--webstyle-fg) !important;
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
    div,
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

    a,
    a:visited {
      color: var(--webstyle-accent) !important;
    }

    button,
    input,
    textarea,
    select {
      font-family: var(--webstyle-font) !important;
      font-weight: var(--webstyle-font-weight) !important;
      color: var(--webstyle-fg) !important;
      background-color: var(--webstyle-bg) !important;
      border: var(--webstyle-border-width) var(--webstyle-border-style) var(--webstyle-border-color) !important;
      border-radius: var(--webstyle-radius) !important;
      box-shadow: var(--webstyle-shadow) !important;
    }

    [role="button"],
    [role="menu"],
    [role="menuitem"],
    [role="dialog"],
    [role="tab"],
    [role="tabpanel"] {
      font-family: var(--webstyle-font) !important;
      border-radius: var(--webstyle-radius) !important;
    }
  `.trim()
}

export function themeToCss(themeId: ThemeId): string {
  return buildCss(getTheme(themeId))
}
