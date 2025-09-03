import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Theme } from '@rneui/base';
import { makeStyles, Text } from '@rneui/themed';

import Button from '@/components/Button';
import { COLORS } from '@/constants/colors';
import { INTERESTS, PRIVACY_SETTINGS } from '@/constants/onboarding';
import { AuthStackNavigatorParamList } from '@/types/routes';

const Privacy = () => {
  const [interests, setInterests] = useState<string[]>([]);
  const [privacySettings, setPrivacySettings] = useState<string>('');

  const styles = useStyles();
  const navigation =
    useNavigation<NavigationProp<AuthStackNavigatorParamList>>();

  const handleInterests = (interest: string) => {
    setInterests(prev => [...prev, interest]);
  };

  const handlePrivacySettings = (privacy: string) => {
    setPrivacySettings(privacy);
  };

  const onSubmit = () => {
    // TODO: Privacy API call
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Icon
          name="chevron-back-outline"
          size={32}
          color={COLORS.black}
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.step}>Step 2</Text>
      </View>
      <Text style={styles.title}>Set up your profile</Text>
      <Text style={styles.description}>
        Tell us a bit about yourself to personalize your experience
      </Text>
      <Text style={styles.subTitle}>Your Interests</Text>
      <View style={styles.interestsContainer}>
        {INTERESTS.map(interest => (
          <TouchableOpacity
            key={interest.value}
            style={[
              styles.interestContainer,
              interests.includes(interest.value) &&
                styles.selectedInterestContainer,
            ]}
            onPress={() => handleInterests(interest.value)}>
            <Text
              key={interest.value}
              style={[
                styles.interestText,
                interests.includes(interest.value) &&
                  styles.selectedInterestText,
              ]}>
              {interest.label}
            </Text>
            {interests.includes(interest.value) ? (
              <Icon name="close-outline" size={18} color={COLORS.black} />
            ) : (
              <Icon name="add-outline" size={18} color={COLORS.black} />
            )}
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.subTitle}>Privacy Settings</Text>
      <View style={styles.privacySettingsContainer}>
        {PRIVACY_SETTINGS.map(privacy => (
          <TouchableOpacity
            key={privacy.value}
            style={[
              styles.privacySettingContainer,
              privacySettings === privacy.value &&
                styles.selectedPrivacySettingContainer,
            ]}
            onPress={() => handlePrivacySettings(privacy.value)}>
            <View style={styles.radioButton}>
              {privacySettings === privacy.value && (
                <View style={styles.radioButtonInner} />
              )}
            </View>
            <View style={styles.privacySettingContent}>
              <Text style={styles.privacySettingText}>{privacy.label}</Text>
              <Text style={styles.privacySettingDescription}>
                {privacy.description}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Continue" onPress={onSubmit} />
      </View>
      <View style={styles.privacyPolicyContainer}>
        <Text style={styles.privacyPolicy}>
          By continuing, you agree to our{' '}
          <Text style={styles.privacyPolicyLink}>Privacy Policy</Text> and{' '}
          <Text style={styles.privacyPolicyLink}>Terms of Service</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Privacy;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing.lg,
    paddingTop: verticalScale(10),
  },
  contentContainer: {
    paddingBottom: verticalScale(40),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: verticalScale(10),
  },
  step: {
    fontSize: moderateScale(16),
    fontWeight: '500',
    color: theme.colors.grey2,
  },
  backIcon: {
    marginLeft: moderateScale(-8),
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
  subTitle: {
    fontSize: moderateScale(16),
    fontWeight: '500',
    color: theme.colors.grey2,
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: verticalScale(10),
    marginTop: verticalScale(14),
    marginBottom: verticalScale(20),
  },
  interestContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(4),
    justifyContent: 'center',
    paddingHorizontal: moderateScale(10),
    paddingVertical: verticalScale(5),
    borderRadius: moderateScale(50),
    backgroundColor: `${theme.colors.primary}40`,
  },
  selectedInterestContainer: {
    backgroundColor: theme.colors.primary,
  },
  interestText: {
    color: theme.colors.black,
    fontSize: moderateScale(16),
    fontWeight: '400',
  },
  selectedInterestText: {
    color: theme.colors.white,
  },
  privacySettingsContainer: {
    gap: verticalScale(10),
    marginTop: verticalScale(14),
    marginBottom: verticalScale(20),
  },
  privacySettingContainer: {
    flexDirection: 'row',
    gap: verticalScale(10),
    padding: moderateScale(16),
    borderRadius: moderateScale(16),
    borderWidth: 1,
    borderColor: theme.colors.grey3,
  },
  selectedPrivacySettingContainer: {
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
  privacySettingText: {
    color: theme.colors.black,
    fontSize: moderateScale(16),
    fontWeight: '400',
  },
  privacySettingDescription: {
    color: theme.colors.grey2,
    fontSize: moderateScale(14),
    fontWeight: '400',
  },
  privacySettingContent: {
    flexDirection: 'column',
    gap: verticalScale(4),
  },
  radioButton: {
    width: moderateScale(20),
    height: moderateScale(20),
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.grey3,
  },
  radioButtonInner: {
    width: moderateScale(10),
    height: moderateScale(10),
    borderRadius: moderateScale(5),
    backgroundColor: theme.colors.primary,
  },
  buttonContainer: {
    marginTop: verticalScale(10),
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
