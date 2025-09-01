import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum AUTH_ROUTES {
  SIGNIN = 'signin',
  SIGNUP = 'signup',
}

export enum APP_ROUTES {
  HOME = 'Home',
  SETTINGS = 'Settings',
  PROFILE = 'Profile',
}

export enum BOTTOM_TAB_ROUTES {
  HOME = 'home',
  CONTACTS = 'contacts',
  CALENDAR = 'calendar',
  PROFILE = 'profile',
}

export enum STACKS {
  APP = 'App',
  AUTH = 'Auth',
}

export type AuthStackNavigatorParamList = {
  [AUTH_ROUTES.SIGNIN]: undefined;
  [AUTH_ROUTES.SIGNUP]: undefined;
};

export type AppStackNavigatorParamList = {
  [APP_ROUTES.HOME]: undefined;
  [APP_ROUTES.SETTINGS]: undefined;
  [APP_ROUTES.PROFILE]: undefined;
};

export type BottomTabParamList = {
  [BOTTOM_TAB_ROUTES.HOME]: undefined;
  [BOTTOM_TAB_ROUTES.CONTACTS]: undefined;
  [BOTTOM_TAB_ROUTES.CALENDAR]: undefined;
  [BOTTOM_TAB_ROUTES.PROFILE]: undefined;
};

export type RootStackParamList = {
  [STACKS.APP]: NavigatorScreenParams<AppStackNavigatorParamList>;
  [STACKS.AUTH]: NavigatorScreenParams<AuthStackNavigatorParamList>;
};

// If the stack needs to change, provide this type to useNavigation hook
export type StacksNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  keyof RootStackParamList
>;
