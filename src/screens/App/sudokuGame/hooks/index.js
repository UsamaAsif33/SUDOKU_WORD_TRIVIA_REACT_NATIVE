import {useState} from 'react';
import {InitalSudokuGameData} from '../../../../utilities/dummyData';
import {Alert} from 'react-native';

export const useSudokuGame = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [cellData, setCellData] = useState(InitalSudokuGameData);

  const handleUserSelectedValue = value => {
    setSelectedValue(value);
    console.log(`${value} is Selected`);
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

  const handleCellPress = (index, number) => {
    if (selectedValue !== null && cellData[index] === null) {
      if (!isValueInRowOrColumnOrBlock(index, selectedValue)) {
        const newData = [...cellData];
        newData[index] = selectedValue;
        setCellData(newData);
        console.log(`Placed '${selectedValue}' in cell ${index}`);
      } else {
        console.log(
          `Value '${selectedValue}' is already in the same row, column, or 3x3 block`,
          Alert.alert('Opps!', 'You are lossing the game', [
            {
              text: 'Restart',
              onPress: () => {
                setCellData(InitalSudokuGameData);
                setSelectedValue(null);
              },
            },
            {
              text: 'Home',
            },
          ]),
        );
      }
    } else {
      console.log(`Cell ${index} pressed with value ${number}`);
    }
  };

  return {
    handleUserSelectedValue,
    handleCellPress,
    selectedValue,
    cellData,
  };
};
