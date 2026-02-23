import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Star, Calendar } from 'lucide-react'
import { profile } from '../data/profile'
import { useGitHubRepo } from '../hooks/useGitHubRepo'
import type { ProjectItem } from '../data/profile'

const FILTERS = ['All', 'AI/ML', 'Full Stack', 'Data', 'Systems']

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const { data: gh } = useGitHubRepo(project.githubRepo)

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="glass-card-project rounded-xl overflow-hidden border border-[var(--color-card-border)] hover:border-[var(--color-accent)]/40 hover:shadow-[0_0_20px_rgba(124,58,237,0.12)] transition-all duration-300 group"
    >
      {/* 16:9 placeholder area for project media */}
      <div className="aspect-video w-full bg-[var(--color-bg)]/80 border-b border-[var(--color-card-border)]" aria-hidden="true" />
      <div className="p-5">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-[var(--color-fg)]">{project.title}</h3>
          {(gh?.stars !== undefined && gh.stars > 0) || gh?.updatedAt ? (
            <div className="flex items-center gap-3 text-xs text-[var(--color-fg-muted)]">
              {gh?.stars != null && gh.stars > 0 && (
                <span className="flex items-center gap-1">
                  <Star size={12} /> {gh.stars}
                </span>
              )}
              {gh?.updatedAt && (
                <span className="flex items-center gap-1" title="Last updated">
                  <Calendar size={12} /> {new Date(gh.updatedAt).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}
                </span>
              )}
            </div>
          ) : null}
        </div>
        <p className="mt-2 text-sm text-[var(--color-fg-muted)] section-body">{project.oneLiner}</p>
        <ul className="mt-3 space-y-1 text-sm text-[var(--color-fg-muted)] list-disc list-inside section-body">
          {project.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
        {/* Tech pill tags at bottom of card */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-[var(--color-bg)]/80 text-[var(--color-fg-muted)] border border-[var(--color-card-border)]"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-accent)] hover:underline"
          >
            <Github size={16} /> Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-accent)] hover:underline"
          >
            <ExternalLink size={16} /> Live
          </a>
        )}
        </div>
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
      className="py-20 px-5 sm:px-6 max-w-5xl mx-auto scroll-mt-20"
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
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
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
          <p className="text-[var(--color-fg-muted)] py-8">No projects in this category.</p>
        )}
      </motion.div>
    </section>
  )
}
