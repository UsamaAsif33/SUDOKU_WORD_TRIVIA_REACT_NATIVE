import React from 'react';
import {height} from 'react-native-dimension';
import {Header, MainWrapper, Spacer} from '../../../components';
import {StatusBar} from 'react-native';
import {colors} from '../../../constants';

const Splash = () => {
  return (
    <MainWrapper imageStyle={{justifyContent: 'center'}}>
      <StatusBar
        translucent
        backgroundColor={colors.transparent}
        barStyle={'light-content'}
      />
      <Header />
    </MainWrapper>
  );
};

export default Splash;
