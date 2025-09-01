import React from 'react';
import { useTranslation } from 'react-i18next';
import { Switch, View } from 'react-native';
import { makeStyles, Text } from '@rneui/themed';

import i18next from '@/localization/i18n';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
];

export default function LanguageSwitch() {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;
  const isFrench = currentLanguage === 'fr';
  const styles = useStyles();

  const toggleLanguage = () => {
    const newLang = isFrench ? 'en' : 'fr';
    i18next.changeLanguage(newLang);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{t('Select Language')}</Text>
      <View style={styles.switchRow}>
        <Text style={styles.langLabel}>{LANGUAGES[0].label}</Text>
        <Switch value={isFrench} onValueChange={toggleLanguage} />
        <Text style={styles.langLabel}>{LANGUAGES[1].label}</Text>
      </View>
    </View>
  );
}

const useStyles = makeStyles(theme => ({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: theme.colors.foreground,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  langLabel: {
    fontSize: 15,
    marginHorizontal: 8,
    color: theme.colors.foreground,
  },
}));
