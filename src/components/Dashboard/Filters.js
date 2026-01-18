import React from "react";

export default function Filters({ value, onChange }) {
  return (
    <div className="filters">
      <input placeholder="Search by name" value={value.q} onChange={(e) => onChange({ ...value, q: e.target.value })} />
      <select value={value.gender} onChange={(e) => onChange({ ...value, gender: e.target.value })}>
        <option value="">All genders</option>
        <option>Male</option><option>Female</option><option>Other</option>
      </select>
      <select value={value.status} onChange={(e) => onChange({ ...value, status: e.target.value })}>
        <option value="">All statuses</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
  );
}
