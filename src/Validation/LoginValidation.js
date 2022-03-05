/* ------------Developed By Naveen Kumar----------------- */
/* ------------Login Validation ----------------- */

import * as yup from 'yup';

export const LoginValidator = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
});
