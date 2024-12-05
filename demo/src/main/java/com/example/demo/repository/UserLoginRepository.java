package com.example.demo.repository;

import com.example.demo.model.UserLoginModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserLoginRepository extends JpaRepository<UserLoginModel, Long> {
    Optional<UserLoginModel> findByEmail(String email);
}
