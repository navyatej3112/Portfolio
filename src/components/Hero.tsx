import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, FileDown, ArrowRight, ChevronDown, Cloud, Brain, Briefcase, MapPin, GraduationCap } from 'lucide-react'
import { profile } from '../data/profile'
import { publicUrl } from '../utils/baseUrl'

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[90vh] flex flex-col justify-center px-5 sm:px-6 max-w-5xl mx-auto pt-8 pb-16 relative"
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
        {/* Status badge + primary CTA row */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <motion.span
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[var(--color-accent)]/20 text-[var(--color-accent)] border border-[var(--color-accent)]/30"
            animate={{ opacity: [1, 0.85, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            </span>
            Available for Summer 2026
          </motion.span>
          <a
            href={publicUrl(profile.resumePath)}
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-accent)] text-white font-semibold hover:bg-[var(--color-accent-hover)] transition-colors shadow-lg shadow-[var(--color-accent)]/25"
          >
            <FileDown size={18} /> Download Resume
          </a>
        </div>

        <p className="text-sm font-medium text-[var(--color-accent)] mb-2">Hi, I&apos;m {profile.name.split(' ')[0]}</p>
        <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--color-fg)] tracking-tight">
          {profile.name}
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-[var(--color-fg)] font-medium max-w-xl">
          {profile.heroHeadline}
        </p>
        <p className="mt-2 text-base sm:text-lg text-[var(--color-fg-muted)] max-w-xl">
          {profile.heroSubheadline}
        </p>

        {/* Key stats row */}
        <div className="mt-6 flex flex-wrap gap-4 text-sm text-[var(--color-fg-muted)]">
          <span className="inline-flex items-center gap-2">
            <GraduationCap size={16} className="text-[var(--color-accent)]" />
            MS CS @ NC State
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin size={16} className="text-[var(--color-accent)]" />
            Raleigh, NC
          </span>
          <span className="inline-flex items-center gap-2">
            <Briefcase size={16} className="text-[var(--color-accent)]" />
            Open to SWE (Backend/Full-stack)
          </span>
        </div>

        {/* Quick highlights row */}
        <div className="mt-5 flex flex-wrap gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass-card border border-[var(--color-card-border)] text-xs sm:text-sm text-[var(--color-fg-muted)]">
            <Cloud size={14} className="text-[var(--color-accent)]" />
            Backend & Cloud
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass-card border border-[var(--color-card-border)] text-xs sm:text-sm text-[var(--color-fg-muted)]">
            <Brain size={14} className="text-[var(--color-accent)]" />
            AI Tooling & RAG
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass-card border border-[var(--color-card-border)] text-[var(--color-fg)] font-medium hover:border-[var(--color-accent)]/40 transition-colors"
          >
            View Projects <ArrowRight size={16} />
          </a>
        </div>

        {/* Currently panel */}
        <div className="mt-6 glass-card rounded-xl p-4 border border-[var(--color-card-border)] max-w-lg">
          <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed">{profile.currentlyLine}</p>
        </div>

        <div className="mt-6 flex items-center gap-2 sm:gap-4" aria-label="Social links">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-2 min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 flex items-center justify-center rounded-lg text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-card)] transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} className="sm:w-5 sm:h-5" />
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-2 min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 flex items-center justify-center rounded-lg text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-card)] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} className="sm:w-5 sm:h-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="p-3 sm:p-2 min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 flex items-center justify-center rounded-lg text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-card)] transition-colors"
            aria-label="Email"
          >
            <Mail size={22} className="sm:w-5 sm:h-5" />
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
