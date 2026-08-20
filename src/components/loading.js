export function showLoading(container, message = 'Carregando...') {
  container.innerHTML = `
    <div class="text-center py-5">
      <div class="spinner-border text-primary" role="status" aria-hidden="true"></div>
      <p class="mt-3 mb-0 text-muted">${message}</p>
    </div>
  `
}
