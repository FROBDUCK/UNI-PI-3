package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.Data;
@Entity
@Data
public class JobModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @ManyToOne
    private UserWorkerModel worker;

    private String title;
    private String description;
    private Double price;
    private Boolean availability = true;
    private String dateOfCreation;
}
