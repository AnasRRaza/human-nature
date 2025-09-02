import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { SIGNIN_FORM_FIELDS } from '@/constants/auth';
import { COLORS } from '@/constants/colors';
import { loginValidationSchema } from '@/utils/validationSchema';

type TLoginForm = Yup.InferType<typeof loginValidationSchema>;

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginForm>({
    mode: 'onSubmit',
    resolver: yupResolver(loginValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<TLoginForm> = data => {
    console.log(data);
    // TODO: Login API call
  };

  return (
    <View>
      {SIGNIN_FORM_FIELDS.map(_field => (
        <Controller
          key={_field.name}
          control={control}
          name={_field.name as keyof TLoginForm}
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
      <Button title="Login" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default Login;
