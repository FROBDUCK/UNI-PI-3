import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Logadohome.css";
import WorkerList from "./WorkerList";
import imglogado from "./assets/imglogado.png";
import logo from "./assets/logo.png";
import Categorias from "./components/Categorias";
import Footer from "./components/Footer";
import Logout from "./components/Logout";
import { CardList } from "./components/Card";

const Logadohome = () => {
  const userName = localStorage.getItem("userName"); // Nome do usuário logado
  const loggedInRole = localStorage.getItem("role"); // Papel do usuário (worker ou customer)
  const [workerId, setWorkerId] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState({
    title: "",
    description: "",
    price: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Obtém o ID do prestador logado
  useEffect(() => {
    const fetchWorkerId = async () => {
      if (loggedInRole === "worker") {
        try {
          const response = await axios.get(
            "http://localhost:8080/api/workers",
            {
              headers: {
                "ngrok-skip-browser-warning": "true", // Adiciona o cabeçalho necessário
              },
            }
          );
          const loggedWorker = response.data.find(
            (worker) => worker.userName === userName
          );
          if (loggedWorker) {
            setWorkerId(loggedWorker.id);
          } else {
            throw new Error("Trabalhador logado não encontrado.");
          }
        } catch (err) {
          console.error("Erro ao buscar o ID do trabalhador:", err);
          setError("Erro ao buscar o ID do trabalhador.");
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchWorkerId();
  }, [loggedInRole, userName]);

  // Obtém os trabalhos do prestador workers/${workerId}/jobs`);
  useEffect(() => {
    if (workerId) {
      const fetchJobs = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/workers/${workerId}/jobs`,
            {
              headers: {
                "ngrok-skip-browser-warning": "true", // Adiciona o cabeçalho necessário
              },
            }
          );
          setJobs(response.data); // Define os trabalhos retornados
        } catch (err) {
          console.error("Erro ao buscar os trabalhos do prestador:", err);
          setError("Erro ao buscar os trabalhos.");
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
          null, // Corpo da requisição é `null`
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

        // Atualiza o estado com o novo trabalho adicionado
        setJobs([...jobs, response.data]);
        setNewJob({ title: "", description: "", price: "" }); // Reseta o formulário
        alert("Trabalho adicionado com sucesso!");
      } catch (err) {
        console.error("Erro ao adicionar o trabalho:", err);
        alert("Erro ao adicionar o trabalho.");
      }
    }
  };

  // Deletar um trabalho
  // Função para deletar um trabalho
  const handleDeleteJob = async (jobId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/jobs/${jobId}`,
        {
          headers: {
            "ngrok-skip-browser-warning": "true", // Adiciona o cabeçalho necessário
          },
        }
      );

      if (response.status === 200 || response.status === 204) {
        // Atualiza o estado removendo o trabalho deletado
        setJobs(jobs.filter((job) => job.id !== jobId));
        alert("Trabalho deletado com sucesso!");
      } else {
        throw new Error("Falha ao deletar o trabalho.");
      }
    } catch (err) {
      console.error("Erro ao deletar o trabalho:", err);
      alert("Erro ao deletar o trabalho.");
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
      <header className="header">
        <Link to="/logado">
          <img src={logo} alt="logo da marca" />
        </Link>
        <div className="bem-vindo">
          <p>{userName}</p>
          <Logout />
        </div>
      </header>
      <section className="banner">
        <div className="saudacao">
          <p>Olá, {userName}👋🏻</p>
          <h3>Vamos encontrar o melhor profissional para você!</h3>
        </div>
        <div className="banner_img">
          <img src={imglogado} alt="imagem de mulheres" />
        </div>
      </section>
      <Categorias />

      {/* Exibe os trabalhos ou a lista de prestadores */}
      {loggedInRole === "worker" ? (
        <div>
          <h2>Seus Trabalhos</h2>
          <ul>
            {jobs.map((job) => (
              <li key={job.id}>
                <strong>{job.title}</strong>: {job.description} - R$
                {job.price.toFixed(2)}
                <button
                  style={{
                    marginLeft: "10px",
                    padding: "5px",
                    backgroundColor: "red",
                    color: "white",
                  }}
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
              onChange={(e) =>
                setNewJob({ ...newJob, description: e.target.value })
              }
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
        <section className="prof_qualif">
          <h1>Profissionais qualificados</h1>
          <WorkerList />
        </section>
      )}
      <CardList/>
      <Footer />
    </div>
  );
};

export default Logadohome;