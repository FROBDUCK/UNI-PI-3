package com.example.demo.repository;

import com.example.demo.model.UserWorkerModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserWorkerRepository extends JpaRepository<UserWorkerModel, Long> {

    @Query("SELECT DISTINCT u.fieldOfWork FROM UserWorkerModel u")
    List<String> findDistinctFieldOfWork();

    List<UserWorkerModel> findByFieldOfWork(String fieldOfWork);

    Optional<UserWorkerModel> findByEmail(String email);
}
