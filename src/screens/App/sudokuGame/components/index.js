import {StyleSheet, TouchableOpacity} from 'react-native';
import {height, width, totalSize} from 'react-native-dimension';

import {MediumTitle, Spacer, Wrapper} from '../../../../components';
import Grid from './Grid';
import {colors} from '../../../../constants';

export const SudokuGame = ({
  cellData,
  handleCellPress,
  handleUserSelectedValue,
  selectedValue,
}) => {
  return (
    <Wrapper>
      <Grid cellData={cellData} onPress={handleCellPress} />
      <Spacer height={height(3.3)} />
      <MediumTitle style={styles.userSelectedValues}>
        Seinfeld or The Nanny
      </MediumTitle>
      <Spacer height={height(2)} />
      <Wrapper style={styles.userValues}>
        {['B', 'C', 'D', 'I', 'M', 'N', 'O', 'S', 'T'].map((value, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.userItems,
              selectedValue === value && styles.selected,
            ]}
            onPress={() => handleUserSelectedValue(value)}>
            <MediumTitle style={styles.userSelectedValues}>{value}</MediumTitle>
          </TouchableOpacity>
        ))}
      </Wrapper>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  userValues: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  userSelectedValues: {
    textAlign: 'center',
  },
  userItems: {
    paddingHorizontal: width(0.7),
    borderRadius: totalSize(0.5),
  },
  selected: {
    backgroundColor: colors.appBgColor3,
  },
});
