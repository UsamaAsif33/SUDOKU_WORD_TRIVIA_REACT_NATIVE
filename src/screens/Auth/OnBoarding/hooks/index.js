import {SCREEN} from '../../../../constants';

export const useOnBoarding = navigation => {
  const onPressNext = () => {
    navigation.navigate(SCREEN.signIn);
  };
  return {
    onPressNext,
  };
};
