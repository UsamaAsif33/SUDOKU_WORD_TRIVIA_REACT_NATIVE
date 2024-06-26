'use strict';

import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import StackCell from './StackCell';

const stack = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const Stack = props => {
  const stacks = useRef(stack.map(() => new Array(9)));

  return (
    <View style={styles.container}>
      {stack.map((item, i) =>
        stack.map((item, j) => (
          <StackCell
            ref={ref => (stacks.current[j][i] = ref)}
            key={`${i}-${j}`}
            index={i}
            number={item}
            onPress={props.onPress}
          />
        )),
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default React.memo(Stack, (prevProps, nextProps) => {
  return prevProps.onPress === nextProps.onPress;
});
