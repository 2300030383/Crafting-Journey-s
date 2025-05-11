package com.example.travel;


import com.example.travel.Bus;
import com.example.travel.Flight;
import com.example.travel.Train;

import java.util.List;

public class SearchResults {
    private List<Bus> buses;
    private List<Train> trains;
    private List<Flight> flights;

    public SearchResults(List<Bus> buses, List<Train> trains, List<Flight> flights) {
        this.buses = buses;
        this.trains = trains;
        this.flights = flights;
    }

    // Getters and Setters
}
