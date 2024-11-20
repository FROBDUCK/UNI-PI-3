package com.example.demo.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.demo.model.UserModel;
import com.example.demo.demo.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserModel insertUser(UserModel user) {
        userRepository.save(user);
        return user;
    }

    public List<UserModel> getAllUsers() {
        return userRepository.findAll();
    }

    public UserModel getById(Long id) {
        Optional<UserModel> resultUser = userRepository.findById(id);

        if (resultUser.isPresent()) {
            return resultUser.get();
        }

        return null;

    }

    public void deleteById(Long id) throws Exception {

        if (getById(id) != null) {
            userRepository.deleteById(id);
        } else {
            throw new Exception("User with id " + id + " not found.");
        }
    }

    public UserModel updateNameById(Long id, String name) throws Exception {

        UserModel userResult = getById(id);

        if (userResult != null) {
            userResult.setName(name);
            userRepository.save(userResult);
            return userResult;
        }

        throw new Exception("User with id " + id + " not found.");

    }

}
