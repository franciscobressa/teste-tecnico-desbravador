export function renderRepoCard(repo) {
  const description = repo.description || 'Sem descrição'
  const language = repo.language || '—'

  return `
    <div class="col-md-6 col-lg-4">
      <a
        href="/repo/${repo.owner.login}/${repo.name}"
        class="card h-100 text-decoration-none text-body repo-card"
      >
        <div class="card-body">
          <h3 class="h6 card-title mb-2">${repo.name}</h3>
          <p class="card-text text-muted small mb-3">${description}</p>
          <div class="d-flex justify-content-between small">
            <span>⭐ ${repo.stargazers_count}</span>
            <span>${language}</span>
          </div>
        </div>
      </a>
    </div>
  `
}
