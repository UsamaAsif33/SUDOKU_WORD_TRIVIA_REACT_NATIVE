import React, {useState, useEffect} from 'react';
import {StyleSheet, Animated, Platform, TouchableOpacity} from 'react-native';

import {CellSize} from './GlobalStyle';
import {colors} from '../../../../constants';

const Cell = props => {
  const [color, setColor] = useState(props.color);

  useEffect(() => {
    setColor(props.color);
  }, [props.color]);

  const onPress = e => {
    props.onPress && props.onPress(props.index, color);
  };

  const filled = color !== null;
  const initalColor = filled ? color : colors.white;

  return (
    <Animated.View style={[styles.cell, {backgroundColor: initalColor}]}>
      <TouchableOpacity onPress={onPress} style={styles.handle} />
    </Animated.View>
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
});

export default Cell;
