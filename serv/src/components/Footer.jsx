import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";
import { Button } from "./Button";
import "./Footer.css";

const Footer = () => {
  const handleClick = () => {
    alert("Você clicou no botão!");
  };

  return (
    <footer class="footer">
      <div class="footer-geral">
        <div class="footer-logo">
          <img src={logo} alt="Serv Logo" />
          <p>Em caso de dúvidas, mande-nos um e-mail</p>
        </div>
        <div class="footer-form">
          <input
            id="footer-input"
            type="email"
            placeholder="Digite seu e-mail"
          />
          <Button type="primary" onClick={handleClick}>
            Enviar
          </Button>
        </div>
        <div class="footer-final">
          <div className="left">
            <strong>Quem somos?</strong>
            <Link to="/sobre">
              <p>Sobre nós</p>
            </Link>
          </div>
          <div class="right">
            <div class="social-media">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                class="social-icon"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
                class="social-icon"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                class="social-icon"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
            <div class="copyright">
              <p>© Serv 2024</p>
              <p>
                <a href="a">Privacy policy</a>
              </p>
              <p>
                <a href="a">Terms of use</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
