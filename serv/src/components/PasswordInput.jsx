import React, { useState } from "react";

function PasswordInput({ value, onChange, required }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (event) => {
    event.preventDefault(); // Impede que o botão submeta o formulário
    setShowPassword(!showPassword);
  };

  return (
    <div id="div-password">
      <div style={{ position: "relative" }}>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Digite sua senha"
          value={value}
          onChange={onChange}
          required={required}
        />
        <button
          onClick={togglePasswordVisibility}
          style={{
            background: "none",
            cursor: "pointer",
            border: "none",
            position: "absolute",
            top: "35%",
            right: "10px",
            transform: "translateY(-50%)",
            padding: "0",
            margin: "0",
            display: "flex",
            alignItems: "center",
          }}
          aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
        >
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17.94 17.94A10.68 10.68 0 0 1 12 20c-5 0-9.27-3-10.94-7.5A10.71 10.71 0 0 1 12 4c5 0 9.27 3 10.94 7.5a10.71 10.71 0 0 1-1.62 2.82"></path>
              <line x1="1" y1="1" x2="23" y2="23"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M1 12s4-9 11-9 11 9 11 9-4 9-11 9-11-9-11-9z"></path>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default PasswordInput;
