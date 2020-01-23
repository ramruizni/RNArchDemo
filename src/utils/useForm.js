import {useState} from 'react';

export const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);

  const handleChange = event => {
    console.log(event);
    console.log(event.nativeEvent.target.name);
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return [values, handleChange];
};
