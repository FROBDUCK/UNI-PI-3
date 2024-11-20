package com.example.demo.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.demo.model.UserModel;
import com.example.demo.demo.service.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("api/v1/users/")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public UserModel postUser(@RequestBody UserModel user) {
        return userService.insertUser(user);
    }

    @GetMapping
    public List<UserModel> getUsers() {
        return userService.getAllUsers();
    }

}
