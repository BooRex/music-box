import React, { useCallback } from 'react';
import Joi from '@hapi/joi';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { TextInput } from '../../components/TextInput';
import { Button } from '../../components/Button';
import { login } from '../../store/auth/actions';
import { StyledForm, StyledFormHeader, StyledLoginPage } from './styles';

const INIT_FORM = {
  fields: {
    email: '',
    password: ''
  },
  errorFields: [],
  rules: {
    email: Joi.string().email().required(),
    password: Joi.string().min(6).alphanum().required()
  }
};

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [form, onChangeField, validateForm, clearForm] = useForm(INIT_FORM);

  const loginUser = useCallback(fields => {
    dispatch(login(fields));
  }, [dispatch]);

  const onSubmitForm = e => {
    e.preventDefault();

    if (validateForm()) {
      loginUser(form.fields);
      clearForm();
    }
  };

  return (
    <StyledLoginPage>
      <StyledForm onSubmit={onSubmitForm}>
        <StyledFormHeader>Sign in</StyledFormHeader>
        <TextInput
          placeholder='Email'
          name='email'
          type='email'
          value={form.fields.email}
          onChange={onChangeField}
        />
        <TextInput
          placeholder='Password'
          name='password'
          type='password'
          value={form.fields.password}
          onChange={onChangeField}
        />
        <br/>
        <Button>Sign In</Button>
      </StyledForm>
    </StyledLoginPage>
  );
};
