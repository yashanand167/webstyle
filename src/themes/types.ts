export type ThemeId = "comics" | "apple"

export type Theme = {
  id: ThemeId
  name: string
  /** Swatches for the popup preview only — never injected onto pages */
  preview: {
    background: string
    foreground: string
    accent: string
    secondary: string
  }
  typography: {
    fontFamily: string
    fontWeight: string
  }
  borders: {
    width: string
    style: string
    color: string
    radius: string
  }
  shadows: {
    default: string
  }
}
