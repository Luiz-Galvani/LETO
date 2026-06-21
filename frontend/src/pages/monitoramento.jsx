import '../styles/dashboard.css'; // Troque para o nome do seu arquivo CSS se necessário
import logo from "../assets/logo.png"; 

function Monitoramento() {
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

      {/* NAVEGAÇÃO HORIZONTAL */}
      <nav className="top-navigation">
        <div className="nav-links">
          <a href="#dashboard" className="nav-link">
            <svg className="menu-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18M18 17V9M13 17V5M8 17v-4"/></svg>
            Dashboard
          </a>
          <a href="#quartos" className="nav-link">
            <svg className="menu-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 4v16M2 11h18M2 17h20M6 8h4M22 13v7"/></svg>
            Quartos
          </a>
          <a href="#transporte" className="nav-link">
            <svg className="menu-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 18H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4M19 18h2M10 6v12M14 6v6M19 15v6"/></svg>
            Transporte <span className="nav-count">5</span>
          </a>
          <a href="#alertas" className="nav-link">
            <svg className="menu-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            Alertas <span className="nav-count alert">2</span>
          </a>
          <a href="#monitoramento" className="nav-link active">
            <svg className="menu-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            Monitoramento
          </a>
        </div>
        <a href="#configuracoes" className="nav-link-settings">
          <svg className="menu-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          Configurações
        </a>
      </nav>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="dashboard-content">
        
        {/* BANNER COM CRONÔMETRO DE ATUALIZAÇÃO */}
        <section className="welcome-banner">
          <div className="welcome-text">
            <h1>Monitoramento em Tempo Real</h1>
            <p className="welcome-sub">Visão geral da operação hospitalar</p>
          </div>
          <div className="status-live-badge">Atualizado há 23s</div>
        </section>

        {/* METRICAS GRID COM MINIGRAFICOS VETORIAIS */}
        <section className="metrics-grid">
          
          <div className="metric-card">
            <div className="card-info">
              <span>Ocupação Atual</span>
              <h3>68%</h3>
              <p>41 / 60 leitos</p>
              <span className="metric-footer-trend up">+3%</span>
            </div>
            <svg className="sparkline-box" viewBox="0 0 70 32">
              <path d="M0 25 Q15 18, 30 22 T70 10" fill="none" stroke="#2563eb" strokeWidth="2"/>
            </svg>
          </div>

          <div className="metric-card">
            <div className="card-info">
              <span>Fluxo de Entrada</span>
              <h3>+4</h3>
              <p>pacientes/hora</p>
              <span className="metric-footer-trend up">Acima da média</span>
            </div>
            <svg className="sparkline-box" viewBox="0 0 70 32">
              <path d="M0 28 Q15 25, 30 15 T70 12" fill="none" stroke="#10b981" strokeWidth="2"/>
            </svg>
          </div>

          <div className="metric-card">
            <div className="card-info">
              <span>Fluxo de Saída</span>
              <h3>+2</h3>
              <p>pacientes/hora</p>
              <span className="metric-footer-trend down">Abaixo da entrada</span>
            </div>
            <svg className="sparkline-box" viewBox="0 0 70 32">
              <path d="M0 12 Q15 15, 30 25 T70 20" fill="none" stroke="#f97316" strokeWidth="2"/>
            </svg>
          </div>

          <div className="metric-card">
            <div className="card-info">
              <span>Giro de Quartos</span>
              <h3>85%</h3>
              <p>eficiência hoje</p>
              <span className="metric-footer-trend up">+5% vs ontem</span>
            </div>
            <svg className="sparkline-box" viewBox="0 0 70 32">
              <path d="M0 20 Q15 10, 30 18 T70 5" fill="none" stroke="#10b981" strokeWidth="2"/>
            </svg>
          </div>

        </section>
        {/* GRID LAYOUT INFERIOR */}
        <div className="dashboard-grid-layout">
          
          {/* PAINEL COMPLETO: STATUS DAS EQUIPES (BARRAS MULTICAMADAS) */}
          <section className="panel-card layout-full-width">
            <div className="panel-card-header">
              <h2>Status das Equipes</h2>
            </div>
            
            <div className="team-progress-container">
              
              {/* LINHA: LIMPEZA */}
              <div className="team-progress-row">
                <div className="progress-row-header">
                  <span className="progress-title">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                    Limpeza
                  </span>
                  <div className="progress-legend-group">
                    <span className="legend-item"><span className="legend-dot green"></span> 3 concluídos</span>
                    <span className="legend-item"><span className="legend-dot orange"></span> 5 ativos</span>
                    <span className="legend-item"><span className="legend-dot gray"></span> 2 pendentes</span>
                  </div>
                </div>
                <div className="multi-progress-bar">
                  <div className="progress-seg done" style={{ width: '30%' }}></div>
                  <div className="progress-seg active-cleaning" style={{ width: '50%', background: '#eab308' }}></div>
                  <div className="progress-seg pending" style={{ width: '20%' }}></div>
                </div>
              </div>

              {/* LINHA: TRANSPORTE */}
              <div className="team-progress-row">
                <div className="progress-row-header">
                  <span className="progress-title">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 18H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/></svg>
                    Transporte
                  </span>
                  <div className="progress-legend-group">
                    <span className="legend-item"><span className="legend-dot green"></span> 3 concluídos</span>
                    <span className="legend-item"><span className="legend-dot orange" style={{ background: '#a855f7' }}></span> 5 ativos</span>
                    <span className="legend-item"><span className="legend-dot gray"></span> 2 pendentes</span>
                  </div>
                </div>
                <div className="multi-progress-bar">
                  <div className="progress-seg done" style={{ width: '30%' }}></div>
                  <div className="progress-seg active-transporte" style={{ width: '50%', background: '#a855f7' }}></div>
                  <div className="progress-seg pending" style={{ width: '20%' }}></div>
                </div>
              </div>

              {/* LINHA: ENFERMAGEM */}
              <div className="team-progress-row">
                <div className="progress-row-header">
                  <span className="progress-title">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/></svg>
                    Enfermagem
                  </span>
                  <div className="progress-legend-group">
                    <span className="legend-item"><span className="legend-dot green"></span> 7 concluídos</span>
                    <span className="legend-item"><span className="legend-dot orange" style={{ background: '#06b6d4' }}></span> 3 ativos</span>
                    <span className="legend-item"><span className="legend-dot gray"></span> 2 pendentes</span>
                  </div>
                </div>
                <div className="multi-progress-bar">
                  <div className="progress-seg done" style={{ width: '58%' }}></div>
                  <div className="progress-seg active-enfermagem" style={{ width: '25%', background: '#06b6d4' }}></div>
                  <div className="progress-seg pending" style={{ width: '17%' }}></div>
                </div>
              </div>

            </div>
          </section>

          {/* PAINEL ESQUERDO: FLUXO HOSPITALAR */}
          <section className="panel-card">
            <div className="panel-card-header">
              <h2>Fluxo Hospitalar</h2>
            </div>
            
            <div className="flow-badge-grid">
              <div className="flow-badge-card f-red"><span className="num">12</span><span className="lbl">Emergência</span></div>
              <div className="flow-badge-card f-blue"><span className="num">19</span><span className="lbl">UTI</span></div>
              <div className="flow-badge-card f-cyan"><span className="num">14</span><span className="lbl">Cirurgia</span></div>
              <div className="flow-badge-card f-gray"><span className="num">41</span><span className="lbl">Internação</span></div>
              <div className="flow-badge-card f-green"><span className="num">6</span><span className="lbl">Alta</span></div>
            </div>

            <div className="flow-destination-list">
              <div className="destination-item">
                <span className="dest-path">Emergência <span className="dest-arrow">➔</span> UTI</span>
                <span className="dest-count">4 pac.</span>
              </div>
              <div className="destination-item">
                <span className="dest-path">Emergência <span className="dest-arrow">➔</span> Cirurgia</span>
                <span className="dest-count">2 pac.</span>
              </div>
            </div>
          </section>

          {/* PAINEL DIREITO: OCUPAÇÃO POR ALA */}
          <section className="panel-card">
            <div className="panel-card-header">
              <h2>Ocupação por Ala</h2>
            </div>
            
            <div className="ala-occupancy-list">
              
              <div className="ala-row">
                <div className="ala-meta"><span className="ala-name">UTI</span><span className="ala-stats"><strong>19</strong>/20 leitos</span></div>
                <div className="ala-progress-wrapper">
                  <div className="ala-progress-bar-bg"><div className="ala-progress-fill red" style={{ width: '95%' }}></div></div>
                  <span className="ala-percent-tag red">95%</span>
                </div>
              </div>

              <div className="ala-row">
                <div className="ala-meta"><span className="ala-name">Clínica Médica</span><span className="ala-stats"><strong>36</strong>/50 leitos</span></div>
                <div className="ala-progress-wrapper">
                  <div className="ala-progress-bar-bg"><div className="ala-progress-fill orange" style={{ width: '72%' }}></div></div>
                  <span className="ala-percent-tag orange">72%</span>
                </div>
              </div>

              <div className="ala-row">
                <div className="ala-meta"><span className="ala-name">Cirurgia</span><span className="ala-stats"><strong>14</strong>/24 leitos</span></div>
                <div className="ala-progress-wrapper">
                  <div className="ala-progress-bar-bg"><div className="ala-progress-fill green" style={{ width: '58%' }}></div></div>
                  <span className="ala-percent-tag green">58%</span>
                </div>
              </div>

            </div>
          </section>

        </div>

      </main>
    </div>
  )
}

export default Monitoramento
