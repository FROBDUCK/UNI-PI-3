import React from 'react';
import logo from '../assets/logo2.png'
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const handleClick = () => {
        alert('Você clicou no botão!');
    };

    return (
        <footer class="footer">
            <div class="footer-geral">
                <div class="footer-logo">
                    <img src={logo} alt="Serv Logo" />
                    <p>Em caso de dúvidas, mande-nos um e-mail</p>
                </div>
                <div class="footer-form">
                    <input id="footer-input" type="email" placeholder="Digite seu e-mail" />
                    <Button type="primary" onClick={handleClick}>Enviar</Button>
                </div>
                <div class="footer-final">
                <div className="left">
                    <Link to="/sobre">
                        <h3>Quem somos?</h3>
                        <p>Sobre nós</p>
                    </Link>
                    </div>
                    <div class="right">
                        <div class="social-media">
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer noopener" class="social-icon"
                            ><i class="fab fa-facebook-f"></i></a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer noopener" class="social-icon"
                            ><i class="fab fa-linkedin-in"></i></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer noopener" class="social-icon"
                            ><i class="fab fa-instagram"></i></a>
                        </div>
                        <div class="copyright">
                            <p>© Serv 2024</p>
                            <a href="https://example.com">Privacy policy</a>
                            <a href="https://example.com">Terms of use</a>
                        </div>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default Footer;
