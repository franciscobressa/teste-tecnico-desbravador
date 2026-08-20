export function renderRepoPage(app, { owner, name }) {
  app.innerHTML = `
    <section>
      <h1 class="h3 mb-3">Detalhes do repositório</h1>
      <p class="text-muted mb-3">Placeholder — dados do repositório virão aqui.</p>
      <dl class="row">
        <dt class="col-sm-3">Owner</dt>
        <dd class="col-sm-9">${owner}</dd>
        <dt class="col-sm-3">Nome</dt>
        <dd class="col-sm-9">${name}</dd>
      </dl>
      <span class="badge text-bg-secondary">Rota: /repo/:owner/:name</span>
    </section>
  `
}
