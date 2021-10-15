import { useState } from "react";

export const useForm = (initState) => {
  const [formValues, setFormValues] = useState(initState);

  const handleInput = ({ target }) => {
    setFormValues({ ...formValues, [target.name]: target.value });
  };

  const resetForm = () => setFormValues({ ...initState });

  return {
    formValues,
    ...formValues,
    handleInput,
    resetForm,
  };
};
