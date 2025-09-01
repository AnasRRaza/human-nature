import React from 'react';
import { View } from 'react-native';
import { Button, Icon, useTheme, useThemeMode } from '@rneui/themed';

const ThemeModeSwitch: React.FC = () => {
  const { mode, setMode } = useThemeMode();
  const { theme } = useTheme();
  const isDark = mode === 'dark';

  return (
    <View style={{ alignItems: 'center' }}>
      <Button
        type="outline"
        onPress={() => setMode(isDark ? 'light' : 'dark')}
        icon={
          <Icon
            name={isDark ? 'weather-sunny' : 'weather-night'}
            type="material-community"
            color={theme.colors.primary}
            size={22}
            style={{ marginRight: 8 }}
          />
        }
        title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        accessibilityLabel="Toggle theme mode"
      />
    </View>
  );
};

export default ThemeModeSwitch;
