package com.example.CRAFTING_JOURNEYS;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class RegService {

    @Autowired
    private UserRepository userRepository;

    // BCrypt encoder for password hashing
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public Map<String, Object> register(UserDTO dto) {
        Map<String, Object> response = new HashMap<>();

        // Check password match
        if (!dto.getPassword().equals(dto.getConfirmPassword())) {
            response.put("success", false);
            response.put("message", "Passwords do not match.");
            return response;
        }

        // Check for existing email
        if (userRepository.findByEmail(dto.getEmail()).isPresent()) {
            response.put("success", false);
            response.put("message", "Email already registered.");
            return response;
        }

        // Save new user with encoded password
        Registartion user = new Registartion();
        user.setName(dto.getFullName());
        user.setEmail(dto.getEmail());
        user.setPassword(passwordEncoder.encode(dto.getPassword()));

        userRepository.save(user);

        response.put("success", true);
        response.put("message", "Registration successful!");
        return response;
    }

    public Map<String, Object> login(String email, String password) {
        Map<String, Object> response = new HashMap<>();
        Optional<Registartion> userOpt = userRepository.findByEmail(email);

        if (userOpt.isEmpty() || !passwordEncoder.matches(password, userOpt.get().getPassword())) {
            response.put("success", false);
            response.put("message", "Invalid credentials.");
        } else {
            response.put("success", true);
            response.put("message", "Login successful.");
        }

        return response;
    }
}
