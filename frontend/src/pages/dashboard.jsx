import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getJson } from '../services/api.js';
import '../styles/dashboard.css'; 
import logo from "../assets/logo.png"; 

function Dashboard() {
  const navigate = useNavigate();
  // Estados para controlar os dados da API e o carregamento
  const [listaQuartos, setListaQuartos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Efeito para buscar os dados no back-end
  useEffect(() => {
    async function buscarLeitos() {
      try {
        const { data } = await getJson('/beds'); 
        
        const leitosFormatados = data.map(leito => {
          let statusClass = 'q-blue'; 
          let iconType = 'bed';

          const statusNormalizado = leito.bed_status ? leito.bed_status.toLowerCase().trim() : '';

          if (statusNormalizado === 'disponível' || statusNormalizado === 'disponivel') {
            statusClass = 'q-green';
            iconType = 'available';
          } else if (statusNormalizado === 'higienização' || statusNormalizado === 'higienizacao') {
            statusClass = 'q-blue';
            iconType = 'cleaning';
          } else if (statusNormalizado === 'manutenção' || statusNormalizado === 'manutencao' || statusNormalizado === 'isolamento') {
            statusClass = 'q-orange';
            iconType = 'alert';
          } else if(statusNormalizado === 'ocupado') {
            statusClass = 'q-red';
            iconType: 'occupied'
          }

          return {
            // Usa o bed_code do banco. Se não existir, usa o ID.
            id: leito.bed_code || leito.beds_code || leito.id, 
            status: statusClass,
            type: iconType,
            unitId: leito.units_id
          };
        });
        
        leitosFormatados.sort((a, b) => 
          String(a.id).localeCompare(String(b.id), undefined, { numeric: true, sensitivity: 'base' })
        );

        setListaQuartos(leitosFormatados);
        setLoading(false);

      } catch (error) {
        console.error("Erro ao buscar leitos:", error);
        if (error.response && error.response.status === 401) {
            navigate('/');
        }
        setLoading(false);
      }
    }

    buscarLeitos();
  }, [navigate]);

  const renderRoomIcon = (type) => {
    const iconeStyle = { width: '18px', height: '18px' };
    switch(type) {
      case 'cleaning':
        return <svg className="svg-icon" style={iconeStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"/>
            <path d="M5 3v4"/>
            <path d="M7 5H3"/>
            <path d="M21 17v4"/>
            <path d="M23 19h-4"/>
          </svg>
      case 'available':
        return <svg className="svg-icon" style={iconeStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
      case 'alert':
        return <svg className="svg-icon" style={iconeStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
      default:
        return <svg className="svg-icon" style={iconeStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16M2 11h18M2 17h20M6 8h4M22 13v7"/></svg>;
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
            <button className="logout-inline-btn" onClick={() => navigate('/')}>
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
      </nav>

      <main className="dashboard-content">
        <section className="welcome-banner">
          <div className="welcome-text">
            <span className="current-date">Domingo, 21 de Junho de 2026</span>
            <h1>Dashboard</h1>
            <p className="welcome-sub">Bem-vindo ao Sistema LETO</p>
          </div>
          <div className="big-digital-clock">13:24</div>
        </section>

        <section className="metrics-grid">
          <div className="metric-card">
            <div className="card-info">
              <span>Leitos Disponíveis</span>
              <h3>{listaQuartos.filter(q => q.status === 'q-green').length || 0}</h3>
            </div>
            <div className="metric-icon-box m-green">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
          </div>
          <div className="metric-card">
            <div className="card-info">
              <span>Leitos Ocupados</span>
              <h3>{listaQuartos.filter(q => q.status === 'q-red').length || 0}</h3>
            </div>
            <div className="metric-icon-box m-red">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 4v16M2 11h18M2 17h20M6 8h4M22 13v7"/></svg>
            </div>
          </div>
          <div className="metric-card">
            <div className="card-info">
              <span>Limpezas em Andamento</span>
              <h3>{listaQuartos.filter(q => q.status === 'q-blue').length || 0}</h3>
            </div>
            <div className="metric-icon-box m-blue">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"/>
                <path d="M5 3v4"/>
                <path d="M7 5H3"/>
                <path d="M21 17v4"/>
                <path d="M23 19h-4"/>
              </svg>
            </div>
          </div>
          <div className="metric-card">
            <div className="card-info">
              <span>Manutenção</span>
              <h3>{listaQuartos.filter(q => q.status === 'q-orange').length || 0}</h3>
            </div>
            <div className="metric-icon-box m-orange">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
            </div>
          </div>
        </section>

        <div className="dashboard-grid-layout">
          <section className="panel-card layout-rooms">
            <div className="panel-card-header">
              <h2>Mapa de Leitos</h2>
              <span className="subtitle-tag">Visão por Ala</span>
            </div>
            
            {loading ? (
              <p style={{padding: '20px'}}>A carregar leitos...</p>
            ) : listaQuartos.length === 0 ? (
              <p style={{padding: '20px'}}>Nenhum leito encontrado no sistema.</p>
            ) : (
              // Agrupa e desenha as alas dinamicamente
              Object.entries(
                listaQuartos.reduce((acc, quarto) => {
                  const ala = quarto.unitId || 'Sem Ala';
                  if (!acc[ala]) acc[ala] = [];
                  acc[ala].push(quarto);
                  return acc;
                }, {})
              ).map(([unitId, quartosDaAla]) => {
                
                // Dicionário para traduzir o ID da tabela 'units' para o Nome Real
                const nomesDasAlas = {
                  '1': 'UTI',
                  '2': 'Maternidade',
                  '3': 'Pronto Socorro',
                  '4': 'Enfermaria'
                };
                
                const nomeDaAla = nomesDasAlas[unitId] || `Ala ${unitId}`;

                return (
                  <div key={unitId} style={{ marginBottom: '28px' }}>
                    
                    {/* Título da Ala */}
                    <h3 style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {nomeDaAla} <span style={{fontWeight: 'normal', fontSize: '0.8rem'}}>({quartosDaAla.length} leitos)</span>
                    </h3>
                    
                    {/* Grid de quartos específica desta Ala */}
                    <div className="rooms-pill-grid">
                      {quartosDaAla.map((quarto) => (
                        <div key={quarto.id} className={`room-pill ${quarto.status}`}>
                          <span style={{ fontSize: '0.75rem', whiteSpace: 'nowrap' }}>{String(quarto.id).replace('LEITO-', 'Leito ')}</span> {/* Remove a palavra LEITO- para caber melhor, se quiser */}
                          {renderRoomIcon(quarto.type)}
                        </div>
                      ))}
                    </div>
                    
                  </div>
                );
              })
            )}
          </section>

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
                    <h4>Sistema LETO Iniciado</h4>
                    <span className="time">Agora</span>
                  </div>
                  <p>Conexão com a base de dados estabelecida</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;