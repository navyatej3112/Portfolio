import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useActiveSection } from '../hooks/useActiveSection'
import { profile } from '../data/profile'

const LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
  { id: 'resume', label: 'Resume' },
]

function NavLink({
  id,
  label,
  active,
  onClick,
}: {
  id: string
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <a
      href={`#${id}`}
      onClick={onClick}
      className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
        active ? 'text-[var(--color-accent)]' : 'text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]'
      }`}
      aria-current={active ? 'page' : undefined}
    >
      {active && (
        <motion.span
          layoutId="nav-pill"
          className="absolute inset-0 z-0 rounded-lg bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30"
          transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </a>
  )
}

export function Nav() {
  const [open, setOpen] = useState(false)
  const activeId = useActiveSection()
  const { theme, toggleTheme } = useTheme()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 glass-card border-b border-[var(--color-card-border)] backdrop-blur-md bg-[var(--color-bg)]/80">
      <nav className="max-w-5xl mx-auto px-5 sm:px-6 flex items-center justify-between h-14" aria-label="Main navigation">
        <a href="#hero" className="font-semibold text-[var(--color-fg)] truncate">
          {profile.name.split(' ')[0]}
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {LINKS.map(({ id, label }) => (
            <NavLink
              key={id}
              id={id}
              label={label}
              active={activeId === id}
              onClick={() => scrollTo(id)}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-lg text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-card)] transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-[var(--color-card-border)]"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {LINKS.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => scrollTo(id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${
                    activeId === id ? 'text-[var(--color-accent)] bg-[var(--color-accent)]/10' : 'text-[var(--color-fg-muted)]'
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
