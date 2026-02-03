import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, FileDown, ArrowRight, ChevronDown, Cloud, Brain, Briefcase, MapPin, GraduationCap } from 'lucide-react'
import { profile } from '../data/profile'
import { publicUrl } from '../utils/baseUrl'

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[90vh] flex flex-col justify-center px-4 sm:px-6 max-w-5xl mx-auto pt-8 pb-16 relative"
      aria-labelledby="hero-heading"
    >
      {/* Hero backdrop — gradient blobs with slow drift */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-[var(--color-accent)]/15 blur-3xl top-1/4 -left-48"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-indigo-500/12 blur-3xl bottom-1/3 right-1/4"
          animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-purple-500/10 blur-3xl top-1/2 left-1/3"
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
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

        {/* Quick highlights row */}
        <div className="mt-6 flex flex-wrap gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass-card border border-[var(--color-card-border)] text-xs sm:text-sm text-[var(--color-fg-muted)]">
            <Cloud size={14} className="text-[var(--color-accent)]" />
            Backend & Cloud
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass-card border border-[var(--color-card-border)] text-xs sm:text-sm text-[var(--color-fg-muted)]">
            <Brain size={14} className="text-[var(--color-accent)]" />
            AI Tooling & RAG
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass-card border border-[var(--color-card-border)] text-xs sm:text-sm text-[var(--color-fg-muted)]">
            <Briefcase size={14} className="text-[var(--color-accent)]" />
            Open to Summer 2026
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-accent)] text-white font-medium hover:bg-[var(--color-accent-hover)] transition-colors"
          >
            View Projects <ArrowRight size={16} />
          </a>
          <a
            href={publicUrl(profile.resumePath)}
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass-card border border-[var(--color-card-border)] text-[var(--color-fg)] font-medium hover:border-[var(--color-accent)]/40 transition-colors"
          >
            <FileDown size={16} /> Download Resume
          </a>
        </div>

        {/* Currently panel */}
        <div className="mt-8 glass-card rounded-xl p-4 border border-[var(--color-card-border)] max-w-md">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-[var(--color-fg-muted)]">
            <div className="flex items-center gap-2">
              <GraduationCap size={16} className="text-[var(--color-accent)]" />
              <span>MS CS @ NC State, graduating May 2026</span>
            </div>
            <div className="hidden sm:block text-[var(--color-card-border)]">•</div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-[var(--color-accent)]" />
              <span>Raleigh, NC</span>
            </div>
          </div>
          <div className="mt-2 text-sm text-[var(--color-fg-muted)]">
            Target roles: SWE, backend or full-stack
          </div>
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

      {/* Animated scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          aria-label="Scroll to about section"
        >
          <ChevronDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  )
}
