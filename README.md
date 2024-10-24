# Autenticação com NextAuth, Prisma e Next.js 15

Neste mini projeto, você irá implementar a autenticação em um hipotético SaaS de Livros de Programação. Usaremos o NextAuth para gerenciar a autenticação e o Prisma para a interação com o banco de dados, enquanto nosso frameworks será o Next.js 15. O design já está preparado, e o foco será na implementação das funcionalidades sem a necessidade de modificar muito o HTML e o CSS.

## 🤓 Antes de começar

Para este projeto, já temos o template inicial do projeto preparado no repositório. Ao fazer o fork você encontrará todos os arquivos iniciais. 

## 🔨 Requisitos

- Faça a instalação e o setup do NextAuth v5.
  - O único provedor que você irá usar neste Mini Projeto é o `Credentials` (login com email e senha). 

- Crie e gerencie sua base de dados usando o Prisma
  - Você precisará, pelo menos, de uma tabela de usuários
	
    > 👀 **Dicas:**
    > - Consulte a documentação do NextAuth para entender como configurar os provedores de autenticação e o Prisma.

- **Funcionalidade de registrar usuários usando a tela de cadastro**
  - Use, na medida do possível, _server actions_.
  - Um usuário deverá possuir _nome_, _email_ e _senha_.
  - A senha deverá ser criptografada antes de ser salva na base de dados.
  - A tela de cadastro não pode ser acessível a usuários logados (redirecione ao dashboard)

      > 👀 **Dicas:**
      > - O NextAuth auxilia no login do usuário - a implementação do cadastro de usuário deverá ser feita por você.

- **Funcionalidade de logar usuários usando a tela de login**
  - Use, na medida do possível, _server actions_.
  - Ao logar, redirecione o usuário para a tela de dashboard.
  - A tela de login não pode ser acessível a usuários logados (redirecione ao dashboard)
 
- **Funcionalidade de deslogar o usuário. **

- **Navegação e renderização condicional**
  - Na home, quando o usuário estiver logado, o botão da Navbar deverá ser `Dashboard`. Quando o usuário estiver deslogado, o botão deverá ser `Login`.
  - Um usuário deslogado não poderá acessar a Dashboard.
  - Um usuário logado não poderá acessar as telas de login e cadastro. 


## 🔨 Desafio extra para quem quer ir além

- Implemente uma página de perfil onde o usuário poderá visualizar e editar suas informações como _nome_ e _senha_. 

## 🎨 Design Sugerido

O layout está no Figma e já está implementado no projeto. Você não precisará implementá-lo. 

### Figma

🔗 [Link do design]()

## 👉🏽 Sobre esse mini-projeto

### O que você irá praticar:

#### Next.js

- Conhecimentos sobre a configuração de páginas e rotas dinâmicas.
- Implementação de middlewares para proteger rotas de acesso restrito.

#### NextAuth

- Aprender sobre autenticação em aplicações Next.js.
- Uso de callbacks e estratégias de autenticação.

#### Prisma

- Gerenciar banco de dados de forma eficiente e intuitiva.
- Criação de modelos e migrações com Prisma.


### Pré requisitos

- Conhecimentos em JavaScript, React e NextJs.
