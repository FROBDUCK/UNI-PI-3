import React from 'react';
import BotaoEnviar from './componentes/BotaoEnviar';
import EmailInput from './componentes/EmailInput';
import './LoginCliente.css';
import PasswordInput from './componentes/PasswordInput';

const LoginCliente = () => {
    return (
        <logincliente class="login">
            <div class="total">
                <div class="esquerda">
                    <img id="minilogo" src="\minilogo.png" alt="Mini Logo"/>
                    <img id="imagem-lateral" src="\imglogincliente.png" alt="Imagem Cliente"/>
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