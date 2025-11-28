import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState({
      ...formState,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleReset = () => {
    setFormState(initialState);
  };

const handleSubmit = (e) => {
  setFormState(initialState);
  handleReset();
  console.log(formState);
}

  return {
    formState,
    ...formState,
    handleChange,
    handleReset,
    handleSubmit,
  };
};
