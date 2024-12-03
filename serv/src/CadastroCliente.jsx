import React from 'react';
import './CadastroCliente.css';
import BotaoEnviar from './componentes/BotaoEnviar';
import EmailInput from './componentes/EmailInput';
import NameInput from './componentes/NameInput';
import PasswordInput from './componentes/PasswordInput';

const CadastroCliente = () => {
    return (
        <cadastrocliente class="cadastro">
            <div class="total">
                <div class="esquerda">
                    <img id="minilogo" src="\minilogo.png" alt="Mini Logo"/>
                    <img id="imagem-lateral" src="\imgcadastrocliente.png" alt="Imagem Cadastro"/>
                </div>
            </div>
            
            <div class="direita">
                    <div class="cabeçalho">
                        <h1>Serviço responsável é aqui.</h1>
                        <h1>Cadastre-se agora</h1>
                        <div class="texto">
                            <p>Não quer contratar?</p>
                            <a href="/LoginService">Quero prestar serviços</a>
                        </div>
                    </div>
                    <div class="inputs">
                        <NameInput/>
                        <EmailInput/>
                        <PasswordInput/>
                    </div>
                        <BotaoEnviar/>
                        <div class="cadastre">
                            <p>Já possui uma conta?</p>
                            <a href="/CadastroCliente">Login</a>
                        </div>
            </div>

        </cadastrocliente>
    );
};

export default CadastroCliente;