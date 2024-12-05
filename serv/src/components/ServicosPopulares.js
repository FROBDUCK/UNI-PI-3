import React from 'react';
import './ServicosPopulares.css';

const ServicosPopulares = () => {
  const servicos = [
    { titulo: 'Design e Tecnologia', imagem: 'design.jpg' },
    { titulo: 'Reparos e Reformas', imagem: 'reparos.jpg' },
    { titulo: 'Arte', imagem: 'arte.jpg' },
    { titulo: 'Moda e Beleza', imagem: 'moda.jpg' },
  ];

  return (
    <div className="servicos-populares">
      <h2>Serviços populares</h2>
      <div className="servicos-container">
        {servicos.map((servico, index) => (
          <div
            key={index}
            className="servico"
            style={{ backgroundImage: `url(${servico.imagem})` }}
          >
            <h3>{servico.titulo}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicosPopulares;
