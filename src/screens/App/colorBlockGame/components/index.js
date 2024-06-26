import {FlatList, Pressable, StyleSheet} from 'react-native';
import {height, width, totalSize} from 'react-native-dimension';

import {Spacer, Wrapper} from '../../../../components';
import Grid from './Grid';
import {colors} from '../../../../constants';

export const ColorBlock = ({cellData, onPress}) => {
  return <Grid cellData={cellData} onPress={onPress} />;
};

export const ColorBox = ({item, onPress, selectedId}) => {
  const isSelected = item.color === selectedId;
  const activeStyle = isSelected ? styles.selectedBox : styles.box;
  const animation = isSelected ? 'bounceIn' : '';
  return (
    <Wrapper animation={'bounceIn'} duration={3000} delay={1000}>
      <Wrapper animation={animation} delay={1000} duration={2000}>
        <Pressable
          onPress={onPress}
          style={[{backgroundColor: item.color}, activeStyle]}></Pressable>
      </Wrapper>
    </Wrapper>
  );
};

export const ColorBoxFlatList = ({data, onPress, selectedId}) => {
  return (
    <FlatList
      contentContainerStyle={styles.colorBoxWrapper}
      horizontal
      ItemSeparatorComponent={() => <Spacer horizontal width={width(3)} />}
      data={data}
      renderItem={({item, index}) => (
        <ColorBox
          item={item}
          onPress={() => onPress(item)}
          selectedId={selectedId}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  img: {
    width: width(89.3),
    height: height(44.1),
    alignSelf: 'center',
  },
  box: {
    width: totalSize(3.5),
    height: totalSize(3.5),
  },
  colorBoxWrapper: {
    width: width(100),
    justifyContent: 'center',
  },
  selectedBox: {
    width: totalSize(3.5),
    height: totalSize(3.5),
    borderWidth: totalSize(0.3),
    borderColor: colors.white,
  },
});
