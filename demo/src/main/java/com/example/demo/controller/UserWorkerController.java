package com.example.demo.controller;

import com.example.demo.model.JobModel;
import com.example.demo.model.UserWorkerModel;
import com.example.demo.service.UserWorkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/workers")
public class UserWorkerController {
    @Autowired
    private UserWorkerService userWorkerService;

    @PostMapping
    public UserWorkerModel createWorker(@RequestBody UserWorkerModel worker) {
        return userWorkerService.createWorker(worker);
    }

    @GetMapping
    public List<UserWorkerModel> getAllWorkers() {
        return userWorkerService.getAllWorkers();
    }

    @GetMapping("/{id}")
    public UserWorkerModel getWorkerById(@PathVariable Long id) {
        return userWorkerService.getWorkerById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteWorker(@PathVariable Long id) {
        userWorkerService.deleteWorker(id);
    }


    @GetMapping("/fields")
    public List<String> getDistinctFieldOfWork() {
        return userWorkerService.getDistinctFieldOfWork();
    }

    @GetMapping("/by-field")
    public List<UserWorkerModel> getWorkersByFieldOfWork(@RequestParam String fieldOfWork) {
        return userWorkerService.getWorkersByFieldOfWork(fieldOfWork);
    }

    @PostMapping("/{workerId}/add-job")
public JobModel addJobToWorker(
        @PathVariable Long workerId,
        @RequestParam String jobTitle,
        @RequestParam String description,
        @RequestParam Double price) {
    return userWorkerService.addJobToWorker(workerId, jobTitle, description, price);
}


@GetMapping("/{workerId}/jobs")
public List<JobModel> getJobsByWorkerId(@PathVariable Long workerId) {
    return userWorkerService.getJobsByWorkerId(workerId);
}


}
