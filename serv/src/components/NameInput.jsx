import React from 'react';

const NameInput = () => {
    return (
        <div class="nameinput">
            <h3>Nome</h3>
        <input
            type="email"
            placeholder="Digite seu e-mail"
            style={{
                width: "400px",
                padding: "20px",
                fontSize: "16px",
                border: "none",
                borderRadius: "10px",
                outline: "none",
                backgroundColor: "#F2F2F2",
                marginBottom: "20px",
                fontWeight: "semibold",
            }}
        />
        </div>
    );
};

export default NameInput;