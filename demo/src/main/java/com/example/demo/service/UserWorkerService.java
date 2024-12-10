package com.example.demo.service;

import com.example.demo.model.JobModel;
import com.example.demo.repository.JobRepository;
import com.example.demo.model.UserWorkerModel;
import com.example.demo.repository.UserWorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserWorkerService {

    @Autowired
    private JobRepository jobRepository;


    @Autowired
    private UserWorkerRepository userWorkerRepository;

    public UserWorkerModel createWorker(UserWorkerModel worker) {
        return userWorkerRepository.save(worker);
    }

    public List<UserWorkerModel> getAllWorkers() {
        return userWorkerRepository.findAll();
    }

    public UserWorkerModel getWorkerById(Long id) {
        return userWorkerRepository.findById(id).orElse(null);
    }

    public void deleteWorker(Long id) {
        userWorkerRepository.deleteById(id);
    }

    // Novo método para buscar tipos únicos de fieldOfWork
    public List<String> getDistinctFieldOfWork() {
        return userWorkerRepository.findDistinctFieldOfWork();
    }
    // Novo método para buscar prestadores pelo tipo de trabalho
    public List<UserWorkerModel> getWorkersByFieldOfWork(String fieldOfWork) {
        return userWorkerRepository.findByFieldOfWork(fieldOfWork);
    }

// Método para adicionar trabalho ao trabalhador
public JobModel addJobToWorker(Long workerId, String jobTitle, String description, Double price) {
    UserWorkerModel worker = userWorkerRepository.findById(workerId)
            .orElseThrow(() -> new RuntimeException("Trabalhador não encontrado"));

    JobModel job = new JobModel();
    job.setTitle(jobTitle);
    job.setDescription(description);
    job.setPrice(price);
    job.setAvailability(true);
    job.setDateOfCreation(java.time.LocalDate.now().toString());
    job.setWorker(worker);

    return jobRepository.save(job); // Aqui usamos a instância correta
}

public List<JobModel> getJobsByWorkerId(Long workerId) {
    return jobRepository.findByWorkerId(workerId);
}

    
}
