import React from "react";
import { formatDate } from "../../utils/formatters";

export default function EmployeeTable({ employees, onEdit, onDelete, onToggleActive }) {
  if (!employees.length) return <div className="empty">No employees found</div>;

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th><th>Profile</th><th>Name</th><th>Gender</th><th>DOB</th><th>State</th><th>Status</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(e => (
          <tr key={e.id}>
            <td>{e.id}</td>
            <td><img src={e.avatarUrl || "/placeholder.png"} alt={e.fullName} className="avatar" /></td>
            <td>{e.fullName}</td>
            <td>{e.gender}</td>
            <td>{formatDate(e.dob)}</td>
            <td>{e.state}</td>
            <td>
              <input type="checkbox" checked={e.active} onChange={() => onToggleActive(e.id)} />
              {e.active ? "Active" : "Inactive"}
            </td>
            <td>
              <button onClick={() => onEdit(e)}>Edit</button>
              <button onClick={() => window.confirm("Delete this employee?") && onDelete(e.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
