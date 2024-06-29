import {StyleSheet, Platform, TouchableOpacity} from 'react-native';

import {CellSize} from './GlobalStyle';
import {colors} from '../../../../constants';
import {MediumTitle, Wrapper} from '../../../../components';

const Cell = ({color, onPress}) => {
  const filled = color !== null;
  const initalColor = filled ? color : colors.white;
  const wrongColor = color == 'red' ? 'swing' : 'bounceIn';

  return (
    <Wrapper
      animation={filled ? wrongColor : ''}
      delay={1000}
      duration={1000}
      style={[styles.cell, {backgroundColor: initalColor}]}>
      {color == 'red' && <MediumTitle style={styles.textColor}>X</MediumTitle>}
      <TouchableOpacity onPress={onPress} style={styles.handle} />
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  handle: {
    width: CellSize,
    height: CellSize,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  cell: {
    width: CellSize,
    height: CellSize,
    borderColor: colors.appBgColor2,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  text: {
    color: colors.appTextColor2,
    fontSize: (CellSize * 2) / 3,
  },
  editingText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'teal',
    fontSize: (CellSize * 2) / 5,
    marginHorizontal: CellSize / 8,
    ...Platform.select({
      ios: {
        marginTop: CellSize / 12,
        lineHeight: (CellSize * 2) / 5,
      },
      android: {
        lineHeight: Math.floor((CellSize * 2) / 4),
      },
    }),
  },
  textColor: {
    color: colors.white,
  },
});

export default Cell;
