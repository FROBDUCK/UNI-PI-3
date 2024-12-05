package com.example.demo.controller;

import com.example.demo.model.RatingModel;
import com.example.demo.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ratings")
public class RatingController {
    @Autowired
    private RatingService ratingService;

    @PostMapping
    public RatingModel createRating(@RequestBody RatingModel rating) {
        return ratingService.createRating(rating);
    }

    @GetMapping
    public List<RatingModel> getAllRatings() {
        return ratingService.getAllRatings();
    }

    @GetMapping("/{id}")
    public RatingModel getRatingById(@PathVariable Long id) {
        return ratingService.getRatingById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteRating(@PathVariable Long id) {
        ratingService.deleteRating(id);
    }
}
