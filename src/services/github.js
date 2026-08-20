import axios from 'axios'

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github+json',
  },
})

export class GitHubApiError extends Error {
  constructor(message, { status, type } = {}) {
    super(message)
    this.name = 'GitHubApiError'
    this.status = status
    this.type = type
  }
}

function toGitHubApiError(error) {
  if (error instanceof GitHubApiError) {
    return error
  }

  if (error.response) {
    const { status } = error.response

    if (status === 404) {
      return new GitHubApiError('Recurso não encontrado.', {
        status,
        type: 'not_found',
      })
    }

    if (status === 403) {
      return new GitHubApiError(
        'Limite de requisições excedido. Tente novamente em instantes.',
        { status, type: 'rate_limit' },
      )
    }

    return new GitHubApiError('Erro ao comunicar com a API do GitHub.', {
      status,
      type: 'unknown',
    })
  }

  if (error.request) {
    return new GitHubApiError('Não foi possível conectar à API do GitHub.', {
      type: 'network',
    })
  }

  return new GitHubApiError('Erro inesperado ao processar a requisição.', {
    type: 'unknown',
  })
}

async function request(requestFn) {
  try {
    const { data } = await requestFn()
    return data
  } catch (error) {
    throw toGitHubApiError(error)
  }
}

export function getUser(username) {
  return request(() =>
    githubApi.get(`/users/${encodeURIComponent(username)}`),
  )
}

export function getUserRepos(username) {
  return request(() =>
    githubApi.get(`/users/${encodeURIComponent(username)}/repos`, {
      params: {
        per_page: 100,
        sort: 'updated',
      },
    }),
  )
}

export function getRepo(owner, name) {
  return request(() =>
    githubApi.get(
      `/repos/${encodeURIComponent(owner)}/${encodeURIComponent(name)}`,
    ),
  )
}
