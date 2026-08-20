import { MESSAGES } from '../constants.js'
import { renderRepoCard } from './RepoCard.js'

export function renderRepoList(container, repos) {
  if (!repos.length) {
    container.innerHTML = `
      <div class="empty-state">
        <p class="text-muted mb-0">${MESSAGES.noRepos}</p>
      </div>
    `
    return
  }

  container.innerHTML = `
    <div class="row g-3">
      ${repos.map((repo) => renderRepoCard(repo)).join('')}
    </div>
  `
}
