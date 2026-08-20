import { FALLBACKS } from '../constants.js'
import { fallback } from '../utils/format.js'

export function renderRepoDetail(repo) {
  const description = fallback(repo.description, FALLBACKS.description)
  const language = fallback(repo.language, FALLBACKS.language)

  return `
    <article class="card shadow-sm">
      <div class="card-body">
        <h1 class="h3 mb-2">${repo.full_name}</h1>
        <p class="text-muted mb-4">${description}</p>

        <dl class="row mb-4">
          <dt class="col-sm-3">Estrelas</dt>
          <dd class="col-sm-9">⭐ ${repo.stargazers_count}</dd>

          <dt class="col-sm-3">Linguagem</dt>
          <dd class="col-sm-9">${language}</dd>
        </dl>

        <a
          href="${repo.html_url}"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary"
        >
          Ver no GitHub
        </a>
      </div>
    </article>
  `
}
