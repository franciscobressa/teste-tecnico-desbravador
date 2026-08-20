import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './styles/main.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <section class="home-placeholder">
    <h1 class="display-5 fw-bold mb-3">GitHub Explorer</h1>
    <p class="lead text-muted">
      Busque repositórios populares de um usuário do GitHub.
    </p>
  </section>
`
