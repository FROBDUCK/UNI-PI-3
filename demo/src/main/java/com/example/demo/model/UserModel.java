package com.example.demo.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Data
@MappedSuperclass
public abstract class UserModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String userName;
    private String email;
    private String password;
    private String phoneNumber;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<AddressModel> addresses;

    private String profilePic;
}