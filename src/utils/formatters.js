// src/utils/formatters.js

export const formatDate = (dob) => {
    if (!dob) return "";
    return new Date(dob).toLocaleDateString("en-IN"); // Indian date format
  };
  
  export const formatName = (name) => {
    return name.trim().replace(/\s+/g, " ");
  };
  
  