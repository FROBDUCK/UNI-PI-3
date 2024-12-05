package com.example.demo.repository;

import com.example.demo.model.JobRequestModel;
import com.example.demo.model.UserWorkerModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface JobRequestRepository extends JpaRepository<JobRequestModel, Long> {

    @Query("SELECT jr FROM JobRequestModel jr WHERE jr.customer.id = :customerId")
    List<JobRequestModel> findByCustomerId(@Param("customerId") Long customerId);


    @Query("SELECT jr FROM JobRequestModel jr WHERE jr.job.worker = :worker")
    List<JobRequestModel> findAllByJob_Worker(@Param("worker") UserWorkerModel worker);
}
