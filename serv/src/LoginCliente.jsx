import React from 'react';
import BotaoEnviar from './components/BotaoEnviar';
import EmailInput from './components/EmailInput';
import './LoginCliente.css';
import minilogo from './assets/minilogo.png'
import imgcliente from './assets/imglogincliente.png';
import PasswordInput from './components/PasswordInput';

const LoginCliente = () => {
    return (
        <logincliente class="login">
            <div class="total">
                <div class="esquerda">
                    <img id="minilogo" src={minilogo} alt="Mini Logo"/>
                    <img id="imagem-lateral" src={imgcliente} alt="Imagem Cliente"/>
                </div>

                <div class="direita">
                    <div class="cabeçalho">
                        <h1>Faça seu login</h1>
                        <div class="texto">
                            <p>Não quer contratar?</p>
                            <a href="/LoginService">Quero prestar serviços</a>
                        </div>
                    </div>
                    <div class="inputs">
                        <EmailInput/>
                        <PasswordInput/>
                    </div>
                        <BotaoEnviar/>
                        <div class="cadastre">
                            <p>Não possui uma conta?</p>
                            <a href="/CadastroCliente">Cadastre-se</a>
                        </div>
                    </div>
                </div>
        </logincliente>
    );
};

export default LoginCliente;