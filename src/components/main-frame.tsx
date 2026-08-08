import { motion } from "motion/react"
import { useEffect } from "react"
import { useThemeStore } from "../store/theme-store"
import { themeList } from "../themes"
import type { Theme } from "../themes/types"

function ThemeCard({
  theme,
  active,
  onSelect,
}: {
  theme: Theme
  active: boolean
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="flex w-full flex-col gap-3 rounded-xl p-4 text-left transition hover:opacity-90"
      style={{
        background: theme.preview.background,
        color: theme.preview.foreground,
        border: `${theme.borders.width} ${theme.borders.style} ${theme.borders.color}`,
        borderRadius: theme.borders.radius,
        boxShadow: active
          ? `${theme.shadows.default}, 0 0 0 2px ${theme.preview.accent}`
          : theme.shadows.default,
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.fontWeight,
      }}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-base">{theme.name}</span>
        {active ? (
          <span
            className="rounded-full px-2 py-0.5 text-xs"
            style={{
              background: theme.preview.accent,
              color: theme.preview.background,
            }}
          >
            Active
          </span>
        ) : null}
      </div>

      <div className="flex gap-2">
        {[theme.preview.accent, theme.preview.secondary, theme.preview.foreground].map(
          (color) => (
            <span
              key={color}
              className="h-4 w-4 rounded-full"
              style={{
                background: color,
                border: `1px solid ${theme.borders.color}`,
              }}
            />
          ),
        )}
      </div>
    </button>
  )
}

export const MainFrame = () => {
  const { activeTheme, load, select } = useThemeStore()

  useEffect(() => {
    void load()
  }, [load])

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      className="flex h-full min-h-[480px] w-full flex-col overflow-hidden rounded-2xl ring-1 ring-[var(--border)]"
    >
      <div className="flex flex-col gap-4 p-5">
        <div>
          <h1 className="m-0 text-xl font-semibold tracking-tight text-[var(--text-h)]">
            WebStyle
          </h1>
          <p className="mt-1 text-sm text-[var(--text)]">
            Restyle typography, shapes, and shadows — keeps each site&apos;s colors.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {themeList.map((theme) => (
            <ThemeCard
              key={theme.id}
              theme={theme}
              active={activeTheme === theme.id}
              onSelect={() => void select(theme.id)}
            />
          ))}

          <button
            type="button"
            onClick={() => void select(null)}
            className="rounded-xl border border-[var(--border)] px-4 py-3 text-sm text-[var(--text)] transition hover:bg-[var(--code-bg)]"
          >
            Reset to site default
          </button>
        </div>
      </div>
    </motion.div>
  )
}
