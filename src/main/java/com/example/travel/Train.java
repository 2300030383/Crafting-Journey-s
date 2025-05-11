package com.example.travel;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Train {
    @Id
    private Long id;
    private String name;
    private String source;
    private String destination;
    private String time;
    private int availableSeats;
    private double fare;

    // Getters and Setters
}
