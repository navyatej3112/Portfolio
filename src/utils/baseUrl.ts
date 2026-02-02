/** Public asset URL respecting Vite base path (e.g. GitHub Pages /repo/). */
export function publicUrl(path: string): string {
  const base = import.meta.env.BASE_URL
  const clean = path.replace(/^\//, '')
  return base === '/' ? `/${clean}` : `${base}${clean}`
}
