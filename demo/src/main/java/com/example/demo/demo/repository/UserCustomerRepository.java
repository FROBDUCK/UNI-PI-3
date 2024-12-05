package com.example.demo.repository;

import com.example.demo.model.UserCustomerModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserCustomerRepository extends JpaRepository<UserCustomerModel, Long> {

    Optional<UserCustomerModel> findByEmail(String email);
}
