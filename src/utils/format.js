export function fallback(value, text) {
  return value || text
}

export function escapeHtml(text) {
  if (!text) return ''

  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
