import { createNavigationContainerRef } from '@react-navigation/native';

type RootStackParamList = {
  [key: string]: object | undefined;
};

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate(name: string, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function navigateGoBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}
