import React, { useState } from 'react';
import { View } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Theme } from '@rneui/base';
import { makeStyles, Text } from '@rneui/themed';

import Button from '@/components/Button';
import { COLORS } from '@/constants/colors';
import { AUTH_ROUTES, AuthStackNavigatorParamList } from '@/types/routes';

const OTP = () => {
  const [otp, setOtp] = useState('');

  const styles = useStyles();
  const navigation =
    useNavigation<NavigationProp<AuthStackNavigatorParamList>>();

  const onSubmit = () => {
    console.log(otp);
    navigation.navigate(AUTH_ROUTES.PROFILE);
    // TODO: Forgot Password API call
  };

  return (
    <View style={styles.container}>
      <Icon
        name="chevron-back-outline"
        size={32}
        color={COLORS.black}
        style={styles.backIcon}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.title}>Enter OTP</Text>
      <Text style={styles.description}>
        Enter the 6-digit OTP that we have sent on your email address to reset
        password.
      </Text>
      <Text style={styles.label}>6-digit OTP</Text>
      <OtpInput
        numberOfDigits={6}
        focusColor={COLORS.primary}
        focusStickBlinkingDuration={500}
        onTextChange={setOtp}
        textInputProps={{
          accessibilityLabel: 'One-Time Password',
        }}
        theme={{
          pinCodeContainerStyle: styles.pinCodeContainer,
          pinCodeTextStyle: styles.pinCodeText,
          focusStickStyle: styles.focusStick,
        }}
      />
      <View style={styles.buttonContainer}>
        <Button
          disabled={otp.length !== 6}
          title="Verify"
          isShadow
          onPress={onSubmit}
        />
      </View>
    </View>
  );
};

export default OTP;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing.lg,
    paddingTop: verticalScale(30),
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: '500',
    color: theme.colors.foreground,
  },
  description: {
    fontSize: moderateScale(16),
    fontWeight: '400',
    color: theme.colors.grey2,
    marginTop: verticalScale(10),
    marginBottom: verticalScale(24),
  },
  pinCodeContainer: {
    borderWidth: 0.2,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.white,
    borderRadius: moderateScale(4),
    height: moderateScale(50),
    width: moderateScale(50),
  },
  pinCodeText: {
    fontSize: moderateScale(22),
    color: theme.colors.primary,
  },
  focusStick: {
    backgroundColor: theme.colors.primary,
  },
  buttonContainer: {
    marginTop: verticalScale(30),
  },
  label: {
    fontSize: moderateScale(16),
    fontWeight: '400',
    color: theme.colors.grey3,
    marginVertical: verticalScale(16),
  },
  backIcon: {
    marginBottom: verticalScale(10),
    marginLeft: moderateScale(-8),
  },
}));
