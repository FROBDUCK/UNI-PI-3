package com.example.demo.service;

import com.example.demo.model.*;
import com.example.demo.repository.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExampleDataService {

    private final UserCustomerRepository userCustomerRepository;
    private final UserWorkerRepository userWorkerRepository;
    private final JobRepository jobRepository;
    private final AddressRepository addressRepository;

    public ExampleDataService(UserCustomerRepository userCustomerRepository,
                              UserWorkerRepository userWorkerRepository,
                              JobRepository jobRepository,
                              AddressRepository addressRepository) {
        this.userCustomerRepository = userCustomerRepository;
        this.userWorkerRepository = userWorkerRepository;
        this.jobRepository = jobRepository;
        this.addressRepository = addressRepository;
    }

    public void initializeExampleData() {


        if (userCustomerRepository.findById(1L).isPresent()) {
            System.out.println("Dados de exemplo já inicializados.");
            return;
        }


        AddressModel address1 = new AddressModel();
        address1.setState("SP");
        address1.setCity("São Paulo");
        address1.setZipCode("12345-678");
        address1.setDistrict("Centro");
        address1.setStreet("Rua A");
        address1.setNum(10);
    
        AddressModel address2 = new AddressModel();
        address2.setState("RJ");
        address2.setCity("Rio de Janeiro");
        address2.setZipCode("98765-432");
        address2.setDistrict("Copacabana");
        address2.setStreet("Rua B");
        address2.setNum(20);
    
        addressRepository.saveAll(List.of(address1, address2));

        UserCustomerModel customer1 = new UserCustomerModel();
        customer1.setUserName("Filipe Gomes");
        customer1.setEmail("cliente1@example.com");
        customer1.setPassword("123456");
        customer1.setPhoneNumber("123456789");
        customer1.setCpf("111.222.333-44");
        customer1.setAddresses(List.of(address1));
    
        UserCustomerModel customer2 = new UserCustomerModel();
        customer2.setUserName("Yasmin do Eden");
        customer2.setEmail("cliente2@example.com");
        customer2.setPassword("123456");
        customer2.setPhoneNumber("987654321");
        customer2.setCpf("555.666.777-88");
        customer2.setAddresses(List.of(address2));
    
        userCustomerRepository.saveAll(List.of(customer1, customer2));

        UserWorkerModel worker1 = new UserWorkerModel();
        worker1.setUserName("João Canabrava");
        worker1.setEmail("worker1@example.com");
        worker1.setPassword("123456");
        worker1.setPhoneNumber("111111111");
        worker1.setCnpj("12.345.678/0001-90");
        worker1.setFieldOfWork("Pintura");
        worker1.setBio("Especialista em pintura.");
        worker1.setAddresses(List.of(address1));
    
        UserWorkerModel worker2 = new UserWorkerModel();
        worker2.setUserName("Jose mochila de hello kitty");
        worker2.setEmail("worker2@example.com");
        worker2.setPassword("123456");
        worker2.setPhoneNumber("222222222");
        worker2.setCnpj("98.765.432/0001-90");
        worker2.setFieldOfWork("Eletricista");
        worker2.setBio("Especialista em instalações elétricas.");
        worker2.setAddresses(List.of(address2));
    
        userWorkerRepository.saveAll(List.of(worker1, worker2));

        JobModel job1 = new JobModel();
        job1.setTitle("Pintura de Parede");
        job1.setDescription("Pintura completa de interiores.");
        job1.setPrice(500.0);
        job1.setAvailability(true);
        job1.setDateOfCreation("2024-12-01");
        job1.setWorker(worker1);
    
        JobModel job2 = new JobModel();
        job2.setTitle("Instalação Elétrica");
        job2.setDescription("Instalação de tomadas e interruptores.");
        job2.setPrice(300.0);
        job2.setAvailability(true);
        job2.setDateOfCreation("2024-12-01");
        job2.setWorker(worker2);
    
        jobRepository.saveAll(List.of(job1, job2));
    
        System.out.println("Dados de exemplo inicializados com sucesso!");
    }
    
}
