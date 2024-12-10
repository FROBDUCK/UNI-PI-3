package com.example.demo.controller;

import com.example.demo.service.ExampleDataService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ExampleDataController {

    private final ExampleDataService exampleDataService;

    public ExampleDataController(ExampleDataService exampleDataService) {
        this.exampleDataService = exampleDataService;
    }

    @GetMapping("/initialize-data")
    public ResponseEntity<String> initializeData() {
        exampleDataService.initializeExampleData();
        return ResponseEntity.ok("Dados de exemplo cadastrados com sucesso!");
    }
}
