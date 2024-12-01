import React, { useState } from "react";

function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div class="senha">
      <h3>Senha</h3>
      <div style={{ position: "relative" }}>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Digite sua senha"
          style={{
            fontSize: "16px",
            width: "400px",
            padding: "20px",
            paddingRight: "50px",
            border: "none", 
            borderRadius: "10px",
            outline: "none",
            backgroundColor: "#F2F2F2",
            marginBottom: "20px"
          }}
        />
        <button
          onClick={togglePasswordVisibility}
          style={{
            background: "none",
            cursor: "pointer",
            border: "none",
            position: "absolute",
            right: "15px",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            padding: "0 15px",
            marginBottom: "20px"
          }}
          aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
        >
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
              width="24"
              height="24"
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
