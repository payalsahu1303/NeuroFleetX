package com.infosys.neurofleetx.service;

import com.infosys.neurofleetx.model.Alert;
import com.infosys.neurofleetx.model.Telemetry;
import com.infosys.neurofleetx.model.Vehicle;
import com.infosys.neurofleetx.repository.AlertRepository;
import com.infosys.neurofleetx.repository.TelemetryRepository;
import com.infosys.neurofleetx.repository.VehicleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TelemetryService {

    private final TelemetryRepository telemetryRepo;
    private final VehicleRepository vehicleRepo;
    private final AlertRepository alertRepo;
    private final SimpMessagingTemplate messagingTemplate; // to push to WS

    /**
     * Ingest telemetry payload (from HTTP or MQTT bridge)
     * returns the saved Telemetry
     */
    public Telemetry ingestTelemetry(Map<String, Object> payload) {
        // payload expected keys: vin or vehicleId, lat, lon, speed, fuel, battery,
        // engineTemp, loadKg
        Long vehicleId = null;
        if (payload.containsKey("vin")) {
            String vin = String.valueOf(payload.get("vin"));
            Optional<Vehicle> vOpt = vehicleRepo.findByVin(vin);
            if (vOpt.isPresent())
                vehicleId = vOpt.get().getId();
        } else if (payload.containsKey("vehicleId")) {
            vehicleId = Long.valueOf(String.valueOf(payload.get("vehicleId")));
        }

        if (vehicleId == null) {
            throw new IllegalArgumentException("vehicleId or vin required");
        }

        Telemetry t = new Telemetry();
        t.setVehicleId(vehicleId);
        t.setTimestamp(Instant.now());
        t.setLatitude(payload.get("lat") != null ? Double.valueOf(String.valueOf(payload.get("lat"))) : null);
        t.setLongitude(payload.get("lon") != null ? Double.valueOf(String.valueOf(payload.get("lon"))) : null);
        t.setSpeedKph(payload.get("speed") != null ? Double.valueOf(String.valueOf(payload.get("speed"))) : null);
        t.setFuelLevel(payload.get("fuel") != null ? Double.valueOf(String.valueOf(payload.get("fuel"))) : null);
        t.setBatteryLevel(
                payload.get("battery") != null ? Double.valueOf(String.valueOf(payload.get("battery"))) : null);
        t.setEngineTemp(
                payload.get("engineTemp") != null ? Double.valueOf(String.valueOf(payload.get("engineTemp"))) : null);
        t.setLoadKg(payload.get("loadKg") != null ? Double.valueOf(String.valueOf(payload.get("loadKg"))) : null);
        t.setRaw(payload.toString());

        Telemetry saved = telemetryRepo.save(t);

        // Check for alerts (simple rules)
        evaluateAlerts(saved);

        // Push to websocket topic `/topic/telemetry`
        messagingTemplate.convertAndSend("/topic/telemetry", saved);

        return saved;
    }

    private void evaluateAlerts(Telemetry t) {
        // Example thresholds (tune as needed)
        Double speed = t.getSpeedKph();
        Double fuel = t.getFuelLevel();
        Double battery = t.getBatteryLevel();

        if (speed != null && speed > 100.0) {
            createAlert(t.getVehicleId(), "WARNING", "OVERSPEED", "Speed > 100 kph");
        }
        if (fuel != null && fuel < 10.0) {
            createAlert(t.getVehicleId(), "WARNING", "LOW_FUEL", "Fuel < 10%");
        }
        if (battery != null && battery < 15.0) {
            createAlert(t.getVehicleId(), "WARNING", "LOW_BATT", "Battery < 15%");
        }
    }

    private void createAlert(Long vehicleId, String level, String code, String message) {
        Alert a = new Alert();
        a.setVehicleId(vehicleId);
        a.setLevel(level);
        a.setCode(code);
        a.setMessage(message);
        a.setTimestamp(Instant.now());
        alertRepo.save(a);

        // push to `/topic/alerts`
        messagingTemplate.convertAndSend("/topic/alerts", a);
    }
}
