import React from 'react';

const NameInput = () => {
    return (
        <div class="nameinput">
            <h3>Nome</h3>
        <input
            type="nome"
            placeholder="Digite seu nome"
            style={{
                width: "400px",
                marginTop: "0.25rem",
                padding: "12px 12px",
                fontSize: "1rem",
                border: "none",
                borderRadius: "10px",
                outline: "none",
                backgroundColor: "#F2F2F2",
                marginBottom: "1rem",
                fontWeight: "semibold",
            }}
        />
        </div>
    );
};

export default NameInput;