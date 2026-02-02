import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, FileDown, ArrowRight } from 'lucide-react'
import { profile } from '../data/profile'

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[90vh] flex flex-col justify-center px-4 sm:px-6 max-w-5xl mx-auto pt-8 pb-16 relative"
      aria-labelledby="hero-heading"
    >
      {/* Floating orbs — decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-[var(--color-accent)]/20 blur-3xl top-1/4 -left-32"
          animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-indigo-500/15 blur-2xl bottom-1/4 right-0"
          animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-medium text-[var(--color-accent)] mb-2">Hi, I&apos;m</p>
        <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--color-fg)] tracking-tight">
          {profile.name}
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-[var(--color-fg-muted)] max-w-xl">
          {profile.shortBio}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-accent)] text-white font-medium hover:bg-[var(--color-accent-hover)] transition-colors"
          >
            View Projects <ArrowRight size={16} />
          </a>
          <a
            href="#resume"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass-card border border-[var(--color-card-border)] text-[var(--color-fg)] font-medium hover:border-[var(--color-accent)]/40 transition-colors"
          >
            <FileDown size={16} /> Download Resume
          </a>
        </div>

        <div className="mt-8 flex items-center gap-4" aria-label="Social links">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-card)] transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-card)] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="p-2 rounded-lg text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-card)] transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
