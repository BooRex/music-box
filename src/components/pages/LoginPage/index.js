import React from 'react';
import Joi from '@hapi/joi';
import { connect } from 'react-redux';
import useForm from '../../../hooks/useForm';
import TextInput from '../../common/TextInput';
import Button from '../../common/Button';
import { login } from '../../../store/auth/actions';
import styled from 'styled-components';

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

const StyledLoginPage = styled.div`
height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const StyledForm = styled.form`
  width: 400px;
  background: #333;
  border: 1px solid #222;
  border-radius: 15px;
  text-align: center;
`;

const StyledFormHeader = styled.div`
  color: #fff;
  margin-top: 30px;
  font-weight: bold;
`;

const LoginPage = ({login}) => {
  const [form, onChangeField, validateForm, clearForm] = useForm(INIT_FORM);

  const onSubmitForm = e => {
    e.preventDefault();

    if (validateForm()) {
      login(form.fields);
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
        <Button text='Sign In'/>
      </StyledForm>
    </StyledLoginPage>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
