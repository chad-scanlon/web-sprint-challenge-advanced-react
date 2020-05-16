import { useLocalStorage } from "./useLocalStorage";
import { useState } from "react";

// write your custom hook here to control your checkout form
export const useForm = (initialState, key) => {
  const [values, setValues] = useLocalStorage(initialState, key);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const clearForm = () => {
    setValues(initialState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setShowSuccessMessage(true);
    clearForm();
  };

  return [values, handleChanges, clearForm, handleSubmit, showSuccessMessage];
};
