import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { SIGNUP_FORM_FIELDS } from '@/constants/auth';
import { COLORS } from '@/constants/colors';
import { signupValidationSchema } from '@/utils/validationSchema';

type TSignupForm = Yup.InferType<typeof signupValidationSchema>;

const Signup = () => {
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
      <Button title="Signup" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default Signup;
