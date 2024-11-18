export const validateForm = (formData) => {
  const errors = {};

  // Name validation
  if (!/^[a-zA-Z\s]{3,30}$/.test(formData.name)) {
    errors.name =
      "Name must be 3-30 letters long and cannot contain numbers or special characters.";
  }

  // Age validation
  if (!/^(?:[1-9]\d?|100)$/.test(formData.age)) {
    errors.age = "Age must be a number between 1 and 100.";
  }

  // Email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Please enter a valid email address.";
  }

  // Phone number validation
  if (!/^\d{10}$/.test(formData.phoneNumber)) {
    errors.phoneNumber =
      "Phone number must be exactly 10 digits and cannot contain letters.";
  }

  // Password validation
  if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(
      formData.password
    )
  ) {
    errors.password =
      "Password must be 8-20 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.";
  }

  return errors; // Return errors object
};
