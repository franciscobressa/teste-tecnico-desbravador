const routes = []

function pathToRegex(path) {
  const paramNames = []

  const pattern = path
    .replace(/\//g, '\\/')
    .replace(/:([a-zA-Z]+)/g, (_, name) => {
      paramNames.push(name)
      return '([^/]+)'
    })

  return {
    regex: new RegExp(`^${pattern}$`),
    paramNames,
  }
}

export function registerRoute(path, handler) {
  const { regex, paramNames } = pathToRegex(path)

  routes.push({ path, handler, regex, paramNames })
}

function matchRoute(pathname) {
  for (const route of routes) {
    const match = pathname.match(route.regex)

    if (!match) continue

    const params = route.paramNames.reduce((acc, name, index) => {
      acc[name] = decodeURIComponent(match[index + 1])
      return acc
    }, {})

    return { handler: route.handler, params }
  }

  return null
}

export function navigate(path) {
  if (path === window.location.pathname) {
    handleRoute()
    return
  }

  history.pushState({}, '', path)
  handleRoute()
}

export function handleRoute() {
  const app = document.querySelector('#app')
  const matched = matchRoute(window.location.pathname)

  if (matched) {
    matched.handler(app, matched.params)
    return
  }

  const notFound = routes.find((route) => route.path === '*')

  if (notFound) {
    notFound.handler(app)
  }
}

function setupPopstateListener() {
  window.addEventListener('popstate', handleRoute)
}

function setupLinkInterceptor() {
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href]')

    if (!link) return
    if (link.target === '_blank') return
    if (link.origin !== window.location.origin) return

    const path = link.pathname

    event.preventDefault()
    navigate(path)
  })
}

export function initRouter() {
  setupPopstateListener()
  setupLinkInterceptor()
  handleRoute()
}
