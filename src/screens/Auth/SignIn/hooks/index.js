import {useState} from 'react';
import {SCREEN} from '../../../../constants';

export const useSignIn = navigation => {
  const [showPass, setShowPass] = useState(true);

  const onPressForgetPassword = () => {
    navigation.navigate(SCREEN.forgetPassword);
  };

  const onPressShowPassword = () => {
    setShowPass(!showPass);
  };

  const onPressSignUp = () => {
    navigation.navigate(SCREEN.signUp);
  };

  const onPressSignIn = () => {
    navigation.replace(SCREEN.appStack);
  };

  return {
    onPressForgetPassword,
    onPressShowPassword,
    showPass,
    onPressSignUp,
    onPressSignIn
  };
};
