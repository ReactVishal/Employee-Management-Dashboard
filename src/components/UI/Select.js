import React from "react";

export default function Select({ label, value, onChange, options }) {
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <select value={value} onChange={onChange}>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
