import { useState } from 'react';
import {
  validateEmail,
  validateName,
  validatePasswords,
  validateUserName,
} from '../utils/validation';

function useFormValidation({
  completeName,
  userName,
  userEmail,
  password,
  repeatedPassword,
}) {
  const [errors, setErrors] = useState({});

  function validateForm() {
    const newErrors = {};

    const nameError = validateName(completeName);
    if (nameError) newErrors.completeName = nameError;

    const userNameError = validateUserName(userName);
    if (userNameError) newErrors.userName = userNameError;

    const emailError = validateEmail(userEmail);
    if (emailError) newErrors.userEmail = emailError;

    const passwordError = validatePasswords(password, repeatedPassword);
    if (passwordError) newErrors.passwordError = passwordError;

    setErrors(newErrors);
    return newErrors;
  }

  return { errors, validateForm };
}

export default useFormValidation;
