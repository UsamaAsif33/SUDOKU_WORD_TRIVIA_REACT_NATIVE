import {height} from 'react-native-dimension';
import React from 'react';

import {ComponentWrapper, MainWrapper} from '../../../components/wrappers';
import {Header, Spacer} from '../../../components';
import {Button, ComponentHeader, SignInFields} from '../../../commonComponents';
import {Footer, ForgetPassword} from './components';
import {useSignIn} from './hooks';

const SignIn = ({navigation}) => {
  const {
    onPressForgetPassword,
    onPressShowPassword,
    showPass,
    onPressSignUp,
    onPressSignIn,
  } = useSignIn(navigation);
  return (
    <MainWrapper>
      <Spacer height={height(6.2)} />
      <Header />

      <Spacer height={height(9.6)} />
      <ComponentHeader title={'Sign in'} />

      <Spacer height={height(2.3)} />
      <ComponentWrapper>
        <SignInFields onPress={onPressShowPassword} showPass={showPass} />

        <Spacer height={height(0.6)} />
        <ForgetPassword onPress={onPressForgetPassword} />

        <Spacer height={height(5.6)} />
        <Button onPress={onPressSignIn} title={'Sign in'} />

        <Spacer height={height(5)} />
        <Footer onPress={onPressSignUp} />
      </ComponentWrapper>
    </MainWrapper>
  );
};

export default SignIn;
