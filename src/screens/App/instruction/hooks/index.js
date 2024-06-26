import {useState} from 'react';

export const useInstruction = () => {
  const [selectedId, setSelectedId] = useState();

  const onPressBtn = item => {
    if (item.id == selectedId) {
      setSelectedId('');
    } else {
      setSelectedId(item.id);
    }
  };

  return {
    onPressBtn,
    selectedId,
  };
};
