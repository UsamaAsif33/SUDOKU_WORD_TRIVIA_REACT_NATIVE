import {height} from 'react-native-dimension';
import React from 'react';
import {
  ComponentWrapper,
  MainHeader,
  MainWrapper,
  Spacer,
} from '../../../components';
import {Button, ComponentHeader} from '../../../commonComponents';
import {DescriptionBox} from './components';

const ContactUs = () => {
  return (
    <MainWrapper>
      <Spacer height={height(6.7)} />
      <ComponentWrapper>
        <MainHeader />
      </ComponentWrapper>

      <Spacer height={height(2.3)} />
      <ComponentHeader title={'Contact Us'} />

      <Spacer height={height(5.1)} />
      <ComponentWrapper>
        <DescriptionBox />

        <Spacer height={height(2.3)} />
        <Button title={'SEND'} />
      </ComponentWrapper>
    </MainWrapper>
  );
};

export default ContactUs;
