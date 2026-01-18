import React from "react";

export default function SummaryCards({ total, activeCount }) {
  return (
    <div className="summary">
      <div className="card">Total: {total}</div>
      <div className="card">Active: {activeCount}</div>
      <div className="card">Inactive: {total - activeCount}</div>
    </div>
  );
}
