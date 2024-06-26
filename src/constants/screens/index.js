import {height} from 'react-native-dimension';
import {colors} from '../colors';
import Subscriptions from '../../screens/Auth/Subscription';
export const SCREEN = {
  // stacks
  authStack: 'authStack',
  appStack: 'appStack',

  // AuthNavigation
  splash: 'splash',
  signIn: 'signIn',
  onBoarding: 'onBoarding',
  forgetPassword: 'forgetPassword',
  signUp: 'signUp',
  subscription: 'subscription',

  // AppNavigation
  home: 'home',
  profile: 'profile',
  settings: 'settings',
  sudukuGame: 'sudukuGame',
  colorBlockGame: 'colorBlockGame',
  instruction: 'instruction',
  contactUs: 'contactUs',
};

export const tabs = {
  screenOptions: {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    tabBarActiveTintColor: colors.appIconColor4,
    tabBarInactiveTintColor: colors.appIconColor3,
    tabBarStyle: {
      elevation: 15,
      backgroundColor: colors.appBgColor1,
      height: height(7),
    },
  },
};
