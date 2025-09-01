import { Dimensions, Platform } from 'react-native';
const { height } = Dimensions.get('window');

export const COMMON_ERROR = 'Something went wrong!';

export const IS_IPHONE_SE =
  Platform.OS === 'ios' && (height === 568 || height === 667);
