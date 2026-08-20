export function renderNotFoundPage(app) {
  app.innerHTML = `
    <section class="empty-state page-section">
      <h1 class="display-6 fw-bold mb-3">404</h1>
      <p class="text-muted mb-4">Página não encontrada.</p>
      <a href="/" class="btn btn-primary">Voltar para a busca</a>
    </section>
  `
}
