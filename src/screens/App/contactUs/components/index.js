import {StyleSheet} from 'react-native';
import {height, totalSize} from 'react-native-dimension';

import {TextInputBordered, Wrapper} from '../../../../components';

export const DescriptionBox = () => {
  return (
    <Wrapper>
      <TextInputBordered
        containerStyle={styles.descriptionBox}
        placeholder={'How can we help you?'}
      />
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  descriptionBox: {
    height: height(18),
    justifyContent: 'flex-start',
    borderRadius: totalSize(1.2),
  },
});
