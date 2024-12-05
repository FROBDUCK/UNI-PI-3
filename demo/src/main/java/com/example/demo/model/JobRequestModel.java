package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class JobRequestModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @ManyToOne
    private UserCustomerModel customer;

    @JsonIgnore
    @ManyToOne
    private JobModel job;

    @OneToOne(cascade = CascadeType.ALL)
    private RatingModel rating;
}

