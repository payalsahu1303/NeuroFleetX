package com.infosys.neurofleetx.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.infosys.neurofleetx.model.Vehicle;
import com.infosys.neurofleetx.repository.VehicleRepository;

@Service
public class VehicleService {

    @Autowired
    private VehicleRepository vehicleRepository;

    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    public Vehicle addVehicle(Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }

    public Vehicle updateVehicle(Long id, Vehicle updated) {
        return vehicleRepository.findById(id).map(vehicle -> {
            vehicle.setModel(updated.getModel());
            vehicle.setStatus(updated.getStatus());
            vehicle.setDriver(updated.getDriver());
            vehicle.setRoute(updated.getRoute());
            return vehicleRepository.save(vehicle);
        }).orElseThrow(() -> new RuntimeException("Vehicle not found"));
    }

    public void deleteVehicle(Long id) {
        vehicleRepository.deleteById(id);
    }
}
