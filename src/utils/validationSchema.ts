import * as Yup from 'yup';

export const signupValidationSchema = Yup.object({
  username: Yup.string()
    .required('Username is required')
    .matches(/^\S*$/, 'No white spaces are allowed'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
    .matches(/^\S*$/, 'No white spaces are allowed'),
  birthday: Yup.date()
    .required('Birthday is required')
    .test('age', 'You must be at least 17 years old', value => {
      const cutoff = new Date();
      cutoff.setFullYear(cutoff.getFullYear() - 17);

      return value <= cutoff;
    }),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required')
    .matches(/^\S*$/, 'No white spaces are allowed'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required')
    .matches(/^\S*$/, 'No white spaces are allowed'),
});

export const loginValidationSchema = Yup.object({
  username: Yup.string()
    .required('Email or username is required')
    .matches(/^\S*$/, 'No white spaces are allowed'),
  password: Yup.string()
    .required('Password is required')
    .matches(/^\S*$/, 'No white spaces are allowed'),
  saveLoginInfo: Yup.boolean(),
});
