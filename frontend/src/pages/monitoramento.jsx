import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getJson } from '../services/api.js';
import '../styles/dashboard.css'; 
import logo from "../assets/logo.png"; 

function Monitoramento() {
  const navigate = useNavigate();
  const [listaQuartos, setListaQuartos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function buscarLeitos() {
      try {
        // Faz o GET na rota de leitos (ex: /beds se estiver mapeado assim no backend)
        const { data } = await getJson('/beds'); 
        
        // Mapeia os dados reais do banco para as classes CSS que o seu amigo criou
        const leitosFormatados = data.map(leito => {
          let statusClass = 'q-blue'; // Cor azul padrão para Ocupado
          let iconType = 'bed';

          // Tratamento preventivo de strings vazias, maiúsculas ou espaços
          const statusNormalizado = leito.bed_status ? leito.bed_status.toLowerCase().trim() : '';

          if (statusNormalizado === 'disponível' || statusNormalizado === 'disponivel') {
            statusClass = 'q-green';
            iconType = 'available';
          } else if (statusNormalizado === 'higienização' || statusNormalizado === 'higienizacao') {
            statusClass = 'q-orange';
            iconType = 'cleaning';
          } else if (statusNormalizado === 'manutenção' || statusNormalizado === 'manutencao' || statusNormalizado === 'isolamento') {
            statusClass = 'q-red';
            iconType = 'alert';
          }

          return {
            id: leito.beds_code || leito.id, // Utiliza o código identificador do leito mapeado no documento 
            status: statusClass,
            type: iconType
          };
        });

        setListaQuartos(leitosFormatados);
        setLoading(false);

      } catch (error) {
        console.error("Erro ao carregar o mapa de leitos:", error);
        if (error.response && error.response.status === 401) {
          navigate('/'); // Se o token JWT expirar ou for inválido, barra o acesso
        }
        setLoading(false);
      }
    }

    buscarLeitos();
  }, [navigate]);
}export default Monitoramento;