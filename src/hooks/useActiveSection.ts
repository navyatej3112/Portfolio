import { useEffect, useState } from 'react'

const SECTION_IDS = [
  'hero',
  'skills',
  'experience',
  'projects',
  'education',
  'contact',
  'resume',
]

export function useActiveSection() {
  const [activeId, setActiveId] = useState<string>('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const id = entry.target.id
          if (SECTION_IDS.includes(id)) setActiveId(id)
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return activeId
}
