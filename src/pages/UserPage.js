export function renderUserPage(app, { username }) {
  app.innerHTML = `
    <section>
      <h1 class="h3 mb-3">Perfil do usuário</h1>
      <p class="text-muted mb-3">Placeholder — dados do usuário virão aqui.</p>
      <dl class="row">
        <dt class="col-sm-3">Username</dt>
        <dd class="col-sm-9">${username}</dd>
      </dl>
      <span class="badge text-bg-secondary">Rota: /user/:username</span>
    </section>
  `
}
