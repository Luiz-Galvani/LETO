import '../styles/dashboard.css'; 
import logo from "../assets/logo.png"; 

function Dashboard() {
  // Array com os dados dos quartos atualizado com classes específicas de ícones
  const listaQuartos = [
    { id: 101, status: 'q-orange', type: 'cleaning' },
    { id: 102, status: 'q-blue', type: 'bed' },
    { id: 103, status: 'q-blue', type: 'bed' },
    { id: 104, status: 'q-blue', type: 'bed' },
    { id: 105, status: 'q-blue', type: 'bed' },
    { id: 106, status: 'q-blue', type: 'bed' },
    { id: 107, status: 'q-blue', type: 'bed' },
    { id: 108, status: 'q-green', type: 'available' },
    { id: 109, status: 'q-blue', type: 'bed' },
    { id: 110, status: 'q-blue', type: 'bed' },
    { id: 111, status: 'q-blue', type: 'bed' },
    { id: 112, status: 'q-orange', type: 'cleaning' },
    { id: 113, status: 'q-blue', type: 'bed' },
    { id: 114, status: 'q-orange', type: 'cleaning' },
    { id: 115, status: 'q-green', type: 'available' },
    { id: 116, status: 'q-blue', type: 'bed' },
    { id: 117, status: 'q-blue', type: 'bed' },
    { id: 118, status: 'q-red', type: 'alert' },
    { id: 119, status: 'q-blue', type: 'bed' },
    { id: 120, status: 'q-blue', type: 'bed' },
    { id: 121, status: 'q-blue', type: 'bed' },
    { id: 122, status: 'q-green', type: 'available' },
    { id: 123, status: 'q-red', type: 'alert' },
    { id: 124, status: 'q-blue', type: 'bed' },
    { id: 125, status: 'q-blue', type: 'bed' },
    { id: 126, status: 'q-blue', type: 'bed' },
    { id: 127, status: 'q-orange', type: 'cleaning' },
    { id: 128, status: 'q-blue', type: 'bed' },
    { id: 129, status: 'q-green', type: 'available' },
    { id: 130, status: 'q-blue', type: 'bed' }
  ];

  // Função auxiliar para renderizar os mini-ícones do mapa de leitos
  const renderRoomIcon = (type) => {
    switch(type) {
      case 'cleaning':
        return <svg className="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z"/></svg>;
      case 'available':
        return <svg className="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="6"/></svg>;
      case 'alert':
        return <svg className="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>;
      default:
        return <svg className="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M2 4v16M2 11h18M2 17h20M6 8h4M22 13v7"/></svg>;
    }
  };

  return (
    <div className="dashboard-container">
      
      {/* BARRA SUPERIOR PRINCIPAL */}
      <header className="main-header">
        <div className="header-left">
          <img src={logo} alt="LETO" className="dashboard-logo" />
          <div className="hospital-selector">
            <span className="hospital-name">Hospital São Lucas</span>
          </div>
        </div>
        
        <div className="header-right">
          <span className="header-clock-mini">13:24</span>
          <div className="search-box">
            <svg className="search-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input type="text" placeholder="Buscar paciente, quarto..." />
          </div>
          <button className="notification-btn">
            <svg className="top-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9m7.73 13a2 2 0 0 1-3.46 0"/></svg>
            <span className="notification-badge">4</span>
          </button>
          <div className="user-profile">
            <div className="user-avatar">MS</div>
            <span className="user-name">Dra. Marina</span>
            <button className="logout-inline-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/></svg>
            </button>
          </div>
        </div>
      </header>

      {/* SUB-MENU DE NAVEGAÇÃO HORIZONTAL */}
      <nav className="top-navigation">
        <div className="nav-links">
          <a href="#dashboard" className="nav-link active">
            <svg className="menu-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18M18 17V9M13 17V5M8 17v-4"/></svg>
            Dashboard
          </a>
          <a href="#quartos" className="nav-link">
            <svg className="menu-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 4v16M2 11h18M2 17h20M6 8h4M22 13v7"/></svg>
            Leitos
          </a>
          <a href="#transporte" className="nav-link">
            <svg className="menu-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 18H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4M19 18h2M10 6v12M14 6v6M19 15v6"/></svg>
            Transportes <span className="nav-count">5</span>
          </a>
          <a href="#higienizacao" className="nav-link">
            <svg className="menu-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            Higienização 
          </a>
          <a href="#equipe" className="nav-link">
            <svg className="menu-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8m14 14v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            Equipe <span className="nav-count alert">2</span>
          </a>
        </div>
        <a href="#configuracoes" className="nav-link-settings">
          <svg className="menu-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          Configurações
        </a>
      </nav>

      {/* ÁREA DE CONTEÚDO PRINCIPAL */}
      <main className="dashboard-content">
        
        {/* CABEÇALHO */}
        <section className="welcome-banner">
          <div className="welcome-text">
            <span className="current-date">Domingo, 21 de Junho de 2026</span>
            <h1>Dashboard</h1>
            <p className="welcome-sub">Bem-vindo ao Sistema LETO</p>
          </div>
          <div className="big-digital-clock">13:24</div>
        </section>

        {/* CARDS DE CONTADORES */}
        <section className="metrics-grid">
          <div className="metric-card">
            <div className="card-info">
              <span>Leitos Disponíveis</span>
              <h3>23</h3>
            </div>
            <div className="metric-icon-box m-green">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
          </div>
          <div className="metric-card">
            <div className="card-info">
              <span>Leitos Ocupados</span>
              <h3>41</h3>
            </div>
            <div className="metric-icon-box m-blue">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 4v16M2 11h18M2 17h20M6 8h4M22 13v7"/></svg>
            </div>
          </div>
          <div className="metric-card">
            <div className="card-info">
              <span>Transportes Pendentes</span>
              <h3>5</h3>
            </div>
            <div className="metric-icon-box m-purple">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 18H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zM7 18v2M17 18v2M3 10h18M7 14h.01M11 14h.01"/></svg>
            </div>
          </div>
          <div className="metric-card">
            <div className="card-info">
              <span>Limpezas em Andamento</span>
              <h3>3</h3>
            </div>
            <div className="metric-icon-box m-orange">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            </div>
          </div>
        </section>
        {/* LAYOUT CENTRAL EM DUAS COLUNAS */}
        <div className="dashboard-grid-layout">
          
          {/* MAPA DE QUARTOS */}
          <section className="panel-card layout-rooms">
            <div className="panel-card-header">
              <h2>Mapa de Leitos</h2>
              <span className="subtitle-tag">Ala Norte</span>
            </div>
            
            <div className="rooms-pill-grid">
              {listaQuartos.map((quarto) => (
                <div key={quarto.id} className={`room-pill ${quarto.status}`}>
                  <span>{quarto.id}</span>
                  {renderRoomIcon(quarto.type)}
                </div>
              ))}
            </div>
          </section>

          {/* ATIVIDADE RECENTE */}
          <section className="panel-card layout-activity">
            <div className="panel-card-header">
              <h2>Atividade Recente</h2>
            </div>
            
            <div className="activity-timeline">
              <div className="timeline-item">
                <div className="timeline-icon act-green">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <div className="timeline-body">
                  <div className="timeline-meta">
                    <h4>Quarto 114 liberado</h4>
                    <span className="time">10:42</span>
                  </div>
                  <p>Higienização concluída por Equipe A</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-icon act-purple">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 18H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2z"/></svg>
                </div>
                <div className="timeline-body">
                  <div className="timeline-meta">
                    <h4>Transporte iniciado</h4>
                    <span className="time">10:38</span>
                  </div>
                  <p>Paciente do 205 para Raio-X</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-icon act-red">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                </div>
                <div className="timeline-body">
                  <div className="timeline-meta">
                    <h4>Isolamento ativado</h4>
                    <span className="time">10:30</span>
                  </div>
                  <p>Quarto 222 - Suspeita H1N1</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* PAINEL INFERIOR: EQUIPES ATIVAS */}
        <section className="teams-section-panel">
          <h2>Equipes Ativas</h2>
          <div className="teams-grid-container">
            
            <div className="team-row-card">
              <div className="team-main-details">
                <span className="color-strip orange"></span>
                <div>
                  <h4>Equipe de Limpeza</h4>
                  <p>6 membros online</p>
                </div>
              </div>
              <div className="team-numeric-stat">
                <span className="num">5</span>
                <span className="lbl">TAREFAS PENDENTES</span>
              </div>
            </div>

            <div className="team-row-card">
              <div className="team-main-details">
                <span className="color-strip purple"></span>
                <div>
                  <h4>Equipe de Transporte</h4>
                  <p>4 membros online</p>
                </div>
              </div>
              <div className="team-numeric-stat">
                <span className="num">5</span>
                <span className="lbl">TRANSPORTES ATIVOS</span>
              </div>
            </div>

            <div className="team-row-card">
              <div className="team-main-details">
                <span className="color-strip green"></span>
                <div>
                  <h4>Equipe de Enfermagem</h4>
                  <p>12 membros online</p>
                </div>
              </div>
              <div className="team-numeric-stat">
                <span className="num">2</span>
                <span className="lbl">ALERTAS ATIVOS</span>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}

export default Dashboard;
