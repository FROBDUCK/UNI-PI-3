package com.example.demo.service;

import com.example.demo.model.UserCustomerModel;
import com.example.demo.repository.UserCustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserCustomerService {
    @Autowired
    private UserCustomerRepository userCustomerRepository;

    public UserCustomerModel createCustomer(UserCustomerModel customer) {
        return userCustomerRepository.save(customer);
    }

    public List<UserCustomerModel> getAllCustomers() {
        return userCustomerRepository.findAll();
    }

    public UserCustomerModel getCustomerById(Long id) {
        return userCustomerRepository.findById(id).orElse(null);
    }

    public void deleteCustomer(Long id) {
        userCustomerRepository.deleteById(id);
    }
}
