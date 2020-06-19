import { useState } from 'react';
import Joi from '@hapi/joi';

export const useForm = initForm => {
  const [form, setForm] = useState(initForm);

  const onChangeField = e => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({
      ...form,
      fields: {
        ...form.fields,
        [name]: value
      }
    });
  };

  const validateForm = () => {
    let errorFields = [...form.errorFields];

    Object.entries(form.fields).forEach(([name, value]) => {
      Joi.validate({[name]: value}, {[name]: form.rules[name]}, error => {
        errorFields = error
          ? [...new Set([...errorFields, name])]
          : errorFields.filter(fieldName => fieldName !== name);
      });
    });

    setForm({...form, errorFields});

    return !errorFields.length;
  };

  const clearForm = () => setForm(initForm);

  return [form, onChangeField, validateForm, clearForm];
};
