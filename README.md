# GitHub Explorer

Aplicação client-side para consultar a API do GitHub e exibir os repositórios mais populares de um usuário.

## Demo

> Substitua pela URL após o deploy (Vercel, Netlify ou Surge).

`https://seu-projeto.vercel.app`

## Tecnologias

- [Vite](https://vitejs.dev/) — build e dev server
- JavaScript (ES Modules) — sem framework SPA
- [Axios](https://axios-http.com/) — requisições HTTP
- [Bootstrap 5](https://getbootstrap.com/) — layout responsivo
- History API — roteamento client-side

## Funcionalidades

- Busca de usuário do GitHub
- Perfil com avatar, bio, seguidores, seguindo e e-mail
- Listagem de repositórios ordenada por estrelas (padrão)
- Ordenação alterável (estrelas, nome, data de atualização)
- Página de detalhes do repositório com link externo para o GitHub
- Tratamento de erros (usuário inexistente, rate limit, rede)

## Pré-requisitos

- Node.js 18 ou superior
- npm

## Instalação

```bash
git clone <url-do-repositorio>
cd teste-tecnico-desbravador
npm install
```

## Executar em desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

O build gera os arquivos estáticos na pasta `dist/`.

## Deploy

O projeto é uma SPA estática. Arquivos de configuração incluídos:

| Plataforma | Arquivo |
|---|---|
| Vercel | `vercel.json` |
| Netlify | `netlify.toml` e `public/_redirects` |

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

1. Conecte o repositório no painel da Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Surge

```bash
npm run build
npx surge dist
```

## APIs utilizadas

- `GET https://api.github.com/users/{username}`
- `GET https://api.github.com/users/{username}/repos`
- `GET https://api.github.com/repos/{owner}/{name}`

Documentação: https://docs.github.com/en/rest

## Decisões técnicas

- **Vanilla JS + Vite**: atende o requisito de não usar frameworks pesados, com DX moderna via ES Modules.
- **Router manual**: implementação leve com History API, sem dependências extras.
- **Axios**: facilita tratamento de erros HTTP e configuração da base URL.
- **Ordenação client-side**: evita novas requisições ao alterar o critério de sort.
- **Paginação de repos**: busca todas as páginas (100 por request) para usuários com muitos repositórios.

## Estrutura do projeto

```
src/
  components/   # UI reutilizável
  pages/        # Telas por rota
  services/     # Integração com GitHub API
  utils/        # Helpers (sort, format)
  router.js     # Roteamento SPA
  constants.js  # Mensagens e configurações
```

## Checklist do desafio

- [x] Aplicação client-side
- [x] Rotas obrigatórias
- [x] Axios
- [x] Bootstrap responsivo
- [x] Busca de usuário
- [x] Detalhes do usuário
- [x] Repositórios ordenados por estrelas
- [x] Ordenação alterável
- [x] Detalhes do repositório + link externo
- [x] README com instalação e execução
- [ ] Demo hospedada (adicionar URL após deploy)
