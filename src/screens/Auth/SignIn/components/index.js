import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {RegularText} from '../../../../components';
import {colors} from '../../../../constants';

export const ForgetPassword = ({onPress}) => {
  return (
    <RegularText onPress={onPress} style={styles.forget}>
      Forgot Password?
    </RegularText>
  );
};

export const Footer = ({onPress}) => {
  return (
    <RegularText style={styles.mainText}>
      Don’t have an account?{'  '}
      <RegularText onPress={onPress} style={styles.textColor}>Sign up</RegularText>
    </RegularText>
  );
};

const styles = StyleSheet.create({
  forget: {
    textAlign: 'right',
    marginRight: width(2.5),
  },
  mainText: {
    textAlign: 'center',
  },
  textColor: {
    color: colors.appTextColor3,
  },
});
