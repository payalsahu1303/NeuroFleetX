// src/pages/admin/PredictiveMaintenance.jsx
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function PredictiveMaintenance() {
  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">Predictive Maintenance</h2>
      <Card>
        <CardHeader>
          <CardTitle>Health Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">No high severity alerts currently.</p>
        </CardContent>
      </Card>
    </div>
  );
}
