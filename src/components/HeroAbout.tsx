import { motion } from 'framer-motion'
import {
  Github,
  Linkedin,
  Mail,
  FileDown,
  ArrowRight,
  ChevronDown,
  Server,
  Dumbbell,
  Activity,
  Code,
  Zap,
  MapPin,
  Database,
  Cpu,
} from 'lucide-react'
import { profile } from '../data/profile'
import { publicUrl } from '../utils/baseUrl'

const HOBBY_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  dumbbell: Dumbbell,
  activity: Activity,
  code: Code,
  zap: Zap,
  map: MapPin,
}

export function HeroAbout() {
  return (
    <section
      id="hero"
      className="min-h-[90vh] flex flex-col justify-center px-5 sm:px-6 max-w-6xl mx-auto pt-8 pb-20 md:pb-24 relative"
      aria-labelledby="hero-heading"
    >
      {/* Backdrop blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-[var(--color-accent)]/12 blur-3xl top-1/4 -left-48"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl bottom-1/3 right-1/4"
          animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative grid lg:grid-cols-[1fr_0.65fr] gap-12 lg:gap-16 items-start">
        {/* Left: 60% — copy + CTAs + stats + expertise + hobbies */}
        <motion.div
          className="min-w-0"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <motion.span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[var(--color-accent)]/20 text-[var(--color-accent)] border border-[var(--color-accent)]/30"
              animate={{ opacity: [1, 0.88, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              </span>
              {profile.statusBadge}
            </motion.span>
            <a
              href={publicUrl(profile.resumePath)}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-accent)] text-white font-semibold hover:bg-[var(--color-accent-hover)] transition-colors shadow-lg shadow-[var(--color-accent)]/25"
            >
              <FileDown size={18} /> Download Resume
            </a>
          </div>

          <p className="text-sm font-medium text-[var(--color-accent)] mb-1">Hi, I&apos;m {profile.name.split(' ')[0]}</p>
          <h1 id="hero-heading" className="section-title text-4xl sm:text-5xl font-bold text-[var(--color-fg)] tracking-tight">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg text-[var(--color-fg)] font-medium max-w-xl">{profile.heroHeadline}</p>
          <p className="mt-1 text-base text-[var(--color-fg-muted)] max-w-xl section-body">{profile.heroSubheadline}</p>

          <p className="mt-5 text-[var(--color-fg-muted)] section-body max-w-xl">{profile.aboutParagraph1}</p>
          <p className="mt-3 text-[var(--color-fg-muted)] section-body max-w-xl">{profile.aboutParagraph2}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass-card border border-[var(--color-card-border)] text-[var(--color-fg)] font-medium hover:border-[var(--color-accent)]/40 transition-colors"
            >
              View Projects <ArrowRight size={16} />
            </a>
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

          {/* Key stats bar */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--color-fg-muted)]">
            {profile.keyStats.map((stat) => (
              <span key={stat} className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                {stat}
              </span>
            ))}
          </div>

          {/* Core expertise mini-grid */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {profile.coreExpertise.map((item) => (
              <div
                key={item.label}
                className="glass-card rounded-lg p-3 border border-[var(--color-card-border)]"
              >
                <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wide">{item.label}</p>
                <p className="text-sm text-[var(--color-fg-muted)] mt-0.5 section-body">{item.line}</p>
              </div>
            ))}
          </div>

          {/* Hobbies */}
          <div className="mt-5 flex flex-wrap gap-4">
            {profile.hobbies.map((h) => {
              const Icon = HOBBY_ICONS[h.iconKey] ?? Zap
              return (
                <span
                  key={h.label}
                  className="inline-flex items-center gap-2 text-sm text-[var(--color-fg-muted)]"
                >
                  <Icon size={16} className="text-[var(--color-accent)]" />
                  {h.label}
                </span>
              )
            })}
          </div>
        </motion.div>

        {/* Right: 40% — headshot + Systems Snapshot with gentle float */}
        <motion.div
          className="flex flex-col gap-6 lg:pt-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.div
            className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto lg:mx-0 rounded-2xl overflow-hidden glass-card border-2 border-[var(--color-card-border)] shrink-0"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img
              src={publicUrl(profile.profileImagePath)}
              alt={`${profile.name} — headshot`}
              className="w-full h-full object-cover"
              width={224}
              height={224}
            />
          </motion.div>

          <motion.div
            className="glass-card rounded-xl p-4 border border-[var(--color-card-border)]"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <h3 className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wide mb-3">
              Systems snapshot
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 flex-wrap">
                <Database size={14} className="text-[var(--color-fg-muted)] shrink-0" />
                <span className="text-xs text-[var(--color-fg-muted)]">Ingest</span>
                <span className="text-[var(--color-card-border)]">→</span>
                <span className="px-1.5 py-0.5 text-[10px] rounded bg-[var(--color-bg)]/80 text-[var(--color-fg-muted)]">S3</span>
                <span className="px-1.5 py-0.5 text-[10px] rounded bg-[var(--color-bg)]/80 text-[var(--color-fg-muted)]">Lambda</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <Cpu size={14} className="text-[var(--color-fg-muted)] shrink-0" />
                <span className="text-xs text-[var(--color-fg-muted)]">Process</span>
                <span className="text-[var(--color-card-border)]">→</span>
                <span className="px-1.5 py-0.5 text-[10px] rounded bg-[var(--color-bg)]/80 text-[var(--color-fg-muted)]">FastAPI</span>
                <span className="px-1.5 py-0.5 text-[10px] rounded bg-[var(--color-bg)]/80 text-[var(--color-fg-muted)]">Redis</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <Server size={14} className="text-[var(--color-fg-muted)] shrink-0" />
                <span className="text-xs text-[var(--color-fg-muted)]">Serve</span>
                <span className="text-[var(--color-card-border)]">→</span>
                <span className="px-1.5 py-0.5 text-[10px] rounded bg-[var(--color-bg)]/80 text-[var(--color-fg-muted)]">RAG</span>
                <span className="px-1.5 py-0.5 text-[10px] rounded bg-[var(--color-bg)]/80 text-[var(--color-fg-muted)]">API</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.4 }}
      >
        <motion.a
          href="#skills"
          className="flex flex-col items-center gap-2 text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          aria-label="Scroll to skills"
        >
          <ChevronDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  )
}
