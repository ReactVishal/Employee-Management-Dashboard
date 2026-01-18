// employeesApi.js
// Example API service using fetch. Works with JSON Server or any REST API.
// If you're using localStorage only, you can skip this file.

const BASE_URL = "http://localhost:4000/employees"; 
// Adjust port if your JSON Server runs on a different one

// Get all employees
export async function getEmployees() {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch employees");
  return res.json();
}

// Get single employee by ID
export async function getEmployee(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error("Failed to fetch employee");
  return res.json();
}

// Add new employee
export async function addEmployee(employee) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
  if (!res.ok) throw new Error("Failed to add employee");
  return res.json();
}

// Update employee
export async function updateEmployee(employee) {
  const res = await fetch(`${BASE_URL}/${employee.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
  if (!res.ok) throw new Error("Failed to update employee");
  return res.json();
}

// Delete employee
export async function deleteEmployee(id) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete employee");
  return res.json();
}
