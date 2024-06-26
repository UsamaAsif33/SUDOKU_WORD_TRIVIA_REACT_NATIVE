import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';

import {CellSize, BorderWidth} from './GlobalStyle';
import Cell from './Cell';
import {colors} from '../../../../constants';

const stack = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Grid = props => {
  const cells = useRef([]);

  const {cellData = []} = props;

  return (
    <View style={styles.container}>
      {stack.map((item, i) => (
        <View key={'grid' + i} style={styles.grid}>
          {stack.map((item, j) => {
            const x = (i % 3) * 3 + (j % 3);
            const y = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            const index = x + y * 9;
            const number =
              cellData[index] !== undefined ? cellData[index] : null;
            return (
              <Cell
                // ref={ref => (cells.current[index] = ref)}
                key={'cell' + index}
                index={index}
                number={number}
                onPress={props.onPress}
              />
            );
          })}
        </View>
      ))}
    </View>
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
