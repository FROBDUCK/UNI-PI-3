import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const WorkerDetails = () => {
  const { id } = useParams(); // Pega o ID do trabalhador pela URL
  const [worker, setWorker] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulação de autenticação
  const isUserLoggedIn = localStorage.getItem('userLoggedIn') === 'true';

  // Buscar detalhes do trabalhador
  useEffect(() => {
    const fetchWorkerDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/workers/${id}`);
        if (!response.ok) {
          throw new Error('Erro ao buscar os detalhes do trabalhador');
        }
        const data = await response.json();
        setWorker(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkerDetails();
  }, [id]);

  // Buscar trabalhos do trabalhador
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/workers/${id}/jobs`); //${id}
        if (!response.ok) {
          throw new Error('Erro ao buscar os trabalhos do trabalhador');
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchJobs();
  }, [id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div style={{ padding: '16px' }}>
      {/* Detalhes do trabalhador */}
      <h1>{worker.userName}</h1>
      <p><strong>Email:</strong> {worker.email}</p>
      <p><strong>Telefone:</strong> {worker.phoneNumber}</p>
      <p><strong>Área de Trabalho:</strong> {worker.fieldOfWork}</p>
      <p><strong>Biografia:</strong> {worker.bio}</p>
      <p><strong>Endereço:</strong> {worker.addresses[0]?.city}, {worker.addresses[0]?.state}</p>
      <p><strong>Avaliação Média:</strong> {worker.avgRating}</p>

      {/* Lista de Trabalhos */}
      <h2>Trabalhos Disponíveis</h2>
      {jobs.length > 0 ? (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              <strong>{job.title}</strong>: {job.description} - R${job.price.toFixed(2)}
            </li>
          ))}
        </ul>
      ) : (
        <p>Este trabalhador ainda não possui trabalhos disponíveis.</p>
      )}

      {/* Botão de Contratar */}
      {isUserLoggedIn ? (
        <button style={{ marginTop: '20px', padding: '10px', fontSize: '16px' }}>
          Contratar
        </button>
      ) : (
        <p style={{ color: 'red', marginTop: '20px' }}>
          Faça login para contratar este trabalhador.
        </p>
      )}
    </div>
  );
};

export default WorkerDetails;
