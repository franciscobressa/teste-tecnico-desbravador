# GitHub Explorer

Aplicação client-side para consultar a API do GitHub e exibir os repositórios mais populares de um usuário.

## Demo

**https://teste-tecnico-desbravador.vercel.app**

## Tecnologias

- [Vite](https://vitejs.dev/)
- JavaScript (ES Modules)
- [Axios](https://axios-http.com/)
- [Bootstrap 5](https://getbootstrap.com/)
- History API

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
- [x] Demo hospedada
