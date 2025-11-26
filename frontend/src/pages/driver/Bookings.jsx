// src/pages/driver/Bookings.jsx
import React, { useEffect, useState } from "react";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    // fetch bookings for driver
    setBookings([]);
  }, []);
  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">Bookings</h2>
      <div>No bookings yet</div>
    </div>
  );
}
