package com.infosys.neurofleetx.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Basic Info
    private String make; // e.g., Tesla, Tata
    private String model; // e.g., Model S, Nexon EV
    private String plateNumber; // e.g., MH12AB1234
    private String type; // e.g., Electric, Diesel, Cargo
    private int year; // Manufacturing year

    // Driver & Operational Info
    private Long driverId; // Linked Driver ID (optional)
    private String driver; // Driver name (optional)
    private String route; // Current assigned route
    private String status; // ACTIVE, IDLE, IN_TRANSIT, MAINTENANCE

    // Telemetry / Real-time Data
    private double latitude;
    private double longitude;
    private double speed;
    private double fuelLevel;
    private double batteryLevel;
    private double loadCapacity;

    private String vin;

}
