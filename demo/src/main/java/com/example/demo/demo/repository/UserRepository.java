package com.example.demo.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.demo.model.UserModel;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long> {

}
