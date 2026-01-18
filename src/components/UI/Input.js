import React from "react";

export default function Input({ label, value, onChange, type = "text", placeholder }) {
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
