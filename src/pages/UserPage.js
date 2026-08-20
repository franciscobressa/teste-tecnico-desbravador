import { getUser, getUserRepos } from '../services/github.js'
import { showLoading } from '../components/loading.js'
import { showError } from '../components/error.js'
import { renderBackLink } from '../components/BackLink.js'
import { renderUserCard } from '../components/UserCard.js'
import { renderRepoList } from '../components/RepoList.js'
import { renderSortSelect } from '../components/SortSelect.js'
import { DEFAULT_SORT, MESSAGES } from '../constants.js'
import { sortRepos } from '../utils/sortRepos.js'

export async function renderUserPage(app, { username }) {
  showLoading(app, MESSAGES.loadUser)

  try {
    const user = await getUser(username)

    let repos = []
    let reposWarning = null

    try {
      repos = await getUserRepos(username)
    } catch (error) {
      reposWarning = error.message || MESSAGES.reposError
    }

    let currentSort = DEFAULT_SORT

    function renderRepos() {
      const sortedRepos = sortRepos(repos, currentSort)
      renderRepoList(app.querySelector('#repo-list'), sortedRepos)
    }

    function renderPage() {
      app.innerHTML = `
        ${renderBackLink('/', 'Voltar para busca')}
        ${renderUserCard(user)}

        <section class="page-section mt-4">
          <div class="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-2 mb-3">
            <h2 class="h4 mb-0">Repositórios (${repos.length})</h2>
            <div id="sort-select"></div>
          </div>
          ${reposWarning ? `<div id="repos-warning" class="mb-3"></div>` : ''}
          <div id="repo-list"></div>
        </section>
      `

      if (reposWarning) {
        showError(app.querySelector('#repos-warning'), reposWarning)
      }

      if (repos.length) {
        renderSortSelect(app.querySelector('#sort-select'), currentSort, (sortBy) => {
          currentSort = sortBy
          renderRepos()
        })
      } else {
        app.querySelector('#sort-select').innerHTML = ''
      }

      renderRepos()
    }

    renderPage()
  } catch (error) {
    const message = error.message || MESSAGES.userError

    app.innerHTML = `
      ${renderBackLink('/', 'Voltar para busca')}
      <div id="user-error"></div>
    `

    showError(app.querySelector('#user-error'), message)
  }
}
