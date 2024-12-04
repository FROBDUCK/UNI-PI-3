import React from 'react';

const BotaoEnviar = () => {
    return (
        <button id="login-button" type="submit"
            style={{
                width: "400px",
                padding: "20px",
                border: "none",
                borderRadius: "10px",
                backgroundColor: "#5454C8",
                color: "#fff",
                cursor: "pointer",
                fontWeight: "semibold"
            }}
        >
        Enviar
        </button>
    );
};

export default BotaoEnviar;