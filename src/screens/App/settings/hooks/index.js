import {useRef, useState} from 'react';
import {SCREEN} from '../../../../constants';

export const useSettings = navigation => {
  const [isEnabled, setIsEnabled] = useState(true);
  const resetRef = useRef();
  const deleteRef = useRef();

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  const onPressProfile = () => {
    navigation.navigate(SCREEN.profile);
  };

  const onPressRemoveAds = () => {
    navigation.navigate(SCREEN.instruction);
  };

  const onPressContactUs = () => {
    navigation.navigate(SCREEN.contactUs);
  };

  const onPressReset = () => {
    resetRef.current.open();
  };

  const onPressDelete = () => {
    deleteRef.current.open();
  };

  const onPressResetNo = () => {
    resetRef.current.close();
  };

  const onPresstResetYes = () => {
    navigation.navigate(SCREEN.home);
  };

  const onPressDeleteNo = () => {
    deleteRef.current.close();
  };

  const onPresstDeleteYes = () => {
    navigation.replace(SCREEN.authStack, {screen: SCREEN.signUp});
  };

  const onPressLogout = () => {
    navigation.replace(SCREEN.authStack, {screen: SCREEN.signIn});
  };

  return {
    toggleSwitch,
    isEnabled,
    onPressProfile,
    onPressRemoveAds,
    onPressContactUs,
    resetRef,
    deleteRef,
    onPressReset,
    onPressResetNo,
    onPresstResetYes,
    onPressLogout,
    onPressDeleteNo,
    onPresstDeleteYes,
    onPressDelete,
  };
};
