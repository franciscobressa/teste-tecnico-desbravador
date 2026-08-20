import { renderRepoCard } from './RepoCard.js'

export function renderRepoList(container, repos) {
  if (!repos.length) {
    container.innerHTML =
      '<p class="text-muted mb-0">Nenhum repositório encontrado.</p>'
    return
  }

  container.innerHTML = `
    <div class="row g-3">
      ${repos.map((repo) => renderRepoCard(repo)).join('')}
    </div>
  `
}
