import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './styles/main.css'

import { registerRoute, initRouter } from './router.js'
import { renderSearchPage } from './pages/SearchPage.js'
import { renderUserPage } from './pages/UserPage.js'
import { renderRepoPage } from './pages/RepoPage.js'
import { renderNotFoundPage } from './pages/NotFoundPage.js'

registerRoute('/', renderSearchPage)
registerRoute('/user/:username', renderUserPage)
registerRoute('/repo/:owner/:name', renderRepoPage)
registerRoute('*', renderNotFoundPage)

initRouter()
