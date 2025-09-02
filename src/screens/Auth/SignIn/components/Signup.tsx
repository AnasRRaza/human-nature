import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { View } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import { yupResolver } from '@hookform/resolvers/yup';
import { Theme } from '@rneui/base';
import { makeStyles, Text } from '@rneui/themed';
import * as Yup from 'yup';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { SIGNUP_FORM_FIELDS } from '@/constants/auth';
import { COLORS } from '@/constants/colors';
import { signupValidationSchema } from '@/utils/validationSchema';

type TSignupForm = Yup.InferType<typeof signupValidationSchema>;

const Signup = () => {
  const styles = useStyles();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignupForm>({
    mode: 'onSubmit',
    resolver: yupResolver(signupValidationSchema),
    defaultValues: {
      email: '',
      password: '',
      confirm_password: '',
    },
  });

  const onSubmit: SubmitHandler<TSignupForm> = data => {
    console.log(data);
    // TODO: Signup API call
  };

  return (
    <View>
      {SIGNUP_FORM_FIELDS.map(_field => (
        <Controller
          key={_field.name}
          control={control}
          name={_field.name as keyof TSignupForm}
          render={({ field }) => (
            <Input
              key={field.name}
              label={_field.label}
              placeholder={_field.placeholder}
              secureTextEntry={_field.secureTextEntry}
              onChangeText={field.onChange}
              errorMessage={errors?.[field.name]?.message}
              autoCapitalize="none"
              leftIcon={
                <Icon name={_field.leftIcon} size={22} color={COLORS.primary} />
              }
              {...field}
            />
          )}
        />
      ))}
      <View style={styles.buttonContainer}>
        <Button title="Signup" onPress={handleSubmit(onSubmit)} />
        <Text style={styles.orText}>Or continue with</Text>
        <Button
          type="outline"
          title="Continue with Google"
          icon={
            <Icon
              name="logo-google"
              size={22}
              color={COLORS.primary}
              style={styles.icon}
            />
          }
        />
        <Button
          buttonStyle={styles.appleButton}
          titleStyle={styles.appleButtonTitle}
          type="outline"
          title="Continue with Apple"
          icon={
            <Icon
              name="logo-apple"
              size={22}
              color={COLORS.white}
              style={styles.icon}
            />
          }
        />
        <Button type="outline" title="Continue Anonymously" />
      </View>
      <View style={styles.privacyPolicyContainer}>
        <Text style={styles.privacyPolicy}>
          By continuing, you agree to our{' '}
          <Text style={styles.privacyPolicyLink}>Privacy Policy</Text> and{' '}
          <Text style={styles.privacyPolicyLink}>Terms of Service</Text>
        </Text>
      </View>
    </View>
  );
};

export default Signup;

const useStyles = makeStyles((theme: Theme) => ({
  orText: {
    textAlign: 'center',
    fontSize: moderateScale(16),
    fontWeight: '400',
    color: theme.colors.grey3,
  },
  buttonContainer: {
    gap: verticalScale(14),
  },
  appleButton: {
    backgroundColor: theme.colors.black,
    borderColor: theme.colors.black,
  },
  appleButtonTitle: {
    color: theme.colors.white,
  },
  icon: {
    marginRight: moderateScale(10),
  },
  privacyPolicyContainer: {
    alignItems: 'center',
    marginTop: verticalScale(20),
  },
  privacyPolicy: {
    textAlign: 'center',
    fontSize: moderateScale(16),
    fontWeight: '400',
    color: theme.colors.grey1,
  },
  privacyPolicyLink: {
    color: theme.colors.primary,
  },
}));
