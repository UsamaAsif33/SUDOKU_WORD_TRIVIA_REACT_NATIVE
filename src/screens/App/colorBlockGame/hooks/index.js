import {useState} from 'react';
import {
  ColorBlockDataRound1,
  ColorBlockDataRound2,
  ColorBlockDataRound3,
  ColorBlockDataRound4,
  ColorBlockDataRound5,
  ColorBlockDataRound6,
  ColorBlockDataRound7,
  ColorBlockDataRound8,
  ColorBlockDataRound9,
  ColorBlockDataRound10,
  ColorBlockDataRound11,
  ColorBlockDataRound12,
  ColorBlockDataRound13,
  ColorBlockDataRound14,
  ColorBlockDataRound15,
  ColorBlockDataRound16,
  ColorBlockDataRound17,
  ColorBlockDataRound18,
  ColorBlockDataRound19,
  ColorBlockDataRound20,
  ColorBlockDataRound21,
  ColorBlockDataRound22,
  ColorBlockDataRound23,
  ColorBlockDataRound24,
  ColorBlockDataRound25,
} from '../../../../utilities/dummyData';

export const useColorBlockGame = () => {
  const [cellData, setCellData] = useState(ColorBlockDataRound25);
  const [selectedColor, setSelectedColor] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [instructionModalVisible, setInstructionModalVisible] = useState(false);

  const onPressColorBlock = item => {
    setSelectedColor(item.color);
    console.log(`${item.color} is selected`);
  };

  const isValueInRowOrColumnOrBlock = (index, value) => {
    const row = Math.floor(index / 9);
    const col = index % 9;
    // Check row and column
    for (let i = 0; i < 9; i++) {
      if (cellData[row * 9 + i] === value || cellData[i * 9 + col] === value) {
        return true;
      }
    }
    // Check 3x3 block
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (cellData[(startRow + i) * 9 + (startCol + j)] === value) {
          return true;
        }
      }
    }

    return false;
  };

  const onPressCell = (index, color) => {
    if (selectedColor !== null && cellData[index] === null) {
      if (!isValueInRowOrColumnOrBlock(index, selectedColor)) {
        const newData = [...cellData];
        newData[index] = selectedColor;
        setCellData(newData);
        console.log(`Placed '${selectedColor}' color in cell ${index}`);
      } else {
        console.log('index: ', index);
        const wrongCell = [...cellData];
        wrongCell[index] = 'red';
        setCellData(wrongCell);
        setTimeout(() => {
          const resetCell = [...cellData];
          resetCell[index] = null;
          setCellData(resetCell);
        }, 1000);
        console.log(
          `Color '${selectedColor}' is already in the same row, column, or 3x3 block`,
        );
      }
    } else {
      console.log(`Cell ${index} pressed with ${color} color`);
    }
  };

  const onPressHint = () => {
    setModalVisible(!modalVisible);
  };

  const onPressInstructionIcon = () => {
    setInstructionModalVisible(!instructionModalVisible);
  };

  return {
    onPressColorBlock,
    selectedColor,
    cellData,
    onPressCell,
    onPressHint,
    modalVisible,
    onPressInstructionIcon,
    instructionModalVisible,
  };
};
