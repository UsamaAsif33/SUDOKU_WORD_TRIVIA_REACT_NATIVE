import {height} from 'react-native-dimension';

import {Button} from '../../../../commonComponents';
import {RegularText, Spacer, Wrapper} from '../../../../components';
import {FlatList, Linking, StyleSheet, Text, ToastAndroid} from 'react-native';

export const InstructionLBtns = ({item, onPress, selectedId}) => {
  const isSelected = item.id === selectedId;
  const url = 'https://sudokuwordtrivia.com/';
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
          <RegularText style={styles.description}>
            {item.description}
            <Text onPress={() => Linking.openURL(url)} style={styles.link}>
              sudokuwordtrivia.com
            </Text>
            {`\n\nHappy Solving,\nLee Flynn`}
          </RegularText>
        </Wrapper>
      ) : null}
    </Wrapper>
  );
};

export const InstructionLBtnsFlatList = ({data, onPress, selectedId}) => {
  return (
    <FlatList
      data={data}
      ListFooterComponent={<Spacer height={height(20)} />}
      showsVerticalScrollIndicator={false}
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

const styles = StyleSheet.create({
  link: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  description: {
    textAlign: 'justify',
  },
});
