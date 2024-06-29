import React from 'react';
import {height} from 'react-native-dimension';
import {HeaderTitleWithFlower, MainWrapper, Spacer} from '../../../components';
import {GameCardFlatList, HomeIcons} from './components';
import {GamesData} from '../../../utilities/dummyData';
import {useHome} from './hooks';
import {StatusBar} from 'react-native';
import {colors} from '../../../constants';

const Home = ({navigation}) => {
  const {onPressSettings, onPressGame, onPressInstructionsIcon} =
    useHome(navigation);
  return (
    <MainWrapper>
      <StatusBar
        translucent
        backgroundColor={colors.transparent}
        barStyle={'light-content'}
      />

      <Spacer height={height(5.3)} />
      <HeaderTitleWithFlower />

      <Spacer height={height(1.9)} />
      <HomeIcons
        onPressSettings={onPressSettings}
        onPressInstruction={onPressInstructionsIcon}
      />

      <Spacer height={height(2.3)} />
      <GameCardFlatList data={GamesData} onPress={onPressGame} />
    </MainWrapper>
  );
};

export default Home;
