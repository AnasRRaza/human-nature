import React, { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import {
  Alert,
  PermissionsAndroid,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { launchImageLibrary, MediaType } from 'react-native-image-picker';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import { yupResolver } from '@hookform/resolvers/yup';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Theme } from '@rneui/base';
import { Image, makeStyles, Text } from '@rneui/themed';
import * as Yup from 'yup';

import Button from '@/components/Button';
import Dropdown from '@/components/Dropdown';
import Input from '@/components/Input';
import { COLORS } from '@/constants/colors';
import { PROFILE_FORM_FIELDS } from '@/constants/onboarding';
import { AUTH_ROUTES, AuthStackNavigatorParamList } from '@/types/routes';
import { profileValidationSchema } from '@/utils/validationSchema';

type TProfileForm = Yup.InferType<typeof profileValidationSchema>;

const Profile = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TProfileForm>({
    mode: 'onSubmit',
    resolver: yupResolver(profileValidationSchema),
    defaultValues: {
      fullName: '',
      age: '',
      country: '',
      language: '',
    },
  });
  const styles = useStyles();
  const navigation =
    useNavigation<NavigationProp<AuthStackNavigatorParamList>>();

  const onSubmit: SubmitHandler<TProfileForm> = data => {
    console.log(data);
    // TODO: Profile API call
  };

  const requestGalleryPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES ||
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Gallery Permission',
          message: 'App needs access to your gallery',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }

    return true;
  };

  const handleImagePicker = async () => {
    const granted = await requestGalleryPermission();
    if (!granted) {
      Alert.alert(
        'Permission denied',
        'Please grant permission to access your gallery',
      );
    }

    const result = await launchImageLibrary({
      mediaType: 'photo' as MediaType,
      quality: 0.8,
      includeBase64: true,
      selectionLimit: 1,
      includeExtra: true,
    });

    if (result?.assets && result.assets.length > 0) {
      setProfileImage(result.assets[0].uri || null);
    }
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
        <Text
          style={styles.step}
          onPress={() => navigation.navigate(AUTH_ROUTES.PRIVACY)}>
          Step 1
        </Text>
      </View>
      <Text style={styles.title}>Set up your profile</Text>
      <Text style={styles.description}>
        Tell us a bit about yourself to personalize your experience
      </Text>
      <TouchableOpacity
        style={styles.imagePickerContainer}
        onPress={handleImagePicker}>
        {profileImage ? (
          <Image
            source={{ uri: profileImage }}
            style={styles.imagePickerImage}
            containerStyle={styles.imagePickerContainer}
          />
        ) : (
          <Text style={styles.imagePlaceholderText}>SJ</Text>
        )}
        <Icon
          name="camera-outline"
          size={18}
          color={COLORS.primary}
          style={styles.imagePickerIcon}
        />
      </TouchableOpacity>
      <Text style={styles.imagePickerText}>Upload Profile Image</Text>
      {PROFILE_FORM_FIELDS.map(_field => (
        <Controller
          key={_field.name}
          control={control}
          name={_field.name as keyof TProfileForm}
          render={({ field }) => {
            return _field.isDropdown ? (
              <Dropdown
                data={_field.data}
                label={_field.label}
                placeholder={_field.placeholder}
                labelField="label"
                valueField="value"
                renderLeftIcon={() => (
                  <Icon
                    name={_field.leftIcon}
                    size={22}
                    color={COLORS.primary}
                    style={styles.leftIcon}
                  />
                )}
                errorMessage={errors?.[field.name]?.message}
                {...field}
              />
            ) : (
              <Input
                key={field.name}
                label={_field.label}
                placeholder={_field.placeholder}
                onChangeText={field.onChange}
                errorMessage={errors?.[field.name]?.message}
                autoCapitalize="none"
                leftIcon={
                  <Icon
                    name={_field.leftIcon}
                    size={22}
                    color={COLORS.primary}
                  />
                }
                {...field}
              />
            );
          }}
        />
      ))}
      <View style={styles.buttonContainer}>
        <Button title="Continue" onPress={handleSubmit(onSubmit)} />
      </View>
    </ScrollView>
  );
};

export default Profile;

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
  backIcon: {
    marginLeft: moderateScale(-8),
  },
  imagePickerContainer: {
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: moderateScale(100),
    backgroundColor: `${theme.colors.primary}40`,
    alignSelf: 'center',
    position: 'relative',
  },
  imagePickerImageContainer: {
    zIndex: 1,
  },
  imagePickerImage: {
    width: '100%',
    height: '100%',
  },
  imagePlaceholderText: {
    fontSize: moderateScale(30),
    fontWeight: '600',
    color: theme.colors.primary,
  },
  imagePickerIcon: {
    position: 'absolute',
    bottom: moderateScale(4),
    right: moderateScale(4),
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: moderateScale(100),
    padding: moderateScale(4),
  },
  imagePickerText: {
    fontSize: moderateScale(16),
    fontWeight: '400',
    color: theme.colors.primary,
    marginTop: verticalScale(10),
    textAlign: 'center',
    marginBottom: verticalScale(20),
  },
  buttonContainer: {
    marginTop: verticalScale(10),
  },
  leftIcon: {
    marginRight: moderateScale(10),
  },
}));
