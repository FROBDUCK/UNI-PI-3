package com.example.demo.service;

import com.example.demo.model.AddressModel;
import com.example.demo.repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressService {
    @Autowired
    private AddressRepository addressRepository;

    public AddressModel createAddress(AddressModel address) {
        return addressRepository.save(address);
    }

    public List<AddressModel> getAllAddresses() {
        return addressRepository.findAll();
    }

    public AddressModel getAddressById(Long id) {
        return addressRepository.findById(id).orElse(null);
    }

    public void deleteAddress(Long id) {
        addressRepository.deleteById(id);
    }
}
