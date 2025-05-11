package com.example.travel;


import com.example.travel.Bus;
import com.example.travel.Flight;
import com.example.travel.Train;
import com.example.travel.TravelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TravelController {

    @Autowired
    private TravelService travelService;

    @GetMapping("/search")
    public SearchResults search(@RequestParam String destination, @RequestParam double lat, @RequestParam double lon) {
        // Assume user location is lat, lon. You could use a geocoding API if you need city names from coordinates.

        String source = getLocationFromCoordinates(lat, lon); // This can be implemented using reverse geocoding APIs.
        
        List<Bus> buses = travelService.getBuses(source, destination);
        List<Train> trains = travelService.getTrains(source, destination);
        List<Flight> flights = travelService.getFlights(source, destination);

        return new SearchResults(buses, trains, flights);
    }

    private String getLocationFromCoordinates(double lat, double lon) {
        
        return "User's Location (From Coordinates)";
    }
}
