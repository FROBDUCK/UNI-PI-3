import React, { useEffect, useState } from 'react';
import { Button } from './components/Button';
import './WorkerDetails.css';

const WorkerDetails = ({ id }) => {
  const [worker, setWorker] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [showWhatsAppLink, setShowWhatsAppLink] = useState(false);

  const loggedInUser = localStorage.getItem('userName');
  const loggedInRole = localStorage.getItem('role');

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

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/workers/${id}/jobs`);
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

  const handleHireJob = (jobId) => {
    if (loggedInUser && loggedInRole === 'customer') {
      setSelectedJobId(jobId);
      setShowWhatsAppLink(true);
      alert(`Você contratou o trabalho com ID: ${jobId}`);
    } else {
      alert('Você precisa estar logado como cliente para contratar este serviço.');
    }
  };

  const handleFinalizeJob = () => {
    const rating = prompt('Digite uma nota para o prestador (0-5):');
    if (!rating || isNaN(rating) || rating < 0 || rating > 5) {
      alert('Por favor, insira uma nota válida entre 0 e 5.');
      return;
    }

    alert(`Trabalho finalizado com nota ${rating}!`);
    setSelectedJobId(null);
    setShowWhatsAppLink(false);
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div className="worker-details">
      <strong>{worker.userName}</strong>
      <div className="worker-info">
        <p>Email: {worker.email}</p>
        <p>Telefone: {worker.phoneNumber}</p>
        <p>Área de Trabalho: {worker.fieldOfWork}</p>
        <p>Biografia: {worker.bio}</p>
        <p>Endereço: {worker.addresses[0]?.city}, {worker.addresses[0]?.state}</p>
        <p >Avaliação Média: {worker.avgRating}</p>
      </div>

      <strong style={{ color: "var(--neutral-600)", fontSize: "1.125rem" }}>Trabalhos Disponíveis</strong>
      {jobs.length > 0 ? (
        <ul className="jobs-list">
          {jobs.map((job) => (
            <li key={job.id} className="job-item">
              <strong>{job.title}</strong>: {job.description} - R${job.price.toFixed(2)}
              <Button
                onClick={() => handleHireJob(job.id)}
                disabled={selectedJobId === job.id}
              >
                {selectedJobId === job.id ? 'Contratado' : 'Contratar'}
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Este trabalhador ainda não possui trabalhos disponíveis.</p>
      )}

      {showWhatsAppLink && (
        <div className="whatsapp-link">
          <p>Entre em contato com o trabalhador:</p>
          <div className='buttons'>
            <a
              href={`https://api.whatsapp.com/send?phone=55${worker.phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              Abrir WhatsApp
            </a>
            <button
              className="finalize-button"
              onClick={handleFinalizeJob}
            >
              Finalizar Parceria
            </button>
          </div>
        </div>
      )}
      
    </div>

    
  );
};

export default WorkerDetails;
