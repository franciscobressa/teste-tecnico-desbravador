export const SORT_OPTIONS = [
  { value: 'stars-desc', label: 'Estrelas (maior)' },
  { value: 'stars-asc', label: 'Estrelas (menor)' },
  { value: 'name-asc', label: 'Nome (A-Z)' },
  { value: 'name-desc', label: 'Nome (Z-A)' },
  { value: 'updated-desc', label: 'Atualizado (recente)' },
  { value: 'updated-asc', label: 'Atualizado (antigo)' },
]

export function sortRepos(repos, sortBy = 'stars-desc') {
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
