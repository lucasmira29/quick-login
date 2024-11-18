import { useState } from 'react';
import { FormContext } from './FormContext';

function FormProvider({ children }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [completeName, setCompleteName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  return (
    <FormContext.Provider
      value={{
        userName,
        setUserName,
        password,
        setPassword,
        completeName,
        setCompleteName,
        userEmail,
        setUserEmail,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;
