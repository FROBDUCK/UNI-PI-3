package com.example.demo.controller;

import com.example.demo.model.UserCustomerModel;
import com.example.demo.service.UserCustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
public class UserCustomerController {
    @Autowired
    private UserCustomerService userCustomerService;

    @PostMapping
    public UserCustomerModel createCustomer(@RequestBody UserCustomerModel customer) {
        return userCustomerService.createCustomer(customer);
    }

    @GetMapping
    public List<UserCustomerModel> getAllCustomers() {
        return userCustomerService.getAllCustomers();
    }

    @GetMapping("/{id}")
    public UserCustomerModel getCustomerById(@PathVariable Long id) {
        return userCustomerService.getCustomerById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteCustomer(@PathVariable Long id) {
        userCustomerService.deleteCustomer(id);
    }
}