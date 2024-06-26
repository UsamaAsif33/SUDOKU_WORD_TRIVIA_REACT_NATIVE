import {height} from 'react-native-dimension';
import React from 'react';
import {
  ComponentWrapper,
  MainHeader,
  MainWrapper,
  Spacer,
  TextInputBordered,
} from '../../../components';
import {Button, ComponentHeader} from '../../../commonComponents';
import {ComponentText} from './components';

const ForgetPassword = () => {
  return (
    <MainWrapper>
      <ComponentWrapper>
        <Spacer height={height(6.7)} />
        <MainHeader />
      </ComponentWrapper>

      <Spacer height={height(2.3)} />
      <ComponentHeader title={'Reset Password'} />

      <Spacer height={height(1.4)} />
      <ComponentWrapper>
        <ComponentText />

        <Spacer height={height(5.2)} />
        <TextInputBordered placeholder={'Your Email'} />

        <Spacer height={height(2.3)} />
        <Button title={'SEND'} />
      </ComponentWrapper>
    </MainWrapper>
  );
};

export default ForgetPassword;
