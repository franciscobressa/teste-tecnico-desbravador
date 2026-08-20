import { FALLBACKS } from '../constants.js'
import { escapeHtml, fallback } from '../utils/format.js'

export function renderUserCard(user) {
  const login = escapeHtml(user.login)
  const bio = escapeHtml(fallback(user.bio, FALLBACKS.bio))
  const email = escapeHtml(fallback(user.email, FALLBACKS.email))

  return `
    <article class="card shadow-sm">
      <div class="card-body">
        <div class="d-flex flex-column flex-sm-row align-items-center align-items-sm-start gap-3 mb-4">
          <img
            src="${user.avatar_url}"
            alt="Avatar de ${login}"
            class="rounded-circle user-avatar"
            width="96"
            height="96"
          />
          <div class="text-center text-sm-start">
            <h1 class="h3 mb-1">${login}</h1>
            <p class="text-muted mb-0">${bio}</p>
          </div>
        </div>

        <dl class="row mb-0">
          <dt class="col-sm-4 col-md-3">Seguidores</dt>
          <dd class="col-sm-8 col-md-9">${user.followers}</dd>

          <dt class="col-sm-4 col-md-3">Seguindo</dt>
          <dd class="col-sm-8 col-md-9">${user.following}</dd>

          <dt class="col-sm-4 col-md-3">E-mail</dt>
          <dd class="col-sm-8 col-md-9">${email}</dd>
        </dl>
      </div>
    </article>
  `
}
