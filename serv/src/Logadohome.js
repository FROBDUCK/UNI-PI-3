import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import WorkerList from './WorkerList';
import Logout from './components/Logout';
import axios from 'axios';

const Logadohome = () => {
  const userName = localStorage.getItem('userName'); // Nome do usuário logado
  const loggedInRole = localStorage.getItem('role'); // Papel do usuário (worker ou customer)
  const [workerId, setWorkerId] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState({ title: '', description: '', price: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Obtém o ID do prestador logado
  useEffect(() => {
    const fetchWorkerId = async () => {
      if (loggedInRole === 'worker') {
        try {
          const response = await axios.get('http://localhost:8080/api/workers');
          const loggedWorker = response.data.find(worker => worker.userName === userName);
          if (loggedWorker) {
            setWorkerId(loggedWorker.id);
          } else {
            throw new Error('Trabalhador logado não encontrado.');
          }
        } catch (err) {
          console.error('Erro ao buscar o ID do trabalhador:', err);
          setError('Erro ao buscar o ID do trabalhador.');
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchWorkerId();
  }, [loggedInRole, userName]);

  // Obtém os trabalhos do prestador
  useEffect(() => {
    if (workerId) {
      const fetchJobs = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/api/workers/${workerId}/jobs`);
          setJobs(response.data);
        } catch (err) {
          console.error('Erro ao buscar os trabalhos do prestador:', err);
          setError('Erro ao buscar os trabalhos.');
        }
      };

      fetchJobs();
    }
  }, [workerId]);

  // Adicionar um novo trabalho
  const handleAddJob = async (e) => {
    e.preventDefault();
    if (workerId) {
      try {
        const response = await axios.post(
          `http://localhost:8080/api/workers/${workerId}/add-job`,
          null,
          {
            params: {
              jobTitle: newJob.title,
              description: newJob.description,
              price: newJob.price,
            },
          }
        );
        setJobs([...jobs, response.data]);
        setNewJob({ title: '', description: '', price: '' });
        alert('Trabalho adicionado com sucesso!');
      } catch (err) {
        console.error('Erro ao adicionar o trabalho:', err);
        alert('Erro ao adicionar o trabalho.');
      }
    }
  };

  // Deletar um trabalho
// Função para deletar um trabalho
const handleDeleteJob = async (jobId) => {
  try {
    const response = await axios.delete(`http://localhost:8080/api/jobs/${jobId}`);
    if (response.status === 200 || response.status === 204) {
      setJobs(jobs.filter((job) => job.id !== jobId)); // Remove o trabalho deletado da lista
      alert('Trabalho deletado com sucesso!');
    } else {
      throw new Error('Falha ao deletar o trabalho.');
    }
  } catch (err) {
    console.error('Erro ao deletar o trabalho:', err);
    alert('Erro ao deletar o trabalho.');
  }
};


  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container">
      <div className="row" id="row1">
        <img id="logoimg" src="Logotipo.png" alt="Logo" />
        <div className="row" id="row-buttons1">
          <button className="botoesrow1" id="servico">
            Eu quero prestar serviço
          </button>
          <button className="botoesrow1" id="contratar">
            Eu quero contratar
          </button>
        </div>
        <div className="row" id="row-buttons2">
          <p>Bem-vindo, {userName}!</p>
          <Logout />
        </div>
      </div>

      <div className="row" id="row2">
        <div className="col" id="col-text">
          <p id="textobanner">
            Encontre o serviço que você precisa com o profissional que desejar
          </p>
          <div className="div-pesquisa">
            <input id="busca" type="text" placeholder="O que você está procurando?" />
            <button id="pesquisar">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        <img id="mulherimg" src="mulher.png" alt="imagem" />
      </div>

      {/* Exibe os trabalhos ou a lista de prestadores */}
      {loggedInRole === 'worker' ? (
        <div>
          <h2>Seus Trabalhos</h2>
          <ul>
            {jobs.map((job) => (
              <li key={job.id}>
                <strong>{job.title}</strong>: {job.description} - R${job.price.toFixed(2)}
                <button
                  style={{ marginLeft: '10px', padding: '5px', backgroundColor: 'red', color: 'white' }}
                  onClick={() => handleDeleteJob(job.id)}
                >
                  Deletar
                </button>
              </li>
            ))}
          </ul>
          <h3>Adicionar Novo Trabalho</h3>
          <form onSubmit={handleAddJob}>
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
            />
            <input
              type="number"
              placeholder="Preço (R$)"
              value={newJob.price}
              onChange={(e) => setNewJob({ ...newJob, price: e.target.value })}
              required
            />
            <button type="submit">Adicionar Trabalho</button>
          </form>
        </div>
      ) : (
        <section style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f9f9f9' }}>
          <h2>Lista de Prestadores</h2>
          <WorkerList />
        </section>
      )}

      <div id="categorias">
        {/* Categorias */}
      </div>
    </div>
  );
};

export default Logadohome;
