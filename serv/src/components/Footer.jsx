import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
    <footer class="footer">
        <div class="footer-geral">
            <div class="footer-logo">
                <img id="logo-footer" src="serv/public/images/Logo.png" alt="Serv Logo"/>
                <p>Em caso de dúvidas, mande-nos um e-mail</p>
            </div>
            <div class="footer-form">
                <input id="footer-input" type="email" placeholder="Digite seu e-mail" />
                <button id="footer-button" type="submit">Enviar</button>
            </div>
            <div class="footer-final">
                <div class="left">
                    <h3>Quem somos?</h3>
                    <a>Sobre nós</a>
                </div>
                <div class="right">
                    <div class="social-media">
                        <a href="https://www.facebook.com" target="_blank" class="social-icon"
                        ><i class="fab fa-facebook-f"></i
                        ></a>
                        <a href="https://www.linkedin.com" target="_blank" class="social-icon"
                        ><i class="fab fa-linkedin-in"></i
                        ></a>
                        <a href="https://www.instagram.com" target="_blank" class="social-icon"
                        ><i class="fab fa-instagram"></i
                        ></a>
                    </div>
                    <div class="copyright">
                        <p>© Serv 2024</p>
                        <a href="/privacy-policy">Privacy policy</a>
                        <a href="/terms-of-use">Terms of use</a>
                    </div>
                </div>
            </div>


        </div>
    </footer>
    );
};

export default Footer;
