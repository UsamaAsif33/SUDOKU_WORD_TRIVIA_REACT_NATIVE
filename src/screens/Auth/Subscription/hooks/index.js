import {useState} from 'react';
import {SCREEN} from '../../../../constants';

export const useSubscription = navigation => {
  const [selectedId, setSelectedId] = useState();
  const onPressPlan = item => {
    setSelectedId(item.id);
  };

  const onPressContinue = () => {
    navigation.replace(SCREEN.appStack);
  };

  return {
    selectedId,
    onPressPlan,
    onPressContinue,
  };
};
