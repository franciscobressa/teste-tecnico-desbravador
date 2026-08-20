import { navigate } from '../router.js'
import { MESSAGES } from '../constants.js'

export function renderSearchPage(app) {
  app.innerHTML = `
    <section class="home-placeholder page-section">
      <h1 class="display-5 fw-bold mb-3">GitHub Explorer</h1>
      <p class="lead text-muted mb-4">
        Busque repositórios populares de um usuário do GitHub.
      </p>

      <form id="search-form" class="search-form">
        <div class="input-group input-group-lg">
          <input
            id="username-input"
            type="text"
            class="form-control"
            placeholder="Ex: torvalds"
            autocomplete="off"
            required
          />
          <button id="search-button" type="submit" class="btn btn-primary px-4">
            Buscar
          </button>
        </div>
      </form>

      <div id="search-feedback" class="mt-3"></div>
    </section>
  `

  const form = app.querySelector('#search-form')
  const input = app.querySelector('#username-input')
  const button = app.querySelector('#search-button')
  const feedback = app.querySelector('#search-feedback')

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    feedback.innerHTML = ''

    const username = input.value.trim()

    if (!username) {
      feedback.innerHTML = `
        <div class="alert alert-warning mb-0">${MESSAGES.emptyUsername}</div>
      `
      return
    }

    button.disabled = true
    button.textContent = MESSAGES.searching
    input.disabled = true

    navigate(`/user/${encodeURIComponent(username)}`)
  })

  input.focus()
}
