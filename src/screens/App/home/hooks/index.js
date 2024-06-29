import {SCREEN} from '../../../../constants';

export const useHome = navigation => {
  const onPressSettings = () => {
    navigation.navigate(SCREEN.settings);
  };

  const onPressInstructionsIcon = () => {
    navigation.navigate(SCREEN.instruction);
  };

  const onPressGame = item => {
    navigation.navigate(item.onPress);
  };

  return {
    onPressSettings,
    onPressGame,
    onPressInstructionsIcon,
  };
};
