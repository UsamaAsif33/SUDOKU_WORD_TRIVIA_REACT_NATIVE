import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN} from '../../constants';
import * as Auth from '../../screens/Auth';
const {Navigator, Screen} = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={SCREEN.onBoarding}>
      <Screen name={SCREEN.signIn} component={Auth.SignIn} />
      <Screen name={SCREEN.onBoarding} component={Auth.OnBoarding} />
      <Screen name={SCREEN.forgetPassword} component={Auth.ForgetPassword} />
      <Screen name={SCREEN.signUp} component={Auth.SignUp} />
      <Screen name={SCREEN.subscription} component={Auth.Subscription} />
    </Navigator>
  );
};
export default AuthNavigation;
