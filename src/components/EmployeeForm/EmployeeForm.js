import React, { useState, useEffect } from "react";
import { createEmployee } from "../../utils/employeeModel";
import { validateEmployee } from "../../utils/validators";

const STATES = ["Uttar Pradesh", "Delhi", "Maharashtra", "Karnataka", "Tamil Nadu"];

export default function EmployeeForm({ initial, onCancel, onSave }) {
  const [form, setForm] = useState(initial || createEmployee());
  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState(form.avatarUrl || "");

  useEffect(() => {
    setPreview(form.avatarUrl || "");
  }, [form.avatarUrl]);

  const handleImage = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setForm((prev) => ({ ...prev, avatarUrl: reader.result }));
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validateEmployee(form);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      onSave(form);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h3>{initial ? "Edit Employee" : "Add Employee"}</h3>

      <label>Full Name</label>
      <input
        value={form.fullName}
        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        placeholder="Full Name"
      />
      {errors.fullName && <span className="error">{errors.fullName}</span>}

      <label>Gender</label>
      <select
        value={form.gender}
        onChange={(e) => setForm({ ...form, gender: e.target.value })}
      >
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>

      <label>Date of Birth</label>
      <input
        type="date"
        value={form.dob}
        onChange={(e) => setForm({ ...form, dob: e.target.value })}
      />
      {errors.dob && <span className="error">{errors.dob}</span>}

      <label>State</label>
      <select
        value={form.state}
        onChange={(e) => setForm({ ...form, state: e.target.value })}
      >
        <option value="">Select State</option>
        {STATES.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      {errors.state && <span className="error">{errors.state}</span>}

      <label>Profile Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleImage(e.target.files && e.target.files[0])}
      />
      {preview && <img src={preview} alt="Preview" className="preview" />}

      <label className="toggle">
        <input
          type="checkbox"
          checked={form.active}
          onChange={(e) => setForm({ ...form, active: e.target.checked })}
        />
        <span>{form.active ? "Active" : "Inactive"}</span>
      </label>

      <div className="actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">{initial ? "Save Changes" : "Add Employee"}</button>
      </div>
    </form>
  );
}
