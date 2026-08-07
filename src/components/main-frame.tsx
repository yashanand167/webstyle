import { motion } from 'motion/react'

export const MainFrame = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      className="flex h-full min-h-[480px] w-full flex-col overflow-hidden rounded-2xl ring-1 ring-[var(--border)]"
    >
      <div className="flex flex-1 items-center justify-center p-6">
        <h1 className="m-0 text-center text-2xl font-semibold tracking-tight text-[var(--text-h)]">
          Hello
        </h1>
      </div>
    </motion.div>
  )
}

