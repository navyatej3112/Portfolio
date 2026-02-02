import { motion } from 'framer-motion'
import { profile } from '../data/profile'

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20"
      aria-labelledby="skills-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 id="skills-heading" className="text-2xl sm:text-3xl font-bold text-[var(--color-fg)]">
          Skills
        </h2>
        <p className="mt-2 text-[var(--color-fg-muted)]">
          Languages, frameworks, and tools I work with.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.skills.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card rounded-xl p-4 border border-[var(--color-card-border)] hover:border-[var(--color-accent)]/20 transition-colors"
            >
              <h3 className="text-sm font-semibold text-[var(--color-accent)] mb-3">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs font-medium rounded-lg bg-[var(--color-bg)]/80 text-[var(--color-fg-muted)] border border-[var(--color-card-border)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
