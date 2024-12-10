package com.example.demo.repository;
import com.example.demo.model.JobModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface JobRepository extends JpaRepository<JobModel, Long> {


    @Query("SELECT j FROM JobModel j WHERE j.worker.id = :workerId")
    List<JobModel> findByWorkerId(@Param("workerId") Long workerId);
}