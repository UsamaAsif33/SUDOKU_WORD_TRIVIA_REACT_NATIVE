import React from 'react';
import {StyleSheet} from 'react-native';

import {CellSize, BorderWidth} from './GlobalStyle';
import Cell from './Cell';
import {colors} from '../../../../constants';
import {Wrapper} from '../../../../components';

const stack = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Grid = ({cellData, onPress}) => {
  return (
    <Wrapper style={styles.container}>
      {stack.map((item, i) => (
        <Wrapper
          animation={'bounceInDown'}
          delay={500}
          duration={1000}
          key={'grid' + i}
          style={styles.grid}>
          {stack.map((item, j) => {
            const x = (i % 3) * 3 + (j % 3);
            const y = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            const index = x + y * 9;
            const color =
              cellData[index] !== undefined ? cellData[index] : null;
            return (
              <Cell
                key={'cell' + index}
                index={index}
                color={color}
                onPress={() => onPress(index, color)}
              />
            );
          })}
        </Wrapper>
      ))}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CellSize * 9 + BorderWidth * 6,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: colors.appBgColor2,
    alignSelf: 'center',
  },
  grid: {
    margin: BorderWidth,
    width: CellSize * 3,
    height: CellSize * 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default React.memo(Grid, (prevProps, nextProps) => {
  return prevProps.onPress === nextProps.onPress;
});
