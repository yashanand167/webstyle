import type { Theme } from "./types"

export const appleTheme: Theme = {
  id: "apple",
  name: "Apple",

  colors: {
    background: "#F5F5F7",
    foreground: "#1D1D1F",
    accent: "#007AFF",
    secondary: "#86868B",
  },

  typography: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, SF Pro Display, SF Pro Text, system-ui, sans-serif",
    fontWeight: "600",
  },

  borders: {
    width: "1px",
    style: "solid",
    color: "#D2D2D7",
    radius: "12px",
  },

  shadows: {
    default: "0 4px 24px rgba(0, 0, 0, 0.08)",
  },
}
