import {useState} from 'react';
import {InitialColorBlockGameData} from '../../../../utilities/dummyData';
import {Alert} from 'react-native';

export const useColorBlockGame = () => {
  const [cellData, setCellData] = useState(InitialColorBlockGameData);
  const [selectedColor, setSelectedColor] = useState(null);

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
        console.log(
          `Value '${selectedColor}' is already in the same row, column, or 3x3 block`,
          Alert.alert('Opps!', 'You are lossing the game', [
            {
              text: 'Restart',
              onPress: () => {
                setCellData(InitialColorBlockGameData);
                setSelectedColor(null);
              },
            },
            {
              text: 'Home',
            },
          ]),
        );
      }
    } else {
      console.log(`Cell ${index} pressed with ${color} color`);
    }
  };

  return {
    onPressColorBlock,
    selectedColor,
    cellData,
    onPressCell,
  };
};
