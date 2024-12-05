import React, { useEffect, useState } from 'react';

const WorkerDetails = ({ id }) => {
  const [worker, setWorker] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedJobId, setSelectedJobId] = useState(null); // Para armazenar o ID do trabalho contratado
  const [showWhatsAppLink, setShowWhatsAppLink] = useState(false); // Para exibir o link do WhatsApp

  const loggedInUser = localStorage.getItem('userName');
  const loggedInRole = localStorage.getItem('role'); // Pode ser 'worker' ou 'customer'

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

    // Aqui você pode implementar a lógica para finalizar o trabalho na API
    alert(`Trabalho finalizado com nota ${rating}!`);
    setSelectedJobId(null); // Limpa o trabalho contratado
    setShowWhatsAppLink(false); // Esconde o link do WhatsApp
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div>
      <h1>{worker.userName}</h1>
      <p><strong>Email:</strong> {worker.email}</p>
      <p><strong>Telefone:</strong> {worker.phoneNumber}</p>
      <p><strong>Área de Trabalho:</strong> {worker.fieldOfWork}</p>
      <p><strong>Biografia:</strong> {worker.bio}</p>
      <p><strong>Endereço:</strong> {worker.addresses[0]?.city}, {worker.addresses[0]?.state}</p>
      <p><strong>Avaliação Média:</strong> {worker.avgRating}</p>

      <h2>Trabalhos Disponíveis</h2>
      {jobs.length > 0 ? (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              <strong>{job.title}</strong>: {job.description} - R${job.price.toFixed(2)}
              <button
                style={{
                  marginLeft: '10px',
                  padding: '5px',
                  fontSize: '14px',
                }}
                onClick={() => handleHireJob(job.id)}
                disabled={selectedJobId === job.id} // Desabilita se já foi contratado
              >
                {selectedJobId === job.id ? 'Contratado' : 'Contratar'}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Este trabalhador ainda não possui trabalhos disponíveis.</p>
      )}

      {showWhatsAppLink && (
        <div style={{ marginTop: '20px' }}>
          <p>Entre em contato com o trabalhador:</p>
          <a
            href={`https://api.whatsapp.com/send?phone=55${worker.phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              margin: '10px 0',
              padding: '10px',
              backgroundColor: '#25D366',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '5px',
            }}
          >
            Abrir WhatsApp
          </a>
          <button
            style={{
              display: 'block',
              marginTop: '10px',
              padding: '10px',
              backgroundColor: '#4CAF50',
              color: '#fff',
              borderRadius: '5px',
            }}
            onClick={handleFinalizeJob}
          >
            Finalizar Parceria
          </button>
        </div>
      )}
    </div>
  );
};

export default WorkerDetails;
