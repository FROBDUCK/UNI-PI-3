import React from 'react';
import './CadastroCliente.css';
import minilogo from './assets/minilogo.png';
import imgcadastro from './assets/imgcadastrocliente.png';
import EmailInput from './components/EmailInput';
import NameInput from './components/NameInput';
import PasswordInput from './components/PasswordInput';
import { Link, useNavigate } from "react-router-dom";
import { Button } from './components/Button';

const CadastroCliente = () => {
    const navigate = useNavigate();
    const handleCadastrar = () => {
        navigate('/logado');
    };
    return (
        <cadastrocliente class="cadastro">
            <div class="total">
                <div class="esquerda">
                    <img id="minilogo" src={minilogo} alt="Mini Logo" />
                    <img id="imagem-lateral" src={imgcadastro} alt="Imagem Cadastro" />
                </div>
            </div>

            <div class="direita">
                <div class="cabecalho">
                    <div class="titulo">
                        <h1>Cadastre-se agora</h1>
                    </div>
                    <div class="texto">
                        <p>Não quer contratar?</p>
                        <a href="/LoginService">Quero prestar serviços</a>
                    </div>
                </div>
                <div class="inputs">
                    <NameInput />
                    <EmailInput />
                    <PasswordInput />
                </div>
                <Button type="primary" onClick={handleCadastrar}>Cadastrar</Button>
                <div class="cadastre">
                    <p>Já possui uma conta?</p>
                    <Link to="/logincliente">
                        <a>Login</a>
                    </Link>

                </div>
            </div>

        </cadastrocliente>
    );
};

export default CadastroCliente;