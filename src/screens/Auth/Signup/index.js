import {height} from 'react-native-dimension';
import React from 'react';
import {ComponentWrapper, MainWrapper, Spacer} from '../../../components';
import {Button, ComponentHeader, SignInFields} from '../../../commonComponents';
import {useSignUp} from './hooks';
import {ComponentFooter, SignUnFields, UploadImage} from './components';
import DatePicker from 'react-native-date-picker';

const SignUp = ({navigation}) => {
  const {
    onPressShowPassword,
    showPass,
    date,
    open,
    onConfirm,
    selectedDate,
    onPressDateOfBirth,
    onCancel,
    onPressSignIn,
    onPressUploadPicture,
    imagePath,
    onPressSignUp,
  } = useSignUp(navigation);
  return (
    <MainWrapper>
      <Spacer height={height(10.2)} />
      <ComponentHeader title={'Sign up'} />

      <Spacer height={height(2.3)} />
      <ComponentWrapper>
        <SignUnFields
          onPressShowPassword={onPressShowPassword}
          showPass={showPass}
          onPress={onPressDateOfBirth}
          date={selectedDate}
        />
        <DatePicker
          mode="date"
          modal
          open={open}
          date={date}
          onConfirm={date => onConfirm(date)}
          onCancel={onCancel}
        />

        <Spacer height={height(2.4)} />
        <UploadImage onPress={onPressUploadPicture} image={imagePath} />

        <Spacer height={height(4.4)} />
        <Button title={'Sign UP'} onPress={onPressSignUp} />

        <Spacer height={height(5)} />
        <ComponentFooter onPress={onPressSignIn} />
      </ComponentWrapper>
    </MainWrapper>
  );
};

export default SignUp;
