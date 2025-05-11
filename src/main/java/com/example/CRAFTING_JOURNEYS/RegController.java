package com.example.CRAFTING_JOURNEYS;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin(origins = "*") // Allow all origins (for frontend to connect)
@RequestMapping("/api/") // Optional base path for clarity
public class RegController {

    @Autowired
    private RegService authService;

    @PostMapping("/registration")
    public Map<String, Object> register(@RequestBody UserDTO userDTO) {
        return authService.register(userDTO);
    }

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> data) {
        return authService.login(data.get("email"), data.get("password"));
    }
}