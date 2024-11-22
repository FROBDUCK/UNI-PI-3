package com.example.demo.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;

@Entity
public class AdressModel {

    private long id;

    private String district;
    private String state;
    private String city;
    private String zipcode;
    private String street;
    private int num;

    @OneToOne(mappedBy = "user")
    @JsonIgnore
    private UserModel user;


    
}
