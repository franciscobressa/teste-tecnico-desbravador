import { DEFAULT_SORT } from '../constants.js'

export function sortRepos(repos, sortBy = DEFAULT_SORT) {
  const list = [...repos]

  switch (sortBy) {
    case 'stars-asc':
      return list.sort((a, b) => a.stargazers_count - b.stargazers_count)

    case 'name-asc':
      return list.sort((a, b) => a.name.localeCompare(b.name))

    case 'name-desc':
      return list.sort((a, b) => b.name.localeCompare(a.name))

    case 'updated-desc':
      return list.sort(
        (a, b) => new Date(b.updated_at) - new Date(a.updated_at),
      )

    case 'updated-asc':
      return list.sort(
        (a, b) => new Date(a.updated_at) - new Date(b.updated_at),
      )

    case 'stars-desc':
    default:
      return list.sort((a, b) => b.stargazers_count - a.stargazers_count)
  }
}
