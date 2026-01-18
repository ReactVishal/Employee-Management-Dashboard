import React from "react";
import { Navigate } from "react-router-dom";
export default function PrivateRoute({ children }) {
  const isAuthed = !!localStorage.getItem("auth_token");
  return isAuthed ? children : <Navigate to="/login" replace />;
}
