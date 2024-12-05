package com.example.demo.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Data
public class UserWorkerModel extends UserModel {
    private String cnpj;
    private String fieldOfWork;
    private String bio;
    private Double avgRating = 5.0;

    @JsonIgnore
    @OneToMany(mappedBy = "worker", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<JobModel> jobs;
}
