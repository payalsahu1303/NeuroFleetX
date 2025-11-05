package com.infosys.neurofleetx.controller;

import com.infosys.neurofleetx.model.Telemetry;
import com.infosys.neurofleetx.model.Vehicle;
import com.infosys.neurofleetx.repository.TelemetryRepository;
import com.infosys.neurofleetx.repository.VehicleRepository;
import com.infosys.neurofleetx.service.TelemetryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/fleet")
@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class FleetController {

    private final VehicleRepository vehicleRepo;
    private final TelemetryRepository telemetryRepo;
    private final TelemetryService telemetryService;

    // Register vehicle
    @PostMapping("/vehicle")
    public Vehicle addVehicle(@RequestBody Vehicle v) {
        if (v.getStatus() == null)
            v.setStatus("ACTIVE");
        return vehicleRepo.save(v);
    }

    // Update vehicle
    @PutMapping("/vehicle/{id}")
    public Vehicle updateVehicle(@PathVariable Long id, @RequestBody Vehicle updated) {
        Vehicle ex = vehicleRepo.findById(id).orElseThrow(() -> new RuntimeException("Vehicle not found"));
        ex.setMake(updated.getMake());
        ex.setModel(updated.getModel());
        ex.setPlateNumber(updated.getPlateNumber());
        ex.setStatus(updated.getStatus());
        ex.setType(updated.getType());
        ex.setYear(updated.getYear());
        ex.setDriverId(updated.getDriverId());
        return vehicleRepo.save(ex);
    }

    // List all vehicles
    @GetMapping("/vehicles")
    public List<Vehicle> list() {
        return vehicleRepo.findAll();
    }

    // Get telemetry history for a vehicle
    @GetMapping("/telemetry/{vehicleId}")
    public List<Telemetry> telemetry(@PathVariable Long vehicleId) {
        return telemetryRepo.findTop200ByVehicleIdOrderByTimestampDesc(vehicleId);
    }

    // Endpoint to ingest telemetry (HTTP)
    @PostMapping("/telemetry")
    public Telemetry ingest(@RequestBody Map<String, Object> payload) {
        return telemetryService.ingestTelemetry(payload);
    }
}
