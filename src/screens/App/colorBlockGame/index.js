import {height} from 'react-native-dimension';
import React from 'react';
import {
  ComponentWrapper,
  MainHeader,
  MainWrapper,
  PrimaryModal,
  Spacer,
} from '../../../components';
import {GameHeader} from '../../../commonComponents';
import {ColorBlock, ColorBoxFlatList} from './components';
import {ColorBoxData} from '../../../utilities/dummyData';
import {useColorBlockGame} from './hooks';

const ColorBlockGame = () => {
  const {
    onPressColorBlock,
    cellData,
    onPressCell,
    selectedColor,
    onPressHint,
    modalVisible,
  } = useColorBlockGame();
  return (
    <MainWrapper>
      <Spacer height={height(6.4)} />
      <ComponentWrapper>
        <MainHeader title={'Volume 1'} />
      </ComponentWrapper>

      <Spacer height={height(2)} />
      <GameHeader
        onPressHint={onPressHint}
        isVisible={modalVisible}
        title={'Hint!'}
        description={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius iusto alias illum, neque itaque, tempora explicabo ratione ipsa enim distinctio, vero magni quis asperiores? Esse sapiente consequuntur non pariatur dolorem.'
        }
      />

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
