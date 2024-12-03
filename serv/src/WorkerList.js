import React, { useEffect, useState } from 'react';
import WorkerDetails from './WorkerDetails';

const WorkerList = () => {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedWorkerId, setSelectedWorkerId] = useState(null); // ID do trabalhador selecionado
  const [showModal, setShowModal] = useState(false); // Controla a exibição do modal

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
            onClick={() => handleWorkerClick(worker.id)}
          >
            <h3>{worker.userName}</h3>
            <p><strong>Área:</strong> {worker.fieldOfWork}</p>
            <p>
              <strong>Endereço:</strong> {worker.addresses[0]?.city}, {worker.addresses[0]?.state}
            </p>
          </div>
        ))}
      </div>

      {showModal && selectedWorkerId && (
        <div style={modalStyles.overlay}>
          <div style={modalStyles.modal}>
            <button
              style={modalStyles.closeButton}
              onClick={handleCloseModal}
            >
              X
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
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: '90%',
    maxWidth: '600px',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '18px',
    backgroundColor: 'red',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
  },
};

export default WorkerList;
