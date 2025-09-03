import React from 'react';
import { ScrollView, View } from 'react-native';
import { verticalScale } from 'react-native-size-matters';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { makeStyles, Text } from '@rneui/themed';

import { Logo, Splash } from '@/assets/svgs';
import Button from '@/components/Button';
import { AUTH_ROUTES, AuthStackNavigatorParamList } from '@/types/routes';

const Start = () => {
  const styles = useStyles();

  const navigation =
    useNavigation<NavigationProp<AuthStackNavigatorParamList>>();

  const handleSignIn = () => navigation.navigate(AUTH_ROUTES.SIGNIN);

  const handleContinueAnonymously = () =>
    navigation.navigate(AUTH_ROUTES.PROFILE);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <Logo />
      <Text style={styles.logoText}>Logo</Text>
      <Splash />
      <Text style={styles.humanNatureText}>Human Nature</Text>
      <Text style={styles.descriptionText}>
        Connect with your authentic self and nurture meaningful relationships
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Sign In" onPress={handleSignIn} />
        <Button
          type="outline"
          title="Continue Anonymously"
          onPress={handleContinueAnonymously}
        />
      </View>
    </ScrollView>
  );
};

export default Start;

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
    backgroundColor: theme.colors.background,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: verticalScale(40),
  },
  logoText: {
    fontSize: 24,
    fontWeight: '600',
    color: theme.colors.black,
  },
  humanNatureText: {
    fontSize: 30,
    fontWeight: '500',
    color: theme.colors.black,
    marginTop: verticalScale(20),
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: '400',
    color: theme.colors.grey2,
    textAlign: 'center',
    marginTop: verticalScale(10),
    lineHeight: 26,
  },
  buttonContainer: {
    width: '100%',
    marginTop: verticalScale(40),
    gap: verticalScale(16),
  },
}));
