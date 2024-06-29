import React, {useState, useEffect, useRef} from 'react';
import {
  LayoutAnimation,
  StyleSheet,
  Animated,
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import {CellSize, BorderWidth} from './GlobalStyle';
import {colors} from '../../../../constants';
import {MediumTitle, Wrapper} from '../../../../components';

const Cell = props => {
  const [number, setNumber] = useState(props.number);
  // const [hints, setHints] = useState([]);
  const [editing, setEditing] = useState(false);
  // const [highlight, setHighlight] = useState(false);
  const [fixed, setFixed] = useState(false);
  // const [toggle, setToggle] = useState(false);
  // const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setNumber(props.number);
  }, [props.number]);

  // const handleSetHighlight = highlight => {
  //   setHighlight(highlight);
  // };

  // const handleSetNumber = (number, fixed) => {
  //   if (!fixed) LayoutAnimation.easeInEaseOut();
  //   setNumber(number);
  //   setFixed(fixed);
  //   setEditing(false);
  // };

  // const handleSetHintNumber = number => {
  //   let updatedHints = [...hints];
  //   if (updatedHints.length === 6) updatedHints.shift();
  //   if (updatedHints.includes(number)) {
  //     updatedHints = updatedHints.filter(x => x !== number);
  //   } else {
  //     updatedHints.push(number);
  //   }
  //   setHints(updatedHints);
  //   setEditing(true);
  // };

  // const reset = () => {
  //   setNumber(props.number);
  //   setHints([]);
  //   setEditing(false);
  //   setHighlight(false);
  //   setFixed(false);
  //   setToggle(false);
  //   anim.setValue(0);
  // };

  // const animate = () => {
  //   if (toggle) return;
  //   setToggle(true);
  //   anim.setValue(0);
  //   Animated.timing(anim, {
  //     toValue: 1,
  //     duration: 1000,
  //     useNativeDriver: true,
  //   }).start(() => {
  //     setToggle(false);
  //   });
  // };

  const onPress = e => {
    props.onPress && props.onPress(props.index, number, fixed);
  };

  // const rotate = anim.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ['0deg', '360deg'],
  // });

  // const scale = anim.interpolate({
  //   inputRange: [0, 0.1, 0.9, 1],
  //   outputRange: [1, 1.1, 1.1, 1],
  // });

  // const transform = [{rotate}, {scale}];
  // const zIndex = toggle ? 100 : 0;
  // const filled = typeof number === 'string';
  // const text = filled ? number : number !== null ? number + 1 : '';
  const filled = number !== null;
  const text = filled ? number : '';
  // const hint = hints.map(x => x + 1).join('');

  return (
    <Wrapper
      animation={'bounceInDown'}
      delay={1000}
      duration={1000}
      style={[
        styles.cell,
        filled && styles.filledCell,
        // fixed && styles.fixedCell,
        // highlight && styles.highlightCell,
        // {transform, zIndex},
      ]}>
      {editing ? (
        <Text style={[styles.text, styles.editingText]}>{'hint'}</Text>
      ) : (
        <MediumTitle
          style={[
            styles.text,
            // fixed && styles.fixedText,
            // highlight && styles.highlightText,
          ]}>
          {text}
        </MediumTitle>
      )}
      <TouchableOpacity
        activeOpacity={fixed ? 1 : 0.8}
        onPress={onPress}
        style={styles.handle}
      />
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
    backgroundColor: colors.appBgColor17,
    borderColor: colors.appBgColor2,
    borderWidth: 1,
    // borderRadius: BorderWidth,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  text: {
    color: colors.appTextColor2,
    fontSize: (CellSize * 2) / 3,
    // fontFamily: 'HelveticaNeue',
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
  filledCell: {
    backgroundColor: colors.white,
  },
  // fixedCell: {
  //   backgroundColor: 'khaki',
  // },
  // fixedText: {
  //   color: '#666',
  // },
  // highlightCell: {
  //   backgroundColor: 'peru',
  // },
  // highlightText: {
  //   color: '#fff',
  // },
});

export default Cell;
