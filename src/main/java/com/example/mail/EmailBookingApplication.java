package com.example.mail;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmailBookingApplication {
    public static void main(String[] args) {
        SpringApplication.run(EmailBookingApplication.class, args);
        System.out.println("Working");
    }
}
