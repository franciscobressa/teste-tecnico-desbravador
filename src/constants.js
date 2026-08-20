export const DEFAULT_SORT = 'stars-desc'

export const SORT_OPTIONS = [
  { value: 'stars-desc', label: 'Estrelas (maior)' },
  { value: 'stars-asc', label: 'Estrelas (menor)' },
  { value: 'name-asc', label: 'Nome (A-Z)' },
  { value: 'name-desc', label: 'Nome (Z-A)' },
  { value: 'updated-desc', label: 'Atualizado (recente)' },
  { value: 'updated-asc', label: 'Atualizado (antigo)' },
]

export const FALLBACKS = {
  bio: 'Sem biografia',
  email: 'Não informado',
  description: 'Sem descrição',
  language: '—',
}

export const MESSAGES = {
  loadUser: 'Carregando perfil...',
  loadRepo: 'Carregando repositório...',
  searching: 'Buscando...',
  userError: 'Não foi possível carregar o usuário.',
  repoError: 'Não foi possível carregar o repositório.',
  reposError: 'Não foi possível carregar os repositórios.',
  emptyUsername: 'Digite um username.',
  noRepos: 'Nenhum repositório encontrado.',
  rateLimit: 'Limite de requisições do GitHub atingido. Aguarde um momento.',
  notFound: 'Recurso não encontrado.',
  network: 'Não foi possível conectar à API do GitHub.',
}
