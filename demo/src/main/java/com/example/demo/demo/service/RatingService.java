package com.example.demo.service;

import com.example.demo.model.RatingModel;
import com.example.demo.repository.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RatingService {
    @Autowired
    private RatingRepository ratingRepository;

    public RatingModel createRating(RatingModel rating) {
        return ratingRepository.save(rating);
    }

    public List<RatingModel> getAllRatings() {
        return ratingRepository.findAll();
    }

    public RatingModel getRatingById(Long id) {
        return ratingRepository.findById(id).orElse(null);
    }

    public void deleteRating(Long id) {
        ratingRepository.deleteById(id);
    }
}
