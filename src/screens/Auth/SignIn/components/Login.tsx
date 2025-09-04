import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { ScrollView, View } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import { yupResolver } from '@hookform/resolvers/yup';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Theme } from '@rneui/base';
import { makeStyles, Text } from '@rneui/themed';
import * as Yup from 'yup';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { SIGNIN_FORM_FIELDS } from '@/constants/auth';
import { COLORS } from '@/constants/colors';
import { useLogin } from '@/hooks/useLogin';
import { useToastNotification } from '@/hooks/useToast';
import {
  APP_ROUTES,
  AUTH_ROUTES,
  AuthStackNavigatorParamList,
  STACKS,
  StacksNavigationProp,
} from '@/types/routes';
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

  const styles = useStyles();
  const navigation =
    useNavigation<NavigationProp<AuthStackNavigatorParamList>>();
  const navigationStack = useNavigation<StacksNavigationProp>();
  const { mutate: login, isPending } = useLogin();
  const toast = useToastNotification();

  const onSubmit: SubmitHandler<TLoginForm> = data => {
    login(data, {
      onSuccess: () => {
        toast('Login successful!', 'success');
        navigationStack.navigate(STACKS.APP, {
          screen: APP_ROUTES.HOME,
        });
      },
      onError: () => {
        toast('Invalid email or password', 'error');
      },
    });
  };

  const handleForgotPassword = () =>
    navigation.navigate(AUTH_ROUTES.FORGOT_PASSWORD);

  const handleContinueAnonymously = () =>
    navigation.navigate(AUTH_ROUTES.PROFILE);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
      <View style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPassword} onPress={handleForgotPassword}>
          Forgot Password?
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Sign In"
          onPress={handleSubmit(onSubmit)}
          loading={isPending}
        />
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
        <Button
          type="outline"
          title="Continue Anonymously"
          onPress={handleContinueAnonymously}
        />
      </View>
      <View style={styles.privacyPolicyContainer}>
        <Text style={styles.privacyPolicy}>
          By continuing, you agree to our{' '}
          <Text style={styles.privacyPolicyLink}>Privacy Policy</Text> and{' '}
          <Text style={styles.privacyPolicyLink}>Terms of Service</Text>
        </Text>
      </View>
      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

export default Login;

const useStyles = makeStyles((theme: Theme) => ({
  forgotPasswordContainer: {
    alignItems: 'center',
    marginBottom: verticalScale(20),
  },
  forgotPassword: {
    fontSize: moderateScale(14),
    fontWeight: '400',
    color: theme.colors.primary,
  },
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
