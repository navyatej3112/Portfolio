import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { profile } from '../data/profile'

export function Education() {
  return (
    <section
      id="education"
      className="py-20 px-5 sm:px-6 max-w-5xl mx-auto scroll-mt-20"
      aria-labelledby="education-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 id="education-heading" className="section-title text-2xl sm:text-3xl font-bold text-[var(--color-fg)]">
          Education
        </h2>
        <p className="mt-2 text-[var(--color-fg-muted)] section-body">Degrees and institutions.</p>

        <div className="mt-8 space-y-6">
          {profile.education.map((edu, i) => (
            <motion.div
              key={`${edu.school}-${edu.degree}`}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-xl p-5 border border-[var(--color-card-border)] hover:border-[var(--color-accent)]/20 transition-colors flex gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-accent)]/20 flex items-center justify-center" aria-hidden="true">
                <GraduationCap className="text-[var(--color-accent)]" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-fg)]">{edu.degree}</h3>
                <p className="text-[var(--color-accent)] font-medium">{edu.school}</p>
                <p className="text-sm text-[var(--color-fg-muted)] mt-0.5">
                  {edu.location} · {edu.start} – {edu.end}
                  {edu.gpa != null && ` · GPA ${edu.gpa}`}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
