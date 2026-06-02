# help-pet-front

## Como começar a contribuir
> Preencha as tópicos vazios desse readme de acordo com a função do seu grupo e faça alterações na seção estrutura de pastas conforme sejam feitas alterações.

## Pré-requisitos
É necessário ter:
  - Node - para rodar o projeto e utilizar as ferramentas do react.
  - npm - para instalar recursos e depêndencias do projeto.
  - git - para o versionamento do código.
  - Uma IDE de sua preferência.

## Instalando o node
> Este comando abaixo funciona tanto no **terminal do linux** quanto no **git bash no windows**.

```bash
# Baixar e instalar o nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# Carregar o nvm sem precisar reiniciar o terminal
\. "$HOME/.nvm/nvm.sh"

# Baixar e instalar o Node.js:
nvm install 24

# Verifique a versão do Node.js:
node -v # Deve exibir "v24.14.0".

# Verificar a versão do npm:
npm -v # Deve imprimir "11.9.0".
```

## Observação!!!
> realize estes passos no caso da instalação normal do node não estiver funcionando corretamente 

### Configuração do Ambiente para Rodar a Aplicação

Este guia explica como garantir que você está usando a versão correta do **Node.js (v24)** e como rodar a aplicação com Vite.

---

0. Entrar no diretório da aplicação
```bash
cd ~/Documentos/help-pet-front-(nome do seu grupo)
```

1. Verificar qual Node está ativo
```bash
node -v
which node
```

- O primeiro comando mostra a versão atual do Node.
- O segundo mostra o caminho do binário que está sendo usado (geralmente `/usr/bin/node`).

2. Instalar Node 24 com NVM (recomendado)

Se você não tem o **nvm** instalado:
```bash
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
```

Depois instale e use o Node 24:
```bash
nvm install 24
nvm use 24
nvm alias default 24   # torna o 24 padrão
```

3. Confirmar versão
```bash
node -v
```

Agora deve aparecer algo como:
```
v24.x.x
```

4. Reinstalar dependências
Dentro do diretório da aplicação:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

### Verificação se o node está instalado corretamente
> Caso algum pacote não seja compatível com Node 24, você pode instalar também o **Node 20 (LTS)** via nvm e alternar entre versões facilmente:
```bash
nvm install 20
nvm use 20
```

## Como rodar o projeto
1. Clone este repositório.
2. Abra o terminal dentro da pasta do projeto do seu grupo.
3. instale as depêndencias do projeto com o comando `` npm i ``.
4. Inicie o projeto com o comando `` npm run dev `` para rodar localmente.

## Estrutura das pastas
```
├── .github/
│   ├── CODEOWNERS
│   ├── ISSUE_TEMPLATE.md
│   └── PULL_REQUEST_TEMPLATE.md
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   │   └── .gitkeep
│   │   └── images/
│   │       └── brick-wall.png
│   ├── components/
│   │   ├── Button
│   │   │   ├── Button.jsx
│   │   │   └── ButtonS.jsx
│   │   └── Fragment.jsx
│   ├── pages/
│   │   ├── CommingSoonPage.jsx
│   │   ├── NotFoundPage.jsx
│   │   └── ExamplePage.jsx
│   ├── styles/
│   │   └── GlobalStyle.jsx
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Convenção de nomenclatura
> Padrão de nomeação que deve ser seguido em todas as etapas de desenvolvimento.

### Linguagem
- Inglês

### Arquivos e pastas
- kebab-case.
- Com exceção dos arquivos na pasta .github que devem ser todos em maiúsculo todas as pastas e arquivos devem permanecer neste padrão.
- Exemplo:

  ```
    ├── .github/
    │   ├── CODEOWNERS 
    │   └── PULL_REQUEST_TEMPLATE.md 
    └──── src/ 
           ├──assets
           └──pages
                └── page-one.html 
  ```

### Variáveis e funções
- camelCase.
- Nomes de variáveis e funções no front e back end devem seguir este padrão.
- Exemplo:

  ```jsx
  <!-- JavaScript -->
    let accessIcon = document.getElementsByClassName("accessibility-icon")[0]
    let accessOpen = document.getElementsByClassName("accessibility-open")[0]

    function closeMenu() {
    accessOpen.style.display = "";
    accessIcon.style.display = "flex";
    }
  ```

### Componentes react (componentes, estilos e páginas)
- PascalCase.
- Tanto as pastas quanto o arquivo e nome da função do componente deve seguir este padrão para serem diferenciados de funções normais.
- Utilizando as depêndencias react router e styled components páginas e estilos são considerados componentes e por isso devem seguir o mesmo padrão de nomeação.
- Exemplos:

#### Componente
  ```
    └─── src/
        └── components
            └── Button <- Pasta com B maiúsculo
                ├── Button.jsx
                └── ButtonS.js 
  ```

  ```jsx
  <!-- Dentro de Button.jsx -->
    export default function Button() {
      return (
        ...
      )
    }
  ```

#### Estilo
- Mesma nomeação com o prefixo **Style** no final.
```js
// Dentro de ButtonS.js
export const StyledButton = styled.button`
  ...
`
```

#### Página
- Mesma nomeação com o prefixo **Page** no final.
  ```
    └─── src/
        └── pages
            └── ComingSoonPage.jsx
  ```
  ```jsx
  <!-- Dentro de CommingSoonPage.jsx -->
    export default function CommingSoonPage() {
      return (
        ...
      )
    }
  ```

## Requisitos
<!-- Preencha os requisitos funcionais e não funcionais apenas do seu grupo -->
### Requisitos Funcionais — G8
 
| ID | Requisito |
|----|-----------|
| RF01 | O sistema deve possuir um API Gateway capaz de rotear requisições para os microsserviços correspondentes. |
| RF02 | O Gateway deve validar o token JWT antes de encaminhar requisições para rotas protegidas. |
| RF03 | O sistema deve gerar e retornar um token JWT válido após autenticação bem-sucedida do usuário. |
| RF04 | O sistema deve expor um endpoint de Health Check para verificar o status de cada serviço. |
| RF05 | O sistema deve centralizar os logs de todos os microsserviços em um único ponto de consulta |

### Requisitos Não Funcionais — G8
 
| ID | Requisito |
|----|-----------|
| RNF01 | O API Gateway deve ser implementado com Spring Cloud Gateway. |
| RNF02 | O token JWT deve ter tempo de expiração configurável via variável de ambiente. |
| RNF03 | O Health Check deve responder em menos de 500ms. |
| RNF04 | Os logs centralizados devem registrar no mínimo: timestamp, nível, serviço de origem e mensagem. |
| RNF05 | O sistema de roteamento deve ser configurável sem necessidade de recompilação de codigo |
