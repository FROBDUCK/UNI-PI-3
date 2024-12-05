import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WorkerJobsManager = () => {
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState({ title: '', description: '', price: '' });
  const [workerId, setWorkerId] = useState(null); // ID do trabalhador logado
  const [worker, setWorker] = useState(null); // Detalhes do trabalhador logado
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Buscar os detalhes do trabalhador logado para obter o ID
  useEffect(() => {
    const fetchWorkerDetails = async () => {
      try {
        const response = await axios.get(
          'https://a1ae-160-19-45-104.ngrok-free.app/api/login/worker-details',
          {
            headers: {
              "ngrok-skip-browser-warning": "true", // Adiciona o cabeçalho necessário
            },
          }
        );
        setWorker(response.data);
        setWorkerId(response.data.id); // Obtém o ID do trabalhador
      } catch (err) {
        console.error('Erro ao buscar os detalhes do trabalhador logado:', err);
        setError('Erro ao buscar os detalhes do trabalhador.');
      } finally {
        setLoading(false);
      }
    };
  
    fetchWorkerDetails();
  }, []);
  
  // Buscar os trabalhos do trabalhador logado
  useEffect(() => {
    if (workerId) {
      const fetchJobs = async () => {
        try {
          const response = await axios.get(
            `https://a1ae-160-19-45-104.ngrok-free.app/api/workers/${workerId}/jobs`,
            {
              headers: {
                "ngrok-skip-browser-warning": "true", // Adiciona o cabeçalho necessário
              },
            }
          );
          setJobs(response.data);
        } catch (err) {
          console.error('Erro ao buscar os trabalhos do prestador:', err);
          setError('Erro ao buscar os trabalhos.');
        }
      };
  
      fetchJobs();
    }
  }, [workerId]);
  
  // Deletar um trabalho
  const handleDeleteJob = async (jobId) => {
    try {
      await axios.delete(
        `https://a1ae-160-19-45-104.ngrok-free.app/api/workers/${workerId}/jobs/${jobId}`,
        {
          headers: {
            "ngrok-skip-browser-warning": "true", // Adiciona o cabeçalho necessário
          },
        }
      );
      setJobs(jobs.filter((job) => job.id !== jobId)); // Remove o trabalho deletado da lista
      alert('Trabalho deletado com sucesso!');
    } catch (err) {
      console.error('Erro ao deletar o trabalho:', err);
      alert('Erro ao deletar o trabalho.');
    }
  };
  
  // Adicionar um novo trabalho
  const handleAddJob = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://a1ae-160-19-45-104.ngrok-free.app/api/workers/${workerId}/add-job`,
        null, // Corpo da requisição é nulo
        {
          headers: {
            "ngrok-skip-browser-warning": "true", // Adiciona o cabeçalho necessário
          },
          params: {
            jobTitle: newJob.title,
            description: newJob.description,
            price: newJob.price,
          },
        }
      );
      setJobs([...jobs, response.data]); // Adiciona o novo trabalho à lista
      setNewJob({ title: '', description: '', price: '' }); // Limpa o formulário
      alert('Trabalho adicionado com sucesso!');
    } catch (err) {
      console.error('Erro ao adicionar o trabalho:', err);
      alert('Erro ao adicionar o trabalho.');
    }
  };
  

  if (loading) {
    return <div>Carregando trabalhos...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Bem-vindo, {worker?.userName}</h2>
      <h3>Seus Trabalhos</h3>
      {jobs.length > 0 ? (
        <ul>
          {jobs.map((job) => (
            <li key={job.id} style={{ marginBottom: '10px' }}>
              <strong>{job.title}</strong>: {job.description} - R${job.price.toFixed(2)}
              <button
                onClick={() => handleDeleteJob(job.id)}
                style={{ marginLeft: '10px', padding: '5px', backgroundColor: 'red', color: 'white' }}
              >
                Deletar
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Você ainda não possui trabalhos cadastrados.</p>
      )}

      <h3>Adicionar Novo Trabalho</h3>
      <form onSubmit={handleAddJob} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="text"
          placeholder="Título do trabalho"
          value={newJob.title}
          onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Descrição do trabalho"
          value={newJob.description}
          onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
          required
        ></textarea>
        <input
          type="number"
          placeholder="Preço (R$)"
          value={newJob.price}
          onChange={(e) => setNewJob({ ...newJob, price: e.target.value })}
          required
        />
        <button type="submit" style={{ padding: '10px', backgroundColor: 'green', color: 'white' }}>
          Adicionar Trabalho
        </button>
      </form>
    </div>
  );
};

export default WorkerJobsManager;
