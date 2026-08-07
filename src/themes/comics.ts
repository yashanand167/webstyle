import type { Theme } from "./types"

export const comicsTheme: Theme = {
  id: "comics",
  name: "Comics",

  colors: {
    background: "#FFF8E7",
    foreground: "#111111",
    accent: "#FF3B30",
    secondary: "#FFD60A",
  },

  typography: {
    fontFamily: "Comic Sans MS, Chalkboard SE, cursive",
    fontWeight: "700",
  },

  borders: {
    width: "3px",
    style: "solid",
    color: "#111111",
    radius: "6px",
  },

  shadows: {
    default: "4px 4px 0 #111111",
  },
}
