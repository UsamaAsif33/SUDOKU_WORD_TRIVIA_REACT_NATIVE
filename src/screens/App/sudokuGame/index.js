import {height} from 'react-native-dimension';
import React from 'react';
import {
  ComponentWrapper,
  MainHeader,
  MainWrapper,
  Spacer,
} from '../../../components';
import {GameHeader} from '../../../commonComponents';
import {SudokuGame} from './components';
import {useSudokuGame} from './hooks';

const Sudoku = () => {
  const {
    handleCellPress,
    handleUserSelectedValue,
    selectedValue,
    cellData,
    onPressHint,
    modelVisible,
    onPressInstructionIcon,
    instructionModelVisible,
  } = useSudokuGame();
  return (
    <MainWrapper>
      <Spacer height={height(6.4)} />
      <ComponentWrapper>
        <MainHeader title={'Volume 1'} />
      </ComponentWrapper>

      <Spacer height={height(2)} />
      <GameHeader
        onPressHint={onPressHint}
        isVisible={modelVisible}
        onPressInstruction={onPressInstructionIcon}
        instructionModal={instructionModelVisible}
      />

      <Spacer height={height(5.7)} />
      <SudokuGame
        cellData={cellData}
        handleCellPress={handleCellPress}
        handleUserSelectedValue={handleUserSelectedValue}
        selectedValue={selectedValue}
      />
    </MainWrapper>
  );
};

export default Sudoku;
