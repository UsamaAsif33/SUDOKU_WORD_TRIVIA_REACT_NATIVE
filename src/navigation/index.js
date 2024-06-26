import React, {useEffect, useState} from 'react';
import AuthNavigation from './authStack';
import {SCREEN} from '../constants';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppNavigation from './appStack';
import {Splash} from '../screens/Auth';

const {Navigator, Screen} = createNativeStackNavigator();

const Navigation = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {loading ? (
        <Splash />
      ) : (
        <NavigationContainer>
          <Navigator
            screenOptions={{headerShown: false}}
            initialRouteName={SCREEN.authStack}>
            <Screen name={SCREEN.authStack} component={AuthNavigation} />
            <Screen name={SCREEN.appStack} component={AppNavigation} />
          </Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default Navigation;
