import React from 'react';

const EmailInput = () => {
    return (
        <div class="emailinput">
            <h3>Email</h3>
        <input
            type="email"
            placeholder="Digite seu e-mail"
            style={{
                width: "400px",
                padding: "12px 12px",
                marginTop: "0.25rem",
                fontSize: "16px",
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

export default EmailInput;