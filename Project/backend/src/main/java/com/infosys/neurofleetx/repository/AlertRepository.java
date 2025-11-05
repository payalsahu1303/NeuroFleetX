package com.infosys.neurofleetx.repository;

import com.infosys.neurofleetx.model.Alert;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AlertRepository extends JpaRepository<Alert, Long> {
    List<Alert> findTop100ByVehicleIdOrderByTimestampDesc(Long vehicleId);
}
