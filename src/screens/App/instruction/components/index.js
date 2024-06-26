import {height} from 'react-native-dimension';

import {Button} from '../../../../commonComponents';
import {RegularText, Spacer, Wrapper} from '../../../../components';
import {FlatList} from 'react-native';

export const InstructionLBtns = ({item, onPress, selectedId}) => {
  const isSelected = item.id === selectedId;
  return (
    <Wrapper>
      <Button
        selectedId={isSelected}
        title={item.volume}
        showRightArrowDownIcon
        onPress={onPress}
      />
      {isSelected ? (
        <Wrapper>
          <Spacer height={height(2)} />
          <RegularText>{item.description}</RegularText>
        </Wrapper>
      ) : null}
    </Wrapper>
  );
};

export const InstructionLBtnsFlatList = ({data, onPress, selectedId}) => {
  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => <Spacer height={height(1.5)} />}
      renderItem={({item, index}) => (
        <InstructionLBtns
          item={item}
          onPress={() => onPress(item)}
          selectedId={selectedId}
        />
      )}
    />
  );
};
