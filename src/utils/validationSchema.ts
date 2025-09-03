import * as Yup from 'yup';

export const signupValidationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email address is required')
    .matches(/^\S*$/, 'No white spaces are allowed'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/^\S*$/, 'No white spaces are allowed')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(
      /[!@#$%^&*]/,
      'Password must contain at least one special character',
    ),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required')
    .matches(/^\S*$/, 'No white spaces are allowed'),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email address is required')
    .matches(/^\S*$/, 'No white spaces are allowed'),
  password: Yup.string().required('Password is required'),
});

export const forgotPasswordValidationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email address is required')
    .matches(/^\S*$/, 'No white spaces are allowed'),
});

export const resetPasswordValidationSchema = Yup.object({
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/^\S*$/, 'No white spaces are allowed')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(
      /[!@#$%^&*]/,
      'Password must contain at least one special character',
    ),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required')
    .matches(/^\S*$/, 'No white spaces are allowed'),
});

export const profileValidationSchema = Yup.object({
  fullName: Yup.string().required('Full name is required'),
  age: Yup.string().required('Age is required'),
  country: Yup.string().required('Country is required'),
  language: Yup.string().required('Language is required'),
});
