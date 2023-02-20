import { useState, useEffect } from 'react';

const useForm = (initialState, callback, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (value, fieldName) => {
    setValues({ ...values, [fieldName]: value })
  } 

  const handleSubmit = e => {
    setErrors(validate(values));
    setIsSubmit(true);
  }

  useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmit) {
      callback();
    }
  }, [errors])

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  }
}

export default useForm;