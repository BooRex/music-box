import React from 'react';
import * as PropTypes from 'prop-types';
import Joi from '@hapi/joi';
import { connect } from 'react-redux';
import useForm from '../../../hooks/useForm';
import TextInput from '../../common/TextInput';
import Button from '../../common/Button';
import { login } from '../../../store/auth/actions';

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

const formStyles = {
  width: '50%',
  height: '50%',
  left: '50%',
  marginLeft: '-25%',
  marginTop: '15%',
  position: 'absolute',
  background: '#333',
  border: '1px solid #222',
  borderRadius: '15px',
  textAlign: 'center'
};

const formHeader = {
  color: '#fff',
  marginTop: '30px',
  fontWeight: 'bold'
};

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
    <form style={formStyles} onSubmit={onSubmitForm}>
      <div style={formHeader}>Sign in</div>
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
    </form>
  );
};

LoginPage.propTypes = {
  auth: PropTypes.object,
  login: PropTypes.func
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
