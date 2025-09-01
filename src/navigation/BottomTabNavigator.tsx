/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Platform } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@rneui/themed';

import Header from '@/components/Header';
import { FONTS } from '@/constants/fonts';
import Home from '@/screens/Home';
import { BOTTOM_TAB_ROUTES, BottomTabParamList } from '@/types/routes';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        header(props) {
          return <Header title={props?.options?.title || ''} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: '#CACACA',
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 90 : 70,
          borderColor: theme.colors.grey3,
          borderTopWidth: 1,
          backgroundColor: theme.colors.background,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: moderateScale(12),
          fontFamily: FONTS.OUTFIT,
          paddingBottom: Platform.OS === 'ios' ? 10 : 5,
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
      }}>
      <Tab.Screen
        name={BOTTOM_TAB_ROUTES.HOME}
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={BOTTOM_TAB_ROUTES.CONTACTS}
        component={Home}
        options={{
          title: 'Contacts',
          tabBarIcon: ({ color, size }) => (
            <Icon name="users" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={BOTTOM_TAB_ROUTES.CALENDAR}
        component={Home}
        options={{
          title: 'Calendar',
          tabBarIcon: ({ color, size }) => (
            <Icon name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={BOTTOM_TAB_ROUTES.PROFILE}
        component={Home}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
