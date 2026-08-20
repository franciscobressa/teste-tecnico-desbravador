import { navigate } from '../router.js'

export function renderSearchPage(app) {
  app.innerHTML = `
    <section class="home-placeholder">
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
          <button type="submit" class="btn btn-primary">Buscar</button>
        </div>
      </form>

      <div id="search-feedback" class="mt-3"></div>
    </section>
  `

  const form = app.querySelector('#search-form')
  const input = app.querySelector('#username-input')
  const feedback = app.querySelector('#search-feedback')

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    feedback.innerHTML = ''

    const username = input.value.trim()

    if (!username) {
      feedback.innerHTML =
        '<div class="alert alert-warning mb-0">Digite um username.</div>'
      return
    }

    navigate(`/user/${encodeURIComponent(username)}`)
  })

  input.focus()
}
