package com.example.demo;

import com.example.demo.Bus;
import com.example.demo.BusService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@SuppressWarnings("unused")
@RestController
@RequestMapping("/api/bus")
@CrossOrigin(origins = "*")
public class BusController {

    @Autowired
    private BusService busService;

    @PostMapping("/add")
    public Bus addBus(@RequestBody Bus bus) {
        return busService.addBus(bus);
    }

    @GetMapping("/all")
    public List<Bus> getAllBuses() {
        return busService.getAllBuses();
    }

    @GetMapping("/search")
    public List<Bus> getBusesBySourceAndDestination(@RequestParam String source, @RequestParam String destination) {
        return busService.getBusesBySourceAndDestination(source, destination);
    }
}
