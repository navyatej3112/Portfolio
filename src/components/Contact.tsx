import { motion } from 'framer-motion'
import { Mail, MapPin, Github, Linkedin } from 'lucide-react'
import { profile } from '../data/profile'

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20"
      aria-labelledby="contact-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-2xl p-8 sm:p-10 border border-[var(--color-card-border)] max-w-xl mx-auto text-center"
      >
        <h2 id="contact-heading" className="text-2xl sm:text-3xl font-bold text-[var(--color-fg)]">
          Get in touch
        </h2>
        <p className="mt-2 text-[var(--color-fg-muted)]">
          Open to roles starting Summer 2026. Happy to chat about backend, full-stack, or ML systems.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-accent)] text-white font-medium hover:bg-[var(--color-accent-hover)] transition-colors"
          >
            <Mail size={18} /> Email me
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass-card border border-[var(--color-card-border)] text-[var(--color-fg)] font-medium hover:border-[var(--color-accent)]/40 transition-colors"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass-card border border-[var(--color-card-border)] text-[var(--color-fg)] font-medium hover:border-[var(--color-accent)]/40 transition-colors"
          >
            <Github size={18} /> GitHub
          </a>
        </div>
        <p className="mt-6 text-sm text-[var(--color-fg-muted)] flex items-center justify-center gap-1.5">
          <MapPin size={14} /> {profile.location}
        </p>
      </motion.div>
    </section>
  )
}
