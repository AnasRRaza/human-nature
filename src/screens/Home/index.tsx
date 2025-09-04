import React, { useMemo, useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import { makeStyles, Text } from '@rneui/themed';

import Button from '@/components/Button';
import { COLORS } from '@/constants/colors';

const Home = () => {
  const [selectedAction, setSelectedAction] = useState<'audio' | 'video'>(
    'audio',
  );
  const styles = useStyles();

  const handleSelectAction = (action: 'audio' | 'video') => {
    setSelectedAction(action);
  };

  // Memoized computed values for better performance and reusability
  const isAudioSelected = useMemo(
    () => selectedAction === 'audio',
    [selectedAction],
  );

  const isVideoSelected = useMemo(
    () => selectedAction === 'video',
    [selectedAction],
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.greetingText}>Hello, Anas!</Text>
        <View style={styles.iconContainer}>
          <Icon name="notifications-outline" size={24} />
          <Icon name="person-outline" size={24} />
        </View>
      </View>
      <Text style={styles.question}>What does love feel like?</Text>
      <View style={styles.contentContainer2}>
        <TouchableOpacity style={styles.micContainer}>
          <Icon name="mic-outline" size={34} color={COLORS.white} />
        </TouchableOpacity>
        <Text style={styles.micText}>Tap to record your response</Text>
        <View style={styles.actionContainer}>
          <TouchableOpacity
            style={[
              styles.itemContainer,
              isAudioSelected && styles.activeItemContainer,
            ]}
            onPress={() => handleSelectAction('audio')}>
            <Icon
              name="mic-outline"
              size={24}
              color={isAudioSelected ? COLORS.white : COLORS.black}
            />
            <Text
              style={[
                styles.itemText,
                isAudioSelected && styles.activeItemText,
              ]}>
              Audio
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.itemContainer,
              isVideoSelected && styles.activeItemContainer,
            ]}
            onPress={() => handleSelectAction('video')}>
            <Icon
              name="videocam-outline"
              size={24}
              color={isVideoSelected ? COLORS.white : COLORS.black}
            />
            <Text
              style={[
                styles.itemText,
                isVideoSelected && styles.activeItemText,
              ]}>
              Video
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Browse Question" containerStyle={styles.button} />
        <Button
          title="My Question"
          type="outline"
          containerStyle={styles.button}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.lg,
    paddingBottom: moderateScale(40),
  },
  contentContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.lg,
  },
  greetingText: {
    fontSize: moderateScale(24),
    fontWeight: '500',
    color: theme.colors.black,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
  question: {
    fontSize: moderateScale(30),
    textAlign: 'center',
    color: theme.colors.black,
    marginHorizontal: moderateScale(20),
    marginTop: verticalScale(40),
  },
  contentContainer2: {
    marginTop: 'auto',
  },
  micContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(20),
    backgroundColor: COLORS.black,
    width: moderateScale(75),
    height: moderateScale(75),
    alignSelf: 'center',
    borderRadius: moderateScale(100),
  },
  micText: {
    fontSize: moderateScale(16),
    fontWeight: '400',
    color: theme.colors.grey3,
    textAlign: 'center',
    marginTop: verticalScale(10),
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: moderateScale(10),
    marginTop: verticalScale(40),
  },
  itemContainer: {
    padding: moderateScale(16),
    borderRadius: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(4),
  },
  activeItemContainer: {
    backgroundColor: theme.colors.primary,
  },
  itemText: {
    fontSize: moderateScale(16),
    fontWeight: '400',
    color: theme.colors.black,
  },
  activeItemText: {
    color: theme.colors.white,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: moderateScale(10),
    marginTop: 'auto',
  },
  button: {
    width: '48%',
  },
}));
