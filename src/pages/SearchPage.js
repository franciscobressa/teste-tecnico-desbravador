export function renderSearchPage(app) {
  app.innerHTML = `
    <section class="home-placeholder">
      <h1 class="display-5 fw-bold mb-3">GitHub Explorer</h1>
      <p class="lead text-muted">
        Busque repositórios populares de um usuário do GitHub.
      </p>
      <span class="badge text-bg-secondary">Rota: /</span>
    </section>
  `
}
