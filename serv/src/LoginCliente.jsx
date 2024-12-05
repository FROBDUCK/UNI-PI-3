import React from 'react';
import EmailInput from './components/EmailInput';
import './LoginCliente.css';
import logo from './assets/logobranca.png';
import imgcliente from './assets/imglogincliente.png';
import { Link, useNavigate } from "react-router-dom";
import { Button } from './components/Button';
import PasswordInput from './components/PasswordInput';

const LoginCliente = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/logado');
    };

    return (
        <logincliente class="login">
            <div class="total">
                <div class="esquerda">
                    <Link to="/">
                        <img id="minilogo" src={logo} alt="Mini Logo" />
                    </Link>
                    <img id="imagem-lateral" src={imgcliente} alt="Imagem Cliente" />
                </div>

                <div class="direita">
                    <div class="cabecalho">
                        <div class="titulo">
                            <h1>Faça seu login</h1>
                        </div>
                        <div class="texto">
                            <p>Não quer contratar?</p>
                            <a href="/LoginService">Quero prestar serviços</a>
                        </div>
                    </div>
                    <div class="inputs">
                        <EmailInput />
                        <PasswordInput />
                    </div>
                    <Button type="primary" onClick={handleLogin}>Login</Button>
                    <div class="cadastre">
                        <p>Não possui uma conta?</p>
                        <Link to="/cadastrocliente">
                            <a>Cadastre-se</a>
                        </Link>
                    </div>
                </div>
            </div>
        </logincliente>
    );
};

export default LoginCliente;