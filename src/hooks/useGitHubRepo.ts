import { useState, useEffect } from 'react'

const CACHE_KEY_PREFIX = 'gh-repo-'

export interface GitHubRepoInfo {
  stars: number
  updatedAt: string | null
}

export function useGitHubRepo(repo: string | undefined) {
  const [data, setData] = useState<GitHubRepoInfo | null>(null)
  const [loading, setLoading] = useState(!!repo)

  useEffect(() => {
    if (!repo) {
      setLoading(false)
      return
    }
    const key = CACHE_KEY_PREFIX + repo
    const cached = sessionStorage.getItem(key)
    if (cached) {
      try {
        setData(JSON.parse(cached))
      } catch {
        // ignore
      }
      setLoading(false)
      return
    }

    let cancelled = false
    fetch(`https://api.github.com/repos/${repo}`, {
      headers: { Accept: 'application/vnd.github.v3+json' },
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((json) => {
        if (cancelled || !json) return
        const info: GitHubRepoInfo = {
          stars: json.stargazers_count ?? 0,
          updatedAt: json.updated_at ?? null,
        }
        sessionStorage.setItem(key, JSON.stringify(info))
        setData(info)
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [repo])

  return { data, loading }
}
