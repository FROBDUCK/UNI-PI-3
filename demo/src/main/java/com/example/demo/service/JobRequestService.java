package com.example.demo.service;

import com.example.demo.model.*;
import com.example.demo.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobRequestService {

    @Autowired
    private JobRequestRepository jobRequestRepository;

    @Autowired
    private UserCustomerRepository userCustomerRepository;

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private UserWorkerRepository userWorkerRepository;

    public String hireJob(Long customerId, Long jobId) {
        UserCustomerModel customer = userCustomerRepository.findById(customerId)
                .orElseThrow(() -> new RuntimeException("Cliente não encontrado"));
    
        JobModel job = jobRepository.findById(jobId)
                .orElseThrow(() -> new RuntimeException("Trabalho não encontrado"));
    
        if (!job.getAvailability()) {
            throw new RuntimeException("Trabalho não está disponível para contratação.");
        }

        JobRequestModel jobRequest = new JobRequestModel();
        jobRequest.setCustomer(customer);
        jobRequest.setJob(job);
    

        job.setAvailability(false);
        jobRepository.save(job);
        jobRequestRepository.save(jobRequest);
    

        String customerPhone = customer.getPhoneNumber();
        return "https://api.whatsapp.com/send?phone=55" + customerPhone;
    }
    

    public List<JobRequestModel> getHiredJobsByCustomer(Long customerId) {
        return jobRequestRepository.findByCustomerId(customerId);
    }

    public JobRequestModel finalizeJob(Long requestId, Double rating) {
        JobRequestModel jobRequest = jobRequestRepository.findById(requestId)
                .orElseThrow(() -> new RuntimeException("Solicitação não encontrada"));

        if (jobRequest.getRating() != null) {
            throw new RuntimeException("Este trabalho já foi finalizado.");
        }

        RatingModel jobRating = new RatingModel();
        jobRating.setReview(rating);
        jobRequest.setRating(jobRating);

        jobRequestRepository.save(jobRequest);

        UserWorkerModel worker = jobRequest.getJob().getWorker();
        updateWorkerRating(worker);

        return jobRequest;
    }

    private void updateWorkerRating(UserWorkerModel worker) {
        List<JobRequestModel> completedRequests = jobRequestRepository.findAllByJob_Worker(worker);

        double avgRating = completedRequests.stream()
                .filter(req -> req.getRating() != null)
                .mapToDouble(req -> req.getRating().getReview())
                .average()
                .orElse(0.0);

        worker.setAvgRating(avgRating);
        userWorkerRepository.save(worker);
    }
}
