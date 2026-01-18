import React, { useEffect, useState } from "react";
import { loadEmployees, saveEmployees } from "../services/storage";
import SummaryCards from "../components/Dashboard/SummaryCards";
import Filters from "../components/Dashboard/Filters";
import EmployeeTable from "../components/Dashboard/EmployeeTable";
import EmployeeForm from "../components/EmployeeForm/EmployeeForm";

export default function DashboardPage() {
  const [employees, setEmployees] = useState([]);
  const [filters, setFilters] = useState({ q: "", gender: "", status: "" });
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => setEmployees(loadEmployees()), []);
  useEffect(() => saveEmployees(employees), [employees]);

  const filtered = employees.filter((e) => {
    const matchesQ = e.fullName.toLowerCase().includes(filters.q.toLowerCase());
    const matchesGender = !filters.gender || e.gender === filters.gender;
    const matchesStatus =
      !filters.status || (filters.status === "active" ? e.active : !e.active);
    return matchesQ && matchesGender && matchesStatus;
  });

  const addEmployee = (emp) => setEmployees([emp, ...employees]);
  const updateEmployee = (emp) =>
    setEmployees(employees.map((e) => (e.id === emp.id ? emp : e)));
  const deleteEmployee = (id) =>
    setEmployees(employees.filter((e) => e.id !== id));
  const toggleActive = (id) =>
    setEmployees(
      employees.map((e) =>
        e.id === id ? { ...e, active: !e.active } : e
      )
    );

  const total = employees.length;
  const activeCount = employees.filter((e) => e.active).length;

  return (
    <div className="container">
      <h1>Employee Dashboard</h1>
      <SummaryCards total={total} activeCount={activeCount} />
      <div className="header-actions">
        <button onClick={() => setShowForm(true)}>Add Employee</button>
        <button onClick={() => window.print()}>Print</button>
        <button
          onClick={() => {
            localStorage.removeItem("auth_token");
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </div>
      <Filters value={filters} onChange={setFilters} />
      <EmployeeTable
        employees={filtered}
        onEdit={(e) => {
          setEditing(e);
          setShowForm(true);
        }}
        onDelete={deleteEmployee}
        onToggleActive={toggleActive}
      />
      {showForm && (
        <EmployeeForm
          initial={editing}
          onCancel={() => {
            setEditing(null);
            setShowForm(false);
          }}
          onSave={(emp) => {
            editing ? updateEmployee(emp) : addEmployee(emp);
            setEditing(null);
            setShowForm(false);
          }}
        />
      )}
    </div>
  );
}

