import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WorkerList = () => {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook para navegação

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/workers');
        if (!response.ok) {
          throw new Error('Erro ao buscar os trabalhadores');
        }
        const data = await response.json();
        setWorkers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkers();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', padding: '16px' }}>
      {workers.map((worker) => (
        <div
          key={worker.id}
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '16px',
            cursor: 'pointer',
            width: '200px',
          }}
          onClick={() => navigate(`/workers/${worker.id}`)} // Redireciona ao clicar
        >
          <h3>{worker.userName}</h3>
          <p><strong>Área:</strong> {worker.fieldOfWork}</p>
          <p>
            <strong>Endereço:</strong> {worker.addresses[0]?.city}, {worker.addresses[0]?.state}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WorkerList;


//bleh