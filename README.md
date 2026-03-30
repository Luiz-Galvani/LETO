<div align="center">
  <h1>LETO</h1>
  <h2>Sistema de Otimização do Fluxo de Pacientes e Gestão de Leitos</h2>
</div>
<p align="justify">O LETO é uma plataforma integrada, composta por uma aplicação móvel e um painel de controle (dashboard) web, projetada para gerenciar e otimizar a logística do fluxo de pacientes em ambientes hospitalares. O foco arquitetônico da solução é a mitigação do gargalo operacional referente ao tempo de giro do leito — o intervalo quantitativo entre a alta médica e a liberação sistêmica e física do acomodamento para uma nova internação. Através da automação de fluxos de trabalho e monitoramento em tempo real , o sistema orquestra as etapas de alta, transporte de pacientes e higienização de leitos. O objetivo estabelecido é uma redução de até 40% no tempo de ociosidade dos leitos, maximizando a eficiência da capacidade instalada e aprimorando a experiência do paciente.</p>

<hr>
<h2>Stack Tecnológica</h2>
<ul>

  <li><strong>React Native</strong>: Framework utilizado para o desenvolvimento do <i>Frontend Mobile</i>, garantindo compatibilidade multiplataforma.</li>

  <li><strong>React + Tailwind CSS</strong>: Tecnologias aplicadas na construção do <i>Frontend Web (Dashboard)</i> para a gestão hospitalar.</li>

  <li><strong>Node.js</strong>: Ambiente de execução utilizado para estruturar o <i>Backend</i> e o roteamento das APIs.</li>

  <li><strong>Firebase</strong>: Solução implementada para gerenciar a mensageria e sincronização de dados em Tempo Real entre os clientes.</li>

  <li><strong>PostgreSQL</strong>: Sistema de Gerenciamento de Banco de Dados Relacional (SGBDR) escolhido para persistência principal e integridade dos dados.</li>

  <li><strong>QR Code / RFID / IoT</strong>: Protocolos e hardwares de identificação utilizados para validação em campo (ex: registro de conclusão da higienização do leito).</li>
</ul>

<hr>
<h2>Estrutura do Repositório</h2>

<pre>
leto-hospital-management/
├── scripts/                    # Automações de ambiente e setup
│   ├── setup_env.sh            # Script para instalação de Node, Yarn/npm, etc.
│   ├── init_db.sql             # Script SQL para criar as tabelas iniciais do banco
│   └── start_all.sh            # Script para rodar backend, web e mobile de uma vez
├── mobile/                     # Código-fonte da aplicação React Native
│   ├── src/
│   ├── .env.example            # Variáveis de ambiente de exemplo (ex: URL da API)
│   ├── .gitignore              # Ignora o .env real e pastas como node_modules
│   └── package.json
├── web/                        # Código-fonte do Dashboard em React
│   ├── src/
│   ├── .env.example
│   ├── .gitignore
│   └── package.json
├── backend/                    # API RESTful em Node.js
│   ├── src/
│   ├── .env.example            # Exemplo de credenciais (DB, Firebase, JWT)
│   ├── .gitignore
│   └── package.json
├── .gitignore                  # Regras globais de exclusão do repositório
└── README.md                   # Documentação principal
</pre>
<p align="justify">A arquitetura do projeto foi segmentada em três módulos principais para isolar responsabilidades, facilitar a manutenção e permitir o escalonamento independente dos serviços acoplados.</p>

<hr>
<h2>Principais Funcionalidades e Fluxo de Negócio</h2>

<h3 id="fluxo-alta">Orquestração do Fluxo de Alta</h3>

<ul>
  <li><strong>Gatilho de Alta Automático:</strong> Registro sistêmico imediato realizado pelo corpo médico, que inicializa a esteira de liberação do leito.</li>
  
  <li><strong>Sistema de Alertas:</strong> Disparo de notificações automatizadas e assíncronas para as equipes de apoio (transporte e higienização).</li>

  <li><strong>Rastreabilidade Operacional:</strong> Monitoramento contínuo e em tempo real do status de transição de cada leito cadastrado.</li>

  <li><strong>Dashboard Gerencial:</strong> Interface centralizada que fornece métricas e visibilidade global para a administração do hospital.</li>

  <li><strong>Auditoria de Higienização:</strong> Controle de qualidade e liberação do quarto mediante leitura e validação via QR Code.</li>

  <li><strong>Comunicação Integrada:</strong> Plataforma digital que visa eliminar ruídos comunicacionais e ineficiências entre os setores do hospital.</li>
</ul>

<hr>
<h2>Instruções de Implantação e Execução</h2>
<h3>Pré-requisitos do Ambiente:</h3>
<ul>
  <li>Node.js v18.x ou superior</li>
  <li>Gerenciador de pacotes (NPM ou Yarn)</li>
  <li>PostgreSQL instanciado e acessível</li>
  <li>Git</li>
</ul>

<h3>Passo a passo (Configuração do Backend):</h3>
  <ol>
    <li>
      <strong>Clonagem do repositório:</strong>
      <pre><code>git clone https://github.com/Luiz-Galvani/LETO</code></pre>
    </li>
    <li><strong>Instalação de dependências:</strong>
      <pre><code>npm install</code></pre>
    </li>
    <li><strong>Configuração de Variáveis de Ambiente:</strong>
      Crie um arquivo <code>.env</code> no diretório raiz do backend. Insira as credenciais de conexão do PostgreSQL e as chaves de configuração do projeto Firebase.
    </li>
    <li>
      <strong>Execução do servidor de desenvolvimento:</strong>
      <pre><code>npm run dev</code></pre>
    </li>
  </ol>
  <p align="justify"><em>Nota: O procedimento de instalação de dependências (<code>npm install</code>) e execução (<code>npm start</code>) deve ser replicado nos diretórios <code>web</code> e <code>mobile</code> para inicializar as interfaces de usuário.</em></p>
  
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