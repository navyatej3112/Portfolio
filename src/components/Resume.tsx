import { motion } from 'framer-motion'
import { FileDown } from 'lucide-react'
import { profile } from '../data/profile'
import { publicUrl } from '../utils/baseUrl'

export function Resume() {
  const resumeUrl = profile.resumePath.startsWith('http') ? profile.resumePath : publicUrl(profile.resumePath)

  return (
    <section
      id="resume"
      className="py-20 px-5 sm:px-6 max-w-5xl mx-auto scroll-mt-20"
      aria-labelledby="resume-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 id="resume-heading" className="section-title text-2xl sm:text-3xl font-bold text-[var(--color-fg)]">
          Resume
        </h2>
        <p className="mt-2 text-[var(--color-fg-muted)] section-body">View or download my resume (PDF).</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={resumeUrl}
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-accent)] text-white font-medium hover:bg-[var(--color-accent-hover)] transition-colors"
          >
            <FileDown size={18} /> Download Resume
          </a>
        </div>

        <div className="mt-6 glass-card rounded-xl overflow-hidden border border-[var(--color-card-border)] min-h-[60vh]">
          <object
            data={resumeUrl}
            type="application/pdf"
            width="100%"
            height="800"
            className="min-h-[70vh] w-full"
            aria-label="Resume PDF viewer"
          >
            <div className="p-6 text-center">
              <p className="text-[var(--color-fg-muted)] mb-4">
                Your browser does not support embedded PDFs.
              </p>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-accent)] text-white font-medium hover:bg-[var(--color-accent-hover)] transition-colors"
              >
                Open resume PDF
              </a>
            </div>
          </object>
        </div>
      </motion.div>
    </section>
  )
}
