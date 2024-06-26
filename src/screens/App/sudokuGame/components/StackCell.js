'use strict';

import React, {useState, useEffect, useRef} from 'react';
import {
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Size, CellSize, BoardWidth, BorderWidth} from './GlobalStyle';

const spring = {
  duration: 300,
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 0.6,
  },
  delete: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.opacity,
  },
};

const Offset = (BoardWidth - CellSize * 9 - BorderWidth * 8) / 2;

const StackCell = props => {
  const leftInitial =
    (BoardWidth / 9) * props.number + (BoardWidth / 9 - CellSize) / 2;
  const topInitial = props.index;

  const [hide, setHide] = useState(false);
  const [left, setLeft] = useState(leftInitial);
  const [top, setTop] = useState(topInitial);

  const moveTo = (index, onMoveFinish) => {
    const x = index % 9;
    const y = Math.floor(index / 9);
    const gap = BorderWidth * 2;
    const newLeft = CellSize * x + gap * (Math.floor(x / 3) + 1) + Offset;
    const newTop =
      -20 - CellSize * (9 - y) - gap * (Math.floor((8 - y) / 3) + 1);
    LayoutAnimation.configureNext(spring);
    setLeft(newLeft);
    setTop(newTop);
    setTimeout(() => {
      onMoveFinish && onMoveFinish();
    }, 300);
  };

  const moveBack = onMoveFinish => {
    LayoutAnimation.configureNext(spring);
    setLeft(leftInitial);
    setTop(topInitial);
    setTimeout(() => {
      onMoveFinish && onMoveFinish();
    }, 300);
  };

  const reset = () => {
    setHide(false);
    setLeft(leftInitial);
    setTop(topInitial);
  };

  const onPress = e => {
    props.onPress && props.onPress(props.number);
  };

  if (hide) return null;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, {top, left}]}>
      <View style={styles.cell}>
        <Text style={styles.text}>{props.number + 1}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: CellSize,
    height: CellSize,
  },
  cell: {
    width: CellSize,
    height: CellSize,
    backgroundColor: 'moccasin',
    borderColor: 'orange',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: BorderWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#666',
    fontSize: (CellSize * 2) / 3,
    fontFamily: 'HelveticaNeue',
  },
});

export default StackCell;
