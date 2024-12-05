package com.example.demo.controller;

import com.example.demo.model.AddressModel;
import com.example.demo.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/address")
public class AddressController {
    @Autowired
    private AddressService addressService;

    @PostMapping
    public AddressModel createAddress(@RequestBody AddressModel address) {
        return addressService.createAddress(address);
    }

    @GetMapping
    public List<AddressModel> getAllAddresses() {
        return addressService.getAllAddresses();
    }

    @GetMapping("/{id}")
    public AddressModel getAddressById(@PathVariable Long id) {
        return addressService.getAddressById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteJobAddress(@PathVariable Long id) {
        addressService.deleteAddress(id);
    }
}
