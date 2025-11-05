package com.infosys.neurofleetx.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "alerts")
public class Alert {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long vehicleId;
    private String level; // INFO / WARNING / CRITICAL
    private String code; // OVERSPEED, IDLE, LOW_FUEL
    private String message;
    private Instant timestamp;
    private Boolean acknowledged = false;
}
