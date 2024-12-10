package com.example.demo.controller;

import com.example.demo.model.LoginRequest;
import com.example.demo.service.UserLoginService;

import jakarta.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/login")
public class UserLoginController {

    @Autowired
    private UserLoginService userLoginService;

    @PostMapping("/customer")
    public ResponseEntity<String> loginCustomer(@RequestBody LoginRequest loginRequest, HttpSession session) {
        String result = userLoginService.loginCustomer(loginRequest.getEmail(), loginRequest.getPassword(), session);
        if (result != null) {
            return ResponseEntity.ok("Cliente logado: " + result);
        }
        return ResponseEntity.status(401).body("Email ou senha inválidos para cliente.");
    }


    @PostMapping("/worker")
    public ResponseEntity<String> loginWorker(@RequestBody LoginRequest loginRequest, HttpSession session) {
        String result = userLoginService.loginWorker(loginRequest.getEmail(), loginRequest.getPassword(), session);
        if (result != null) {
            return ResponseEntity.ok("Prestador logado: " + result);
        }
        return ResponseEntity.status(401).body("Email ou senha inválidos para prestador.");
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpSession session) {
        session.invalidate(); // Invalida a sessão
        return ResponseEntity.ok("Logout realizado com sucesso.");
    }

    @GetMapping("/worker-id")
    public ResponseEntity<Long> getWorkerId(HttpSession session) {
        Long workerId = (Long) session.getAttribute("workerId");
        if (workerId != null) {
            return ResponseEntity.ok(workerId);
        }
        return ResponseEntity.status(401).body(null); // Usuário não autorizado
    }
}
