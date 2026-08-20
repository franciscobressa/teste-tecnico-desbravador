import axios from 'axios'
import { MESSAGES } from '../constants.js'

const api = axios.create({
  baseURL: 'https://api.github.com',
})

function getErrorMessage(error) {
  if (error.response?.status === 404) {
    return MESSAGES.notFound
  }

  if (error.response?.status === 403) {
    return MESSAGES.rateLimit
  }

  if (error.request) {
    return MESSAGES.network
  }

  return 'Erro ao comunicar com a API do GitHub.'
}

async function request(requestFn) {
  try {
    const { data } = await requestFn()
    return data
  } catch (error) {
    throw new Error(getErrorMessage(error))
  }
}

export function getUser(username) {
  return request(() => api.get(`/users/${username}`))
}

export async function getUserRepos(username) {
  let page = 1
  let repos = []

  while (true) {
    const data = await request(() =>
      api.get(`/users/${username}/repos`, {
        params: { per_page: 100, page },
      }),
    )

    repos = repos.concat(data)

    if (data.length < 100) {
      break
    }

    page += 1
  }

  return repos
}

export function getRepo(owner, name) {
  return request(() => api.get(`/repos/${owner}/${name}`))
}
