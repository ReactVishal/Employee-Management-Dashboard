import React from "react";

export default function Toggle({ checked, onChange, label }) {
  return (
    <label className="toggle">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>{label || (checked ? "Active" : "Inactive")}</span>
    </label>
  );
}
