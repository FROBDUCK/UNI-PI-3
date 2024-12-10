import React, { useEffect, useState } from 'react';
import WorkerDetails from './WorkerDetails';
import { Button } from './components/Button';
import { ReactComponent as X_Circle } from './assets/x_circle.svg';
import styles from './WorkerList.module.css';

const WorkerList = () => {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedWorkerId, setSelectedWorkerId] = useState(null); // ID do trabalhador selecionado
  const [showModal, setShowModal] = useState(false); // Controla a exibição do modal

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const response = await fetch(
          'http://localhost:8080/api/workers',
          {
            headers: {
              "ngrok-skip-browser-warning": "true", // Adiciona o cabeçalho necessário
            },
          }
        );
        if (!response.ok) {
          throw new Error("Erro ao buscar os trabalhadores");
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
  

  const handleWorkerClick = (id) => {
    setSelectedWorkerId(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedWorkerId(null);
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div>
      <div className={styles.cards}>
        {workers.map((worker) => (
          <div key={worker.id} className={styles.card_worker}>
            <div className={styles.details}>
              <div className={styles.name_city}>
                <strong>{worker.userName}</strong>
                <p>
                  {worker.addresses[0]?.city}, {worker.addresses[0]?.state}
                </p>
              </div>
              <p className={styles.pilula}>{worker.fieldOfWork}</p>
            </div>
            <Button type="primary" onClick={() => handleWorkerClick(worker.id)}>Saber mais</Button>
          </div>

        ))}
      </div>


      {showModal && selectedWorkerId && (
        <div style={modalStyles.overlay}>
          <div style={modalStyles.modal}>
            <button
            className={styles.x_button}
              onClick={handleCloseModal}>
                <X_Circle className={styles.x_icon} />
            </button>
            <WorkerDetails id={selectedWorkerId} />
          </div>
        </div>
      )}
    </div>
  );
};

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: 'var(--neutral-0)',
    padding: '20px',
    borderRadius: '8px',
    width: '90%',
    maxWidth: '600px',
    position: 'relative',
  },
};

export default WorkerList;
