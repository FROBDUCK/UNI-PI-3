package com.example.demo.service;

import com.example.demo.model.UserCustomerModel;
import com.example.demo.model.UserWorkerModel;
import com.example.demo.repository.UserCustomerRepository;
import com.example.demo.repository.UserWorkerRepository;

import jakarta.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserLoginService {

    @Autowired
    private UserCustomerRepository customerRepository;

    @Autowired
    private UserWorkerRepository workerRepository;

    public String loginCustomer(String email, String password, HttpSession session) {
        return customerRepository.findByEmail(email)
                .filter(customer -> customer.getPassword().equals(password))
                .map(customer -> {
                    session.setAttribute("customerId", customer.getId()); // Salva o ID na sessão
                    session.setAttribute("role", "customer"); // Define o papel como cliente
                    return customer.getUserName();
                })
                .orElse(null);
    }

    public String loginWorker(String email, String password, HttpSession session) {
        return workerRepository.findByEmail(email)
                .filter(worker -> worker.getPassword().equals(password))
                .map(worker -> {
                    session.setAttribute("workerId", worker.getId()); // Salva o ID na sessão
                    session.setAttribute("role", "worker"); // Define o papel como prestador
                    return worker.getUserName();
                })
                .orElse(null);
    }
}
