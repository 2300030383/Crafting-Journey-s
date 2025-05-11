package com.example.mail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/booking")
public class BookingController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/book")
    public String bookTicket(@RequestBody TicketRequest request) {
        // Debug log to check if the request is reaching the backend
        System.out.println("Received booking request from: " + request.getEmail());

        // Construct the email content
        String subject = "Ticket Booking Confirmation";
        String body = "Dear " + request.getName() + ",\n\n" +
                "Your ticket has been booked successfully!\n\n" +
                "From: " + request.getSource() + "\n" +
                "To: " + request.getDestination() + "\n" +
                "Date: " + request.getDate() + "\n" +
                "Seats: " + request.getSeats() + "\n\n" +
                "Thank you for choosing us!\n\n" +
                "Best Regards,\nYour Booking Team";

        // Send the email
        emailService.sendBookingConfirmation(request.getEmail(), subject, body);

        return "Ticket booked and email sent successfully.";
    }
}
