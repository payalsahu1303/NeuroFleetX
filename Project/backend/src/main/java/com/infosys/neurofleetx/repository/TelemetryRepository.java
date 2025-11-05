package com.infosys.neurofleetx.repository;

import com.infosys.neurofleetx.model.Telemetry;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TelemetryRepository extends JpaRepository<Telemetry, Long> {
    List<Telemetry> findTop200ByVehicleIdOrderByTimestampDesc(Long vehicleId);

    List<Telemetry> findByVehicleIdAndTimestampBetween(Long vehicleId, java.time.Instant from, java.time.Instant to);
}
