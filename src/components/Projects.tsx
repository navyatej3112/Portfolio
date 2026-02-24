import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, MapPin, Activity, Timer, BarChart3, MessageSquare, ChevronRight } from 'lucide-react'
import { profile } from '../data/profile'
import type { ProjectItem } from '../data/profile'

const FILTERS = ['All', 'AI/ML', 'Full Stack', 'Data', 'Systems']

const PROJECT_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  map: MapPin,
  activity: Activity,
  timer: Timer,
  barChart: BarChart3,
  messageSquare: MessageSquare,
}

/** Left accent rail color by primary tag (CSS value for border-left-color) */
function getAccentBorderColor(tags: string[]): string {
  if (tags.includes('AI/ML')) return 'var(--color-accent)'
  if (tags.includes('Full Stack')) return 'rgba(99, 102, 241, 0.8)'
  if (tags.includes('Data')) return 'rgba(16, 185, 129, 0.8)'
  return 'rgba(245, 158, 11, 0.75)'
}

/** Tech pill variants (2–3 accent variants) */
function getPillVariant(i: number) {
  const v = i % 3
  if (v === 0) return 'bg-[var(--color-accent)]/15 text-[var(--color-accent)] border-[var(--color-accent)]/30'
  if (v === 1) return 'bg-[var(--color-bg)]/90 text-[var(--color-fg-muted)] border-[var(--color-card-border)]'
  return 'bg-[var(--color-card)] text-[var(--color-fg)] border-[var(--color-card-border)]'
}

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const githubHref = project.links?.github ?? project.githubUrl ?? '#'
  const Icon = PROJECT_ICONS[project.iconKey ?? 'messageSquare'] ?? MessageSquare

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-[var(--color-accent)]/40 hover:shadow-[0_0_20px_rgba(124,58,237,0.1)] transition-all duration-300"
      style={{ borderLeftWidth: 4, borderLeftStyle: 'solid', borderLeftColor: getAccentBorderColor(project.tags) } as React.CSSProperties}
    >
      <a
        href={githubHref}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] rounded-xl"
      >
        {/* Top row: icon badge, title, date, primary link cue */}
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
            <Icon size={20} />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold text-[var(--color-fg)]">{project.title}</h3>
            {project.date && (
              <p className="text-xs text-[var(--color-fg-muted)] mt-0.5">{project.date}</p>
            )}
          </div>
          <span className="shrink-0 text-[var(--color-fg-muted)] group-hover:text-[var(--color-accent)] transition-colors">
            <ChevronRight size={18} />
          </span>
        </div>

        {/* Mini system snapshot */}
        {project.snapshotSteps && project.snapshotSteps.length >= 3 && (
          <div className="flex flex-wrap items-center gap-1.5 mb-3 text-[10px]">
            <span className="px-1.5 py-0.5 rounded bg-[var(--color-bg)]/80 text-[var(--color-fg-muted)] border border-[var(--color-card-border)]">
              {project.snapshotSteps[0]}
            </span>
            <span className="text-[var(--color-card-border)]">→</span>
            <span className="px-1.5 py-0.5 rounded bg-[var(--color-bg)]/80 text-[var(--color-fg-muted)] border border-[var(--color-card-border)]">
              {project.snapshotSteps[1]}
            </span>
            <span className="text-[var(--color-card-border)]">→</span>
            <span className="px-1.5 py-0.5 rounded bg-[var(--color-bg)]/80 text-[var(--color-fg-muted)] border border-[var(--color-card-border)]">
              {project.snapshotSteps[2]}
            </span>
          </div>
        )}

        <p className="text-sm text-[var(--color-fg-muted)] section-body leading-relaxed">{project.oneLiner}</p>
        <ul className="mt-3 space-y-1 text-sm text-[var(--color-fg-muted)] list-disc list-inside section-body">
          {project.highlights.slice(0, 3).map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span
              key={t}
              className={`px-2.5 py-1 text-xs font-medium rounded-full border ${getPillVariant(i)}`}
            >
              {t}
            </span>
          ))}
        </div>
      </a>

      {/* Secondary links (stop propagation so card click doesn't fire) */}
      <div className="px-5 pb-5 pt-0 flex flex-wrap items-center gap-3">
        <a
          href={project.links?.github ?? project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 text-sm text-[var(--color-accent)] hover:underline min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0 items-center justify-center sm:justify-start"
        >
          <Github size={16} /> GitHub
        </a>
        {project.links?.devpost && (
          <a
            href={project.links.devpost}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-accent)] hover:underline min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0 items-center justify-center sm:justify-start"
          >
            <ExternalLink size={16} /> Devpost
          </a>
        )}
        {(project.links?.live ?? project.liveUrl) && (
          <a
            href={project.links?.live ?? project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-accent)] hover:underline min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0 items-center justify-center sm:justify-start"
          >
            <ExternalLink size={16} /> Live
          </a>
        )}
      </div>
    </motion.article>
  )
}

export function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(() => {
    if (filter === 'All') return profile.projects
    return profile.projects.filter((p) => p.tags.includes(filter))
  }, [filter])

  return (
    <section
      id="projects"
      className="section-padding py-16 md:py-24 px-5 sm:px-6 max-w-5xl mx-auto scroll-mt-20"
      aria-labelledby="projects-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 id="projects-heading" className="section-title text-2xl sm:text-3xl font-bold text-[var(--color-fg)]">
          Projects
        </h2>
        <p className="mt-2 text-[var(--color-fg-muted)] section-body">Selected work and side projects.</p>

        <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              role="tab"
              aria-selected={filter === f}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors min-h-[44px] sm:min-h-0 ${
                filter === f
                  ? 'bg-[var(--color-accent)] text-white'
                  : 'glass-card border border-[var(--color-card-border)] text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-[var(--color-fg-muted)] py-8 section-body">No projects in this category.</p>
        )}
      </motion.div>
    </section>
  )
}
