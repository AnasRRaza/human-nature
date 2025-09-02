import React from 'react';
import { Pressable } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Button as RNEButton, ButtonProps, makeStyles } from '@rneui/themed';

interface Props extends ButtonProps {}

const Button: React.FC<Props> = ({ ...props }) => {
  const styles = useStyles(props.type);

  return (
    <Pressable style={styles.container}>
      <RNEButton
        {...props}
        buttonStyle={[styles.button, props.buttonStyle]}
        titleStyle={[styles.buttonTitle, props.titleStyle]}
        disabledStyle={styles.disabledButton}
        disabledTitleStyle={styles.disabledButtonTitle}
      />
    </Pressable>
  );
};

const useStyles = makeStyles((theme, type) => ({
  container: {
    borderRadius: 12,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  button: {
    borderRadius: 12,
    padding: moderateScale(14),
    backgroundColor: type === 'outline' ? 'transparent' : theme.colors.primary,
    borderWidth: type === 'outline' ? 1.5 : 0,
    borderColor: type === 'outline' ? theme.colors.primary : 'transparent',
  },
  buttonTitle: {
    color: type === 'outline' ? theme.colors.grey2 : theme.colors.white,
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
  disabledButton: {
    backgroundColor: `${theme.colors.primary}80`,
  },
  disabledButtonTitle: {
    color: theme.colors.white,
  },
}));

export default Button;
