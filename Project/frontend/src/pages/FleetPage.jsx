import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FleetPage() {
  const [vehicles, setVehicles] = useState([]);
  const [newVehicle, setNewVehicle] = useState({
    registrationNumber: "",
    model: "",
    status: "Available",
    driver: "",
    route: "",
  });
  const [editingVehicle, setEditingVehicle] = useState(null);

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    const res = await axios.get("http://localhost:8080/api/fleet");
    setVehicles(res.data);
  };

  const handleAddVehicle = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/fleet", newVehicle);
    setNewVehicle({
      registrationNumber: "",
      model: "",
      status: "Available",
      driver: "",
      route: "",
    });
    fetchVehicles();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/api/fleet/${id}`);
    fetchVehicles();
  };

  const handleEdit = (vehicle) => {
    setEditingVehicle(vehicle);
  };

  const handleUpdateVehicle = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:8080/api/fleet/${editingVehicle.id}`,
      editingVehicle
    );
    setEditingVehicle(null);
    fetchVehicles();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "text-green-600";
      case "In Maintenance":
        return "text-yellow-600";
      case "Assigned":
        return "text-blue-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">
        Fleet Management
      </h1>

      {/* Add Vehicle Form */}
      <form
        onSubmit={handleAddVehicle}
        className="grid grid-cols-1 gap-4 p-6 mb-6 bg-white shadow rounded-xl md:grid-cols-5"
      >
        <input
          type="text"
          placeholder="Registration Number"
          value={newVehicle.registrationNumber}
          onChange={(e) =>
            setNewVehicle({ ...newVehicle, registrationNumber: e.target.value })
          }
          required
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Model"
          value={newVehicle.model}
          onChange={(e) =>
            setNewVehicle({ ...newVehicle, model: e.target.value })
          }
          required
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Driver"
          value={newVehicle.driver}
          onChange={(e) =>
            setNewVehicle({ ...newVehicle, driver: e.target.value })
          }
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Route"
          value={newVehicle.route}
          onChange={(e) =>
            setNewVehicle({ ...newVehicle, route: e.target.value })
          }
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </form>

      {/* Vehicle Table */}
      <div className="overflow-x-auto bg-white shadow rounded-xl">
        <table className="min-w-full text-left text-gray-700">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Reg. Number</th>
              <th className="p-3">Model</th>
              <th className="p-3">Status</th>
              <th className="p-3">Driver</th>
              <th className="p-3">Route</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((v, index) => (
              <tr key={v.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{v.registrationNumber}</td>
                <td className="p-3">{v.model}</td>
                <td className={`p-3 font-semibold ${getStatusColor(v.status)}`}>
                  {v.status}
                </td>
                <td className="p-3">{v.driver}</td>
                <td className="p-3">{v.route}</td>
                <td className="flex gap-2 p-3">
                  <button
                    onClick={() => handleEdit(v)}
                    className="px-3 py-1 text-white bg-yellow-500 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(v.id)}
                    className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {vehicles.length === 0 && (
              <tr>
                <td colSpan="7" className="p-3 text-center text-gray-500">
                  No vehicles found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {editingVehicle && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <form
            onSubmit={handleUpdateVehicle}
            className="bg-white p-8 rounded-xl shadow-lg w-[400px]"
          >
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Edit Vehicle
            </h2>

            <input
              type="text"
              value={editingVehicle.registrationNumber}
              onChange={(e) =>
                setEditingVehicle({
                  ...editingVehicle,
                  registrationNumber: e.target.value,
                })
              }
              className="w-full p-2 mb-3 border rounded"
            />

            <input
              type="text"
              value={editingVehicle.model}
              onChange={(e) =>
                setEditingVehicle({
                  ...editingVehicle,
                  model: e.target.value,
                })
              }
              className="w-full p-2 mb-3 border rounded"
            />

            <select
              value={editingVehicle.status}
              onChange={(e) =>
                setEditingVehicle({
                  ...editingVehicle,
                  status: e.target.value,
                })
              }
              className="w-full p-2 mb-3 border rounded"
            >
              <option>Available</option>
              <option>Assigned</option>
              <option>In Maintenance</option>
            </select>

            <input
              type="text"
              placeholder="Driver"
              value={editingVehicle.driver}
              onChange={(e) =>
                setEditingVehicle({
                  ...editingVehicle,
                  driver: e.target.value,
                })
              }
              className="w-full p-2 mb-3 border rounded"
            />

            <input
              type="text"
              placeholder="Route"
              value={editingVehicle.route}
              onChange={(e) =>
                setEditingVehicle({
                  ...editingVehicle,
                  route: e.target.value,
                })
              }
              className="w-full p-2 mb-3 border rounded"
            />

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setEditingVehicle(null)}
                className="px-4 py-2 text-white bg-gray-400 rounded hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
