import {useState, useEffect} from 'react';

export const useForm = (initialValues, validate, onSuccess) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  const handleChange = (it, name) => {
    setValues({
      ...values,
      [name]: it
    });
    setErrors({
      ...errors,
      [name]: null
    });
  };

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        setSubmitting(false);
        onSuccess(values);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors]);

  const handleBlur = () => {
    setErrors(validate(values));
  };

  const handleSubmit = () => {
    setErrors(validate(values));
    setSubmitting(true);
  };

  return {values, handleChange, handleSubmit, errors, handleBlur, isSubmitting};
};

export const validateLogin = values => {
  const errors = {};

  if (!values.bank) {
    errors.bank = 'Required bank';
  }

  if (!values.email) {
    errors.email = 'Required email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required password';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  return errors;
};
