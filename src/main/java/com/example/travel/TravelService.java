package com.example.travel;

import com.example.travel.Bus;
import com.example.travel.Flight;
import com.example.travel.Train;
import com.example.travel.BusRepository;
import com.example.travel.FlightRepository;
import com.example.travel.TrainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TravelService {

    @Autowired
    private BusRepository busRepository;

    @Autowired
    private TrainRepository trainRepository;

    @Autowired
    private FlightRepository flightRepository;

    public List<Bus> getBuses(String source, String destination) {
        return busRepository.findBySourceAndDestination(source, destination);
    }

    public List<Train> getTrains(String source, String destination) {
        return trainRepository.findBySourceAndDestination(source, destination);
    }

    public List<Flight> getFlights(String source, String destination) {
        return flightRepository.findBySourceAndDestination(source, destination);
    }
}
