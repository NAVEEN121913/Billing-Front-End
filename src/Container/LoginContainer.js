/* ------------Developed By Naveen Kumar----------------- */
/* ------------Login Container ----------------- */

import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import LoginComponent from '../Component/LoginComponent';
import {loginSuccess, requestLogin} from '../Redux/User/Action';
import {LoginValidator} from '../Validation/LoginValidation';

const LoginContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onLogin = async values => {
    console.log('On Login', values);
    const payload = {
      email: values.email,
      password: values.password,
    };
    dispatch(requestLogin(payload));
    console.log('container>>>>>', response);
  };
  return (
    <Formik
      validationSchema={LoginValidator}
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={values => (
        onLogin(values), navigation.navigate('ProductDetails')
      )}>
      {({handleSubmit, setFieldValue, values, touched, errors}) => (
        <LoginComponent
          handleSubmit={handleSubmit}
          setFieldValue={setFieldValue}
          values={values}
          touched={touched}
          errors={errors}
        />
      )}
    </Formik>
  );
};
export default LoginContainer;
