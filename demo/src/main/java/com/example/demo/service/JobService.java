package com.example.demo.service;

import com.example.demo.model.JobModel;
import com.example.demo.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {
    @Autowired
    private JobRepository jobRepository;

    public JobModel createJob(JobModel job) {
        return jobRepository.save(job);
    }

    public List<JobModel> getAllJobs() {
        return jobRepository.findAll();
    }

    public JobModel getJobById(Long id) {
        return jobRepository.findById(id).orElse(null);
    }

    public void deleteJob(Long id) {
        jobRepository.deleteById(id);
    }
}
