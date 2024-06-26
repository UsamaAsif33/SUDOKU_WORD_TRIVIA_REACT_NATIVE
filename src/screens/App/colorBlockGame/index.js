import {height} from 'react-native-dimension';
import React from 'react';
import {
  ComponentWrapper,
  MainHeader,
  MainWrapper,
  Spacer,
} from '../../../components';
import {GameHeader} from '../../../commonComponents';
import {ColorBlock, ColorBoxFlatList} from './components';
import {ColorBoxData} from '../../../utilities/dummyData';
import {useColorBlockGame} from './hooks';

const ColorBlockGame = () => {
  const {onPressColorBlock, cellData, onPressCell, selectedColor} =
    useColorBlockGame();
  return (
    <MainWrapper>
      <Spacer height={height(6.4)} />
      <ComponentWrapper>
        <MainHeader title={'Volume 1'} />
      </ComponentWrapper>

      <Spacer height={height(2)} />
      <GameHeader />

      <Spacer height={height(5.9)} />
      <ColorBlock cellData={cellData} onPress={onPressCell} />

      <Spacer height={height(6.7)} />
      <ColorBoxFlatList
        data={ColorBoxData}
        onPress={onPressColorBlock}
        selectedId={selectedColor}
      />
    </MainWrapper>
  );
};

export default ColorBlockGame;
