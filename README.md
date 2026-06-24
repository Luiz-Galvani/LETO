<div align="center">
  <h1>LETO</h1>
  <h2>Sistema de Otimização do Fluxo de Pacientes e Gestão de Leitos</h2>
</div>

<p align="justify">O LETO é uma plataforma integrada, composta por um dashboard web e uma API RESTful, projetada para gerenciar e otimizar a logística do fluxo de pacientes em ambientes hospitalares. O foco arquitetônico da solução é a mitigação do gargalo operacional referente ao tempo de giro do leito — o intervalo quantitativo entre a alta médica e a liberação sistêmica e física do acomodamento para uma nova internação. Através da automação de fluxos de trabalho e monitoramento em tempo real, o sistema orquestra as etapas de alta, transporte de pacientes e higienização de leitos. O objetivo estabelecido é uma redução de até 40% no tempo de ociosidade dos leitos, maximizando a eficiência da capacidade instalada e aprimorando a experiência do paciente.</p>

<hr>

<h2>Stack Tecnológica</h2>
<ul>
  <li><strong>React 19</strong>: Framework utilizado para o desenvolvimento do <i>Frontend Web (Dashboard)</i>, garantindo interfaces reativas e responsivas.</li>

  <li><strong>Vite</strong>: Build tool moderno para otimização e desenvolvimento rápido do frontend.</li>

  <li><strong>React Router</strong>: Gerenciamento de rotas e navegação na aplicação web.</li>

  <li><strong>Node.js + Express</strong>: Ambiente de execução utilizado para estruturar o <i>Backend</i> com arquitetura em camadas (Controllers, Services, Repositories).</li>

  <li><strong>Neon Database (PostgreSQL Serverless)</strong>: Sistema de Gerenciamento de Banco de Dados Relacional (SGBDR) escolhido para persistência de dados com suporte serverless.</li>

  <li><strong>JWT (JSON Web Tokens)</strong>: Implementação de autenticação e autorização de usuários.</li>

  <li><strong>bcrypt</strong>: Criptografia de senhas para segurança de dados sensíveis.</li>

  <li><strong>CORS</strong>: Configuração para comunicação segura entre frontend e backend.</li>
</ul>

<hr>
<h2>Estrutura do Repositório</h2>

<pre>
LETO/
├── frontend/                    # Dashboard web em React + Vite
│   ├── src/
│   │   ├── components/          # Componentes reutilizáveis (Card, Header, Sidebar)
│   │   ├── pages/               # Páginas da aplicação (Login, Dashboard, Monitoramento)
│   │   ├── services/            # Serviços de integração com API
│   │   ├── styles/              # Estilos CSS específicos por página
│   │   ├── assets/              # Recursos estáticos
│   │   ├── App.jsx              # Componente raiz
│   │   └── main.jsx             # Ponto de entrada da aplicação
│   ├── package.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── index.html
├── src/                         # Backend em Node.js + Express
│   ├── app/                     # Módulos da aplicação
│   │   ├── beds/                # Gerenciamento de leitos
│   │   ├── staff/               # Gerenciamento de pessoal
│   │   ├── task/                # Gerenciamento de tarefas
│   │   └── user/                # Gerenciamento de usuários
│   │       ├── user.controller.js    # Controlador
│   │       └── user.service.js       # Serviço de negócio
│   └── repositories/            # Camada de acesso a dados
│       ├── beds.repository.js
│       ├── staff.repository.js
│       ├── task.repository.js
│       ├── user.repository.js
│       └── database/
│           └── database-config.js
├── scripts/                     # Utilitários e automações
│   ├── reset-user-password.js   # Script para resetar senha de usuário
│   ├── temp-get-users.js        # Script temporário para listar usuários
│   ├── temp-post-test.js        # Script de teste de POST
│   └── test-db.js               # Script de teste de conexão com DB
├── server.js                    # Ponto de entrada do servidor Express
├── package.json                 # Dependências do backend
└── .env.example                 # Variáveis de ambiente de exemplo
</pre>

<p align="justify">A arquitetura do projeto segue um padrão em camadas com separação clara de responsabilidades: a camada de apresentação (Frontend), a camada de lógica de negócio (Services), e a camada de acesso a dados (Repositories).</p>
<h2>Arquitetura de Módulos</h2>

<p align="justify">O projeto é dividido em dois componentes principais:</p>

<ul>
  <li><strong>Frontend (React + Vite):</strong> Interface web responsiva para gestão hospitalar, acesso a informações de leitos, visualização de tarefas, monitoramento em tempo real e gerenciamento de usuários.</li>
  <li><strong>Backend (Node.js + Express):</strong> API RESTful que fornece endpoints para gerenciamento de leitos, pessoal, tarefas e usuários, com autenticação JWT e camada de persistência via PostgreSQL.</li>
</ul>

<h3>Organização de Camadas (Backend)</h3>

<ul>
  <li><strong>Controllers:</strong> Recebem requisições HTTP e delegam a lógica aos Services.</li>
  <li><strong>Services:</strong> Implementam a lógica de negócio e orquestram operações entre Repositories.</li>
  <li><strong>Repositories:</strong> Encapsulam acesso ao banco de dados através de consultas SQL.</li>
</ul>

<h3>Módulos Principais (CRUDS da apresentação)</h3>

<ul>
  <li><strong>User (Usuários):</strong> Autenticação, autorização e gerenciamento de perfis de usuários.</li>
  <li><strong>Beds (Leitos):</strong> Gestão do inventário de leitos, status (ocupado, disponível, em higienização) e histórico de ocupação.</li>
  <li><strong>Staff (Pessoal):</strong> Gerenciamento de equipes, escalas e atribuição de tarefas.</li>
  <li><strong>Task (Tarefas):</strong> Criação, atribuição e acompanhamento de tarefas operacionais (higienização, transporte, etc).</li>
</ul>

<hr>
<h2>Instruções de Implantação e Execução</h2>

<h3>Pré-requisitos:</h3>
<ul>
  <li>Node.js v18.x ou superior</li>
  <li>npm ou yarn (gerenciador de pacotes)</li>
  <li>PostgreSQL instanciado (local ou remoto, como Neon Database)</li>
  <li>Git</li>
</ul>

<h3>Configuração Inicial</h3>

<h4>1. Clonagem do repositório:</h4>
<pre><code>git clone https://github.com/Luiz-Galvani/LETO
cd LETO
</code></pre>

<h4>2. Configuração de Variáveis de Ambiente:</h4>
<p>Crie um arquivo <code>.env</code> na raiz do projeto com as seguintes variáveis:</p>
<pre><code>DB_HOST=postgresql://usuario:senha@host:porta/banco
PORT=3000
JWT_SECRET=sua_chave_secreta_jwt
</code></pre>

<h4>3. Instalação de Dependências - Backend:</h4>
<pre><code>npm install
</code></pre>

<h4>4. Instalação de Dependências - Frontend:</h4>
<pre><code>cd frontend
npm install
cd ..
</code></pre>

<h3>Execução</h3>

<h4>Backend (Servidor Express):</h4>
<pre><code>npm start          # Produção
npm run dev        # Desenvolvimento com reload automático
</code></pre>

<p>O servidor estará disponível em <code>http://localhost:3000</code></p>

<h4>Frontend (Dashboard React):</h4>
<pre><code>cd frontend
npm run dev        # Desenvolvimento
npm run build      # Build para produção
</code></pre>

<h4>Executar Backend e Frontend Simultaneamente:</h4>
<pre><code>npm run serve
</code></pre>

<h3>Scripts Úteis</h3>

<ul>
  <li><strong>Reset de Senha de Usuário:</strong>
    <pre><code>node scripts/reset-user-password.js</code></pre>
  </li>
  <li><strong>Listar Usuários (Temporário):</strong>
    <pre><code>node scripts/temp-get-users.js</code></pre>
  </li>
  <li><strong>Teste de Banco de Dados:</strong>
    <pre><code>node scripts/test-db.js</code></pre>
  </li>
</ul>
  
  <hr>
  <h2>⚠️ Conformidade e Segurança da Informação</h2>
  
  <p align="justify">Os dados populados neste projeto, durante as fases de desenvolvimento e homologação, são estritamente fictícios e gerados por algoritmos de <i>mocking</i>. A arquitetura do sistema contempla diretrizes de conformidade com a Lei Geral de Proteção de Dados (LGPD), empregando criptografia de ponta a ponta e matrizes rigorosas de controle de acesso por níveis de privilégio. O sistema também prevê mitigação de indisponibilidade através de redundância de servidores visando um SLA de 99.9%. Nenhuma Informação Pessoal de Saúde (PHI) real é processada ou armazenada neste repositório público.</p>
  
  <hr>
  <h2>Licença e Autoria</h2>
    
<p align="justify">Este projeto foi documentado e arquitetado pela equipe da empresa LETO, composta por:</p>

<ul>
  <li>Luiz Alexandre Nishiyama Galvani</li>
  <li>Kayky José Kenji Ribeiro</li>
  <li>Kauã Henrique de Lima Ribeiro Oliveira</li>
  <li>Vitor Gabriel Alves Rodrigues</li>
</ul>

<hr>

<h2>© 2026 LETO. Todos os direitos reservados.</h2>

<p align="justify">Este repositório contém código proprietário e confidencial. O uso, cópia, modificação, distribuição, publicação ou comercialização deste software, seja no todo ou em parte, é estritamente proibido sem a autorização prévia e expressa por escrito dos autores e representantes legais da LETO.</p>
