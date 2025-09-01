/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { makeStyles } from '@rneui/themed';

import Header from '@/components/Header';
import BottomTabNavigator from '@/navigation/BottomTabNavigator';
import Profile from '@/screens/Profile';
import { APP_ROUTES, AppStackNavigatorParamList } from '@/types/routes';

const Drawer = createDrawerNavigator<AppStackNavigatorParamList>();

const AppNavigator = () => {
  const styles = useStyles();

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <Drawer.Navigator
        screenOptions={{
          header: props => (
            <Header title={props?.options?.title || ''} isBack />
          ),
          drawerType: 'front',
        }}>
        <Drawer.Screen
          options={{
            headerShown: false,
            title: 'Dashboard',
          }}
          name={APP_ROUTES.HOME}
          component={BottomTabNavigator}
        />
        <Drawer.Screen
          options={{
            title: 'Profile',
          }}
          name={APP_ROUTES.PROFILE}
          component={Profile}
        />
      </Drawer.Navigator>
    </SafeAreaView>
  );
};

const useStyles = makeStyles(theme => ({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
}));

export default AppNavigator;
