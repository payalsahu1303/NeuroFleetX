package com.infosys.neurofleetx.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "telemetry")
public class Telemetry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long vehicleId;

    private Instant timestamp;

    // geolocation
    private Double latitude;
    private Double longitude;

    // vehicle metrics
    private Double speedKph;
    private Double fuelLevel; // percent or liters
    private Double batteryLevel; // percent if EV
    private Double engineTemp;
    private Double loadKg;

    // serialized raw payload (optional)
    @Column(columnDefinition = "TEXT")
    private String raw;
}
