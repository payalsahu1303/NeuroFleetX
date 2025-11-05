package com.infosys.neurofleetx.controller;

import com.infosys.neurofleetx.model.User;
import com.infosys.neurofleetx.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173") // React frontend
public class AuthController {

    @Autowired
    private UserRepository userRepo;

    // ---------------- REGISTER ----------------
    @PostMapping("/register")
    public Map<String, String> register(@RequestBody User user) {
        Map<String, String> response = new HashMap<>();

        try {
            // Check if email already exists
            if (userRepo.findByEmail(user.getEmail()).isPresent()) {
                response.put("status", "error");
                response.put("message", "Email already registered");
                return response;
            }

            // Later: encrypt password with BCrypt
            userRepo.save(user);

            response.put("status", "success");
            response.put("message", "Registration successful");
            return response;

        } catch (Exception e) {
            response.put("status", "error");
            response.put("message", "Registration failed: " + e.getMessage());
            return response;
        }
    }

    // ---------------- LOGIN ----------------
    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> loginData) {
        Map<String, String> response = new HashMap<>();

        try {
            String email = loginData.get("email");
            String password = loginData.get("password");

            User user = userRepo.findByEmail(email)
                    .orElseThrow(() -> new RuntimeException("User not found"));

            if (!user.getPassword().equals(password)) {
                throw new RuntimeException("Invalid credentials");
            }

            // 🔐 Temporary token until JWT is integrated
            String token = "dummy-jwt-token-" + System.currentTimeMillis();

            response.put("status", "success");
            response.put("token", token);
            response.put("name", user.getName());
            response.put("role", user.getRole());
            response.put("message", "Login successful");
            return response;

        } catch (Exception e) {
            response.put("status", "error");
            response.put("message", e.getMessage());
            return response;
        }
    }

    // ---------------- TEST ENDPOINT ----------------
    @GetMapping("/ping")
    public String ping() {
        return "Auth Service is running ✅";
    }
}
