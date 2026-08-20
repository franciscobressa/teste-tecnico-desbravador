import { DEFAULT_SORT, SORT_OPTIONS } from '../constants.js'

export function renderSortSelect(container, selected = DEFAULT_SORT, onChange) {
  const options = SORT_OPTIONS.map(
    (option) =>
      `<option value="${option.value}" ${option.value === selected ? 'selected' : ''}>
        ${option.label}
      </option>`,
  ).join('')

  container.innerHTML = `
    <label class="d-flex align-items-center gap-2 mb-0">
      <span class="small text-muted">Ordenar por</span>
      <select class="form-select form-select-sm sort-select">${options}</select>
    </label>
  `

  container.querySelector('.sort-select').addEventListener('change', (event) => {
    onChange(event.target.value)
  })
}
