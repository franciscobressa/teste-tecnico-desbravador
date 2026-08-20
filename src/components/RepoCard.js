import { FALLBACKS } from '../constants.js'
import { escapeHtml, fallback } from '../utils/format.js'

export function renderRepoCard(repo) {
  const name = escapeHtml(repo.name)
  const description = escapeHtml(fallback(repo.description, FALLBACKS.description))
  const language = escapeHtml(fallback(repo.language, FALLBACKS.language))

  return `
    <div class="col-md-6 col-lg-4">
      <a
        href="/repo/${repo.owner.login}/${repo.name}"
        class="card h-100 text-decoration-none text-body repo-card"
      >
        <div class="card-body d-flex flex-column">
          <h3 class="h6 card-title mb-2">${name}</h3>
          <p class="card-text text-muted small flex-grow-1 mb-3">${description}</p>
          <div class="d-flex justify-content-between small text-secondary">
            <span>⭐ ${repo.stargazers_count}</span>
            <span>${language}</span>
          </div>
        </div>
      </a>
    </div>
  `
}
