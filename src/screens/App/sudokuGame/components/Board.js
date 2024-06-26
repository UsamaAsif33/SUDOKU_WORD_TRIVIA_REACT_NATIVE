'use strict';

import React, {useState, useEffect, useRef} from 'react';
import {
  InteractionManager,
  LayoutAnimation,
  StyleSheet,
  View,
} from 'react-native';

import {CellSize, BoardWidth, BorderWidth} from './GlobalStyle';

import Grid from './Grid';
import Stack from './Stack';

const stack = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function toXY(index) {
  const x = index % 9;
  const y = Math.floor(index / 9);
  return {x, y};
}

function toZ(index) {
  const {x, y} = toXY(index);
  return Math.floor(x / 3) + Math.floor(y / 3) * 3;
}

export const Board = props => {
  const [index, setIndex] = useState(-1);
  const puzzle = useRef(props.solve || props.puzzle);
  const original = useRef(props.puzzle);
  const cells = useRef([]);
  const stacks = useRef(stack.map(() => new Array(9)));
  const movedStacks = useRef([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [highlightNumber, setHighlightNumber] = useState(null);
  const [highlightIndex, setHighlightIndex] = useState(null);
  const [inited, setInited] = useState(false);
  const [solved, setSolved] = useState(false);
  const editing = useRef(props.editing);

  useEffect(() => {
    initBoard();
  }, []);

  useEffect(() => {
    editing.current = props.editing;
    if (!props.puzzle || original.current === props.puzzle) return;
    setIndex(-1);
    cells.current.forEach(cell => cell.reset());
    movedStacks.current.forEach((moved, number) => {
      for (let i = 0; i < moved; i++) stacks.current[number][8 - i].reset();
    });
    puzzle.current = props.solve || props.puzzle;
    original.current = props.puzzle;
    initBoard();
  }, [props.puzzle, props.solve]);

  const onCellPress = (index, number, fixed) => {
    if (!inited || solved) return;
    if (isNumber(number)) {
      if (isNumber(highlightIndex))
        cells.current[highlightIndex].setHighlight(false);
      if (isNumber(highlightNumber)) setHighlight(highlightNumber, false);
      setHighlight(number, true);
      setHighlightNumber(number);
      setIndex(-1);
      return;
    }
    if (index !== index) {
      LayoutAnimation.easeInEaseOut();
      setIndex(index);
    }

    if (isNumber(highlightIndex))
      cells.current[highlightIndex].setHighlight(false);
    cells.current[index].setHighlight(true);
    setHighlightIndex(index);

    if (isNumber(highlightNumber)) {
      setHighlight(highlightNumber, false);
      setHighlightNumber(null);
    }
  };
  const onStackPress = () => {};
  //   const onStackPress = number => {
  //     if (!inited) return;
  //     if (index === -1) {
  //       if (isNumber(highlightNumber)) {
  //         setHighlight(highlightNumber, false);
  //         if (highlightNumber === number) {
  //           setHighlightNumber(null);
  //           return;
  //         }
  //       }
  //       setHighlight(number, true);
  //       setHighlightNumber(number);
  //       return;
  //     }
  //     if (editing.current) {
  //       cells.current[index].setHintNumber(number);
  //       return;
  //     }
  //     const stack = stacks.current[number][8 - movedStacks.current[number]];
  //     stack.moveTo(index, () => {
  //       const {x, y} = toXY(index);
  //       const z = toZ(index);
  //       let collision = [];
  //       puzzle.current.forEach((item, idx) => {
  //         if (item !== number) return;
  //         const pos = toXY(idx);
  //         if (pos.x === x || pos.y === y || toZ(idx) === z) collision.push(idx);
  //       });
  //       if (collision.length) {
  //         collision.forEach(i => cells.current[i].setHighlight(true));
  //         stack.moveBack(() => {
  //           collision.forEach(i => cells.current[i].setHighlight(false));
  //         });
  //         return;
  //       }
  //       let nextPuzzle = puzzle.current.slice();
  //       nextPuzzle[index] = number;
  //       if (!sudoku.solvepuzzle(nextPuzzle)) {
  //         stack.moveBack(() => {
  //           props.onErrorMove && props.onErrorMove();
  //         });
  //         return;
  //       }
  //       movedStacks.current[number]++;
  //       cells.current[index].setNumber(number);
  //       props.onMove && props.onMove();
  //       stack.setHide(true);
  //       puzzle.current[index] = number;
  //       if (
  //         puzzle.current.filter((item, idx) => item !== null && toZ(idx) === z)
  //           .length === 9
  //       ) {
  //         animateGrid(z);
  //       }
  //       if (
  //         puzzle.current.filter((item, idx) => item !== null && toXY(idx).y === y)
  //           .length === 9
  //       ) {
  //         animateRow(y);
  //       }
  //       if (
  //         puzzle.current.filter((item, idx) => item !== null && toXY(idx).x === x)
  //           .length === 9
  //       ) {
  //         animateColumn(x);
  //       }
  //       if (puzzle.current.filter(x => x === number).length === 9) {
  //         animateNumber(number);
  //       }
  //       if (puzzle.current.filter(x => x !== null).length === 81) {
  //         setSolved(true);
  //         cells.current[index].setHighlight(false);
  //         setIndex(-1);
  //         props.onFinish && props.onFinish();
  //         InteractionManager.runAfterInteractions(() => {
  //           animateAll();
  //         });
  //         return;
  //       }
  //       if (isNumber(highlightNumber)) setHighlight(highlightNumber, false);
  //       setHighlight(number, true);
  //       setHighlightNumber(number);
  //       if (index !== index) return;
  //       setIndex(-1);
  //     });
  //   };

  const isNumber = number => {
    return typeof number == 'number';
  };

  const initBoard = () => {
    setInited(false);
    setSolved(false);
    movedStacks.current = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    setHighlightNumber(null);
    setHighlightIndex(null);
    let count = 0;
    let fixedStack = [];
    const numberCount = puzzle.current.filter(x => x !== null).length;
    const gap = 150;
    for (let i = 0; i < 81; i++) {
      const number = puzzle.current[i];
      if (isNumber(number)) {
        count++;
        setTimeout(
          count => {
            const stack =
              stacks.current[number][8 - movedStacks.current[number]];
            fixedStack.push(stack);
            movedStacks.current[number]++;
            stack.moveTo(i, () => {
              cells.current[i].setNumber(
                number,
                original.current[i] === puzzle.current[i],
              );
              if (count === numberCount) {
                requestAnimationFrame(() => {
                  fixedStack.forEach(item => item.setHide(true));
                });
                setTimeout(() => {
                  setInited(true);
                  props.onInit && props.onInit();
                }, gap);
              }
            });
          },
          gap * count,
          count,
        );
      }
    }
  };

  const animateRow = x => {
    stack.forEach(i => cells.current[i + x * 9].animate());
  };

  const animateColumn = y => {
    stack.forEach(i => cells.current[i * 9 + y].animate());
  };

  const animateGrid = z => {
    const x = z % 3;
    const y = Math.floor(z / 3);
    stack.forEach(i => {
      const xx = i % 3;
      const yy = Math.floor(i / 3);
      const index = xx + yy * 3 * 3 + y * 27 + x * 3;
      cells.current[index].animate();
    });
  };

  const animateNumber = number => {
    puzzle.current.forEach((item, i) => {
      if (item === number) cells.current[i].animate();
    });
  };

  const animateAll = () => {
    puzzle.current.forEach((item, i) => {
      cells.current[i].animate();
    });
  };

  const setHighlight = (number, highlight) => {
    puzzle.current.forEach((item, i) => {
      if (item === number) cells.current[i].setHighlight(highlight);
    });
  };

  const {x, y} = toXY(index);
  const top = y * CellSize + Math.floor(y / 3) * BorderWidth * 2;
  const left = x * CellSize + Math.floor(x / 3) * BorderWidth * 2;

  return (
    <View style={styles.container}>
      <View style={styles.boardContainer}>
        <View style={styles.board}>
          {/* <Grid
            ref={ref => ref && (cells.current = ref.cells)}
            onPress={onCellPress}
          /> */}
          {index !== -1 && (
            <View pointerEvents="none" style={[styles.row, {top}]} />
          )}
          {index !== -1 && (
            <View pointerEvents="none" style={[styles.column, {left}]} />
          )}
        </View>
      </View>
      <Stack
        ref={ref => ref && (stacks.current = ref.stacks)}
        onPress={onStackPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  boardContainer: {
    marginTop: 20,
    alignItems: 'center',
    width: BoardWidth,
  },
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'orange',
    padding: BorderWidth,
  },
  row: {
    position: 'absolute',
    backgroundColor: 'transparent',
    margin: BorderWidth * 2,
    top: 0,
    left: 0,
    width: CellSize * 9 + BorderWidth * 4,
    height: CellSize,
    borderColor: 'peru',
    borderWidth: 2,
    borderRadius: BorderWidth,
  },
  column: {
    position: 'absolute',
    backgroundColor: 'transparent',
    margin: BorderWidth * 2,
    top: 0,
    left: 0,
    width: CellSize,
    height: CellSize * 9 + BorderWidth * 4,
    borderColor: 'peru',
    borderWidth: 2,
    borderRadius: BorderWidth,
  },
});

// export default Board;
