// src/pages/driver/EngineDetails.jsx
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function EngineDetails() {
  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">Engine Details</h2>
      <Card>
        <CardHeader>
          <CardTitle>Telemetry</CardTitle>
        </CardHeader>
        <CardContent>
          <div>Engine Temp: --</div>
          <div>Battery: --</div>
        </CardContent>
      </Card>
    </div>
  );
}
