import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { publicUrl } from '../utils/baseUrl'

export function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20"
      aria-labelledby="about-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="order-2 md:order-1">
          <h2 id="about-heading" className="text-2xl sm:text-3xl font-bold text-[var(--color-fg)]">
            About
          </h2>
          <p className="mt-4 text-[var(--color-fg-muted)] leading-relaxed">
            {profile.aboutParagraph}
          </p>
          <p className="mt-3 text-[var(--color-fg-muted)]">
            Based in {profile.location}. Open to Software Engineer roles starting Summer 2026—backend or full-stack.
          </p>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-2xl overflow-hidden glass-card border-2 border-[var(--color-card-border)] shadow-xl hover:border-[var(--color-accent)]/30 transition-colors"
          >
            <img
              src={publicUrl(profile.profileImagePath)}
              alt={`${profile.name} — headshot`}
              className="w-full h-full object-cover"
              width={288}
              height={288}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
