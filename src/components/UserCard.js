export function renderUserCard(user) {
  const bio = user.bio || 'Sem biografia'
  const email = user.email || 'Não informado'

  return `
    <div class="card shadow-sm">
      <div class="card-body">
        <div class="d-flex flex-column flex-sm-row align-items-center align-items-sm-start gap-3 mb-4">
          <img
            src="${user.avatar_url}"
            alt="Avatar de ${user.login}"
            class="rounded-circle"
            width="96"
            height="96"
          />
          <div class="text-center text-sm-start">
            <h1 class="h3 mb-1">${user.login}</h1>
            <p class="text-muted mb-0">${bio}</p>
          </div>
        </div>

        <dl class="row mb-0">
          <dt class="col-sm-4">Seguidores</dt>
          <dd class="col-sm-8">${user.followers}</dd>

          <dt class="col-sm-4">Seguindo</dt>
          <dd class="col-sm-8">${user.following}</dd>

          <dt class="col-sm-4">E-mail</dt>
          <dd class="col-sm-8">${email}</dd>
        </dl>
      </div>
    </div>
  `
}
