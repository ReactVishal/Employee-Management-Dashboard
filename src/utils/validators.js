// validators.js
// Centralized validation functions for Employee form

export const validateEmployee = (employee) => {
    const errors = {};
  
    // Full name required
    if (!employee.fullName || !employee.fullName.trim()) {
      errors.fullName = "Full name is required";
    } else if (employee.fullName.length < 3) {
      errors.fullName = "Full name must be at least 3 characters";
    }
  
    // Date of birth required
    if (!employee.dob) {
      errors.dob = "Date of birth is required";
    } else {
      const dobDate = new Date(employee.dob);
      if (isNaN(dobDate.getTime())) {
        errors.dob = "Invalid date format";
      }
    }
  
    // State required
    if (!employee.state || !employee.state.trim()) {
      errors.state = "State is required";
    }
  
    // Gender validation (optional, but good to check)
    if (!["Male", "Female", "Other"].includes(employee.gender)) {
      errors.gender = "Invalid gender selected";
    }
  
    return errors;
  };
  