package com.example.demo.controller;

import com.example.demo.model.JobRequestModel;
import com.example.demo.service.JobRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/job-requests")
public class JobRequestController {

    @Autowired
    private JobRequestService jobRequestService;

    @PostMapping("/hire")
    public String hireJob(@RequestParam Long customerId, @RequestParam Long jobId) {
        return jobRequestService.hireJob(customerId, jobId);
    }

    @GetMapping("/customers/{customerId}/hired-jobs")
    public List<JobRequestModel> getHiredJobsByCustomer(@PathVariable Long customerId) {
        return jobRequestService.getHiredJobsByCustomer(customerId);
    }

    @PostMapping("/{requestId}/finalize")
    public JobRequestModel finalizeJob(@PathVariable Long requestId, @RequestParam Double rating) {
        return jobRequestService.finalizeJob(requestId, rating);
    }
}
