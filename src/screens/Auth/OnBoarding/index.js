import {height} from 'react-native-dimension';
import React from 'react';
import {MainWrapper, Spacer} from '../../../components';
import {
  BackgoundColoredView,
  Dots,
  NextButton,
  OnBoardingTitleAndDesciption,
} from './components';
import {useOnBoarding} from './hooks';
import {StatusBar} from 'react-native';
import {colors} from '../../../constants';

const OnBoarding = ({navigation}) => {
  const {onPressNext} = useOnBoarding(navigation);
  return (
    <MainWrapper>
      <StatusBar
        translucent
        backgroundColor={colors.transparent}
        barStyle={'light-content'}
      />

      <Spacer height={height(9.2)} />
      <BackgoundColoredView />

      <Spacer height={height(8.1)} />
      <Dots />

      <Spacer height={height(1.6)} />
      <OnBoardingTitleAndDesciption />

      <NextButton onPress={onPressNext} />
    </MainWrapper>
  );
};

export default OnBoarding;
