package com.example.demo;


import com.example.demo.Bus;
import com.example.demo.BusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@SuppressWarnings("unused")
@Service
public class BusService {

    @Autowired
    private BusRepository busRepository;

    public Bus addBus(Bus bus) {
        return busRepository.save(bus);
    }

    public List<Bus> getAllBuses() {
        return busRepository.findAll();
    }

    public List<Bus> getBusesBySourceAndDestination(String source, String destination) {
        return busRepository.findBySourceAndDestination(source, destination);
    }
}
