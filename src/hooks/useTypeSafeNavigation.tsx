import { NavigationProp, useNavigation } from '@react-navigation/native';

import { AppStackNavigatorParamList } from '@/types/routes';

function useTypeSafeNavigation() {
  const navigation =
    useNavigation<NavigationProp<AppStackNavigatorParamList>>();

  return navigation;
}

export default useTypeSafeNavigation;
