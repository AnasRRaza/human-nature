import React, { useState } from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { SceneMap, TabView } from 'react-native-tab-view';
import { Theme } from '@rneui/base';
import { makeStyles } from '@rneui/themed';

import Login from './Login';
import Signup from './Signup';

const { width } = Dimensions.get('window');

const routes = [
  { key: 'login', title: 'Login' },
  { key: 'signup', title: 'Signup' },
];

const renderScene = SceneMap({
  login: Login,
  signup: Signup,
});

const AuthTab = () => {
  const styles = useStyles();

  const [index, setIndex] = useState(0);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width }}
      renderTabBar={() => (
        <View style={styles.customTabContainer}>
          <TouchableOpacity
            style={[styles.customTab, index === 0 && styles.activeCustomTab]}
            onPress={() => setIndex(0)}>
            <Text
              style={[
                styles.customTabText,
                index === 0 && styles.activeCustomTabText,
              ]}>
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.customTab, index === 1 && styles.activeCustomTab]}
            onPress={() => setIndex(1)}>
            <Text
              style={[
                styles.customTabText,
                index === 1 && styles.activeCustomTabText,
              ]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default AuthTab;

const useStyles = makeStyles((theme: Theme) => ({
  customTabContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: theme.spacing.xs,
    borderColor: theme.colors.primary,
    marginVertical: moderateScale(10),
    borderRadius: theme.spacing.lg,
    marginTop: verticalScale(16),
  },
  customTab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: moderateScale(10),
    borderRadius: theme.spacing.lg,
  },
  activeCustomTab: {
    backgroundColor: theme.colors.primary,
  },
  customTabText: {
    fontSize: moderateScale(16),
    fontWeight: '500',
    color: theme.colors.grey2,
  },
  activeCustomTabText: {
    color: theme.colors.white,
  },
}));
