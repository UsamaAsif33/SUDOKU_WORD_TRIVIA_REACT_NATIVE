import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {RegularText, Wrapper} from '../../../../components';

export const ComponentText = () => {
  return (
    <Wrapper style={styles.textView}>
      <RegularText>
        Please enter your email address to request a password reset
      </RegularText>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  textView: {
    width: width(84.7),
  },
});
