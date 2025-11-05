package com.infosys.neurofleetx.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/analytics")
@CrossOrigin(origins = "http://localhost:5173")
public class AnalyticsController {

    @GetMapping("/summary")
    public Map<String, Object> getAnalyticsSummary() {
        Map<String, Object> summary = new HashMap<>();
        summary.put("fleetUtilization", 82.4);
        summary.put("avgTripDistance", 14.7);
        summary.put("avgFuelEfficiency", 21.5);
        summary.put("carbonReduction", 12.3);
        summary.put("monthlyTrips", Arrays.asList(320, 450, 510, 490, 600, 680));
        return summary;
    }
}
