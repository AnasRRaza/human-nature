import React from 'react';
import { ScrollView } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { Theme } from '@rneui/base';
import { makeStyles, Text } from '@rneui/themed';

import AuthTab from './components/Tabbar';

const SignIn = () => {
  const styles = useStyles();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.description}>Sign in to your account</Text>
      <AuthTab />
    </ScrollView>
  );
};

export default SignIn;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.lg,
  },
  contentContainer: {
    flexGrow: 1,
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
  },
}));
