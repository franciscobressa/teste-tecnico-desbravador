import { getUser } from '../services/github.js'
import { showLoading } from '../components/loading.js'
import { showError } from '../components/error.js'
import { renderUserCard } from '../components/UserCard.js'

export async function renderUserPage(app, { username }) {
  showLoading(app, 'Buscando usuário...')

  try {
    const user = await getUser(username)

    app.innerHTML = `
      <a href="/" class="btn btn-link ps-0 mb-3">← Voltar para busca</a>
      ${renderUserCard(user)}
    `
  } catch (error) {
    const message = error.message || 'Não foi possível carregar o usuário.'

    app.innerHTML = `
      <a href="/" class="btn btn-link ps-0 mb-3">← Voltar para busca</a>
      <div id="user-error"></div>
    `

    showError(app.querySelector('#user-error'), message)
  }
}
