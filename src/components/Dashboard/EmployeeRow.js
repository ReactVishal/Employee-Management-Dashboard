import React from "react";
import { formatDate } from "../../utils/formatters";

export default function EmployeeRow({ employee, onEdit, onDelete, onToggleActive }) {
  return (
    <tr>
      <td>{employee.id}</td>
      <td>
        <img
          src={employee.avatarUrl || "/placeholder.png"}
          alt={employee.fullName}
          className="avatar"
        />
      </td>
      <td>{employee.fullName}</td>
      <td>{employee.gender}</td>
      <td>{formatDate(employee.dob)}</td>
      <td>{employee.state}</td>
      <td>
        <input
          type="checkbox"
          checked={employee.active}
          onChange={() => onToggleActive(employee.id)}
        />
        {employee.active ? "Active" : "Inactive"}
      </td>
      <td>
        <button onClick={() => onEdit(employee)}>Edit</button>
        <button
          onClick={() =>
            window.confirm("Delete this employee?") && onDelete(employee.id)
          }
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
