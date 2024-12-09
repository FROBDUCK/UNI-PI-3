import React from "react";
import "./Card.css";
import services1 from '../assets/services1.png';
import services2 from '../assets/services2.png';
import services3 from '../assets/services3.png';
import services4 from '../assets/services4.png';

export function Card({ imageSrc, title }) {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
    </div>
  );
}

export function CardList() {
  const cards = [
    { imageSrc: services2, title: "Design e Tecnologia" },
    { imageSrc: services3, title: "Reparos e Reformas" },
    { imageSrc: services4, title: "Arte" },
    { imageSrc: services1, title: "Moda e Beleza" },
  ];

  return (
    <div className="card-list-container">
      <h1 className="list-title">Serviços populares</h1>
      <div className="card-list">
        {cards.map((card, index) => (
          <Card key={index} imageSrc={card.imageSrc} title={card.title} />
        ))}
      </div>
    </div>
  );
}
