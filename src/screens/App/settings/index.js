import {height} from 'react-native-dimension';
import React from 'react';
import {
  ComponentWrapper,
  HeaderTitleWithFlower,
  MainHeader,
  MainWrapper,
  Spacer,
} from '../../../components';
import {SettingsButtons} from './components';

const Settings = ({navigation}) => {
  return (
    <MainWrapper>
      <Spacer height={height(6.7)} />
      <ComponentWrapper>
        <MainHeader />
      </ComponentWrapper>

      <Spacer height={height(2.3)} />
      <HeaderTitleWithFlower />

      <Spacer height={height(3.1)} />
      <SettingsButtons navigation={navigation} />
    </MainWrapper>
  );
};

export default Settings;
