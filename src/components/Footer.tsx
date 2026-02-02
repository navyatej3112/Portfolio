import { Github, Linkedin } from 'lucide-react'
import { profile } from '../data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-card-border)] py-8 px-4 sm:px-6" role="contentinfo">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--color-fg-muted)]">
          © {year} {profile.name}. Built with React, Vite, Tailwind.
        </p>
        <div className="flex items-center gap-4" aria-label="Social links">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
