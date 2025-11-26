// src/pages/driver/DriverDashboard.jsx
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function DriverDashboard() {
  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">Driver Dashboard</h2>
      <Card>
        <CardHeader>
          <CardTitle>Today</CardTitle>
        </CardHeader>
        <CardContent>
          <div>No active bookings</div>
        </CardContent>
      </Card>
    </div>
  );
}
