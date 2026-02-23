import { motion } from 'framer-motion'
import { profile } from '../data/profile'

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-5 sm:px-6 max-w-5xl mx-auto scroll-mt-20"
      aria-labelledby="experience-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 id="experience-heading" className="section-title text-2xl sm:text-3xl font-bold text-[var(--color-fg)]">
          Experience
        </h2>
        <p className="mt-2 text-[var(--color-fg-muted)] section-body">Where I&apos;ve built and shipped.</p>

        <div className="mt-10 relative">
          {/* Timeline line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-[var(--color-card-border)]" aria-hidden="true" />

          <ul className="space-y-10" role="list">
            {profile.experience.map((job, i) => (
              <motion.li
                key={`${job.company}-${job.role}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative pl-10"
              >
                <span
                  className="absolute left-0 w-6 h-6 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)] flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                </span>
                <div className="glass-card rounded-xl p-5 border border-[var(--color-card-border)] hover:border-[var(--color-accent)]/20 transition-colors">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-[var(--color-fg)]">{job.role}</h3>
                    <span className="text-sm text-[var(--color-fg-muted)]">
                      {job.start} – {job.end}
                    </span>
                  </div>
                  <p className="text-[var(--color-accent)] font-medium mt-0.5">{job.company}</p>
                  <p className="text-sm text-[var(--color-fg-muted)]">{job.location}</p>
                  <ul className="mt-4 space-y-2 list-disc list-inside text-[var(--color-fg-muted)] text-sm section-body">
                    {job.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
