import { getRepo } from '../services/github.js'
import { showLoading } from '../components/loading.js'
import { showError } from '../components/error.js'
import { renderBackLink } from '../components/BackLink.js'
import { renderRepoDetail } from '../components/RepoDetail.js'
import { MESSAGES } from '../constants.js'

export async function renderRepoPage(app, { owner, name }) {
  showLoading(app, MESSAGES.loadRepo)

  try {
    const repo = await getRepo(owner, name)

    app.innerHTML = `
      ${renderBackLink(`/user/${owner}`, 'Voltar para o perfil')}
      ${renderRepoDetail(repo)}
    `
  } catch (error) {
    const message = error.message || MESSAGES.repoError

    app.innerHTML = `
      ${renderBackLink(`/user/${owner}`, 'Voltar para o perfil')}
      <div id="repo-error"></div>
    `

    showError(app.querySelector('#repo-error'), message)
  }
}
