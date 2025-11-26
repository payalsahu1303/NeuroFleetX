// src/pages/driver/Profile.jsx
import React, { useEffect, useState } from "react";

export default function Profile() {
  const [user] = useState(() => JSON.parse(localStorage.getItem("nf_user") || "{}"));
  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">Profile</h2>
      <div className="max-w-md space-y-3">
        <div><strong>Name:</strong> {user?.name}</div>
        <div><strong>Email:</strong> {user?.email}</div>
        <div><strong>Role:</strong> {user?.role}</div>
      </div>
    </div>
  );
}
