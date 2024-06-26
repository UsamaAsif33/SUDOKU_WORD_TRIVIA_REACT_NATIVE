import {FlatList, Pressable, StyleSheet} from 'react-native';
import {height, width, totalSize} from 'react-native-dimension';
import {
  CardWrapper,
  ComponentWrapper,
  RegularText,
  RowWrapper,
  SmallText,
  Spacer,
  TinyTitle,
  Wrapper,
} from '../../../../components';
import {colors} from '../../../../constants';

export const Plan = ({item, onPress, selectedId}) => {
  const isSelected = item.id === selectedId;
  const activeStyle = isSelected ? styles.card : null;
  return (
    <Pressable onPress={onPress}>
      <CardWrapper style={activeStyle}>
        <Spacer height={height(2)} />
        <RowWrapper style={styles.subWrappper}>
          <Wrapper style={styles.mainText}>
            <TinyTitle>{item.title}</TinyTitle>
          </Wrapper>
          {item.showTag && (
            <Wrapper style={styles.btn}>
              <SmallText>Best Value</SmallText>
            </Wrapper>
          )}
        </RowWrapper>
        <Spacer height={height(0.8)} />
        <RowWrapper style={styles.text}>
          <RegularText>{item.description}</RegularText>
        </RowWrapper>
        <Spacer height={height(2)} />
      </CardWrapper>
    </Pressable>
  );
};

export const PlanFlatList = ({data, onPress, selectedId}) => {
  return (
    <FlatList
      ItemSeparatorComponent={() => <Spacer height={height(1.6)} />}
      data={data}
      renderItem={({item, index}) => (
        <Plan
          item={item}
          onPress={() => onPress(item)}
          selectedId={selectedId}
        />
      )}
    />
  );
};

export const TermsAndConditionText = () => {
  return (
    <Wrapper style={styles.textWrap}>
      <ComponentWrapper>
        <SmallText style={styles.mainTextTag}>
          By placing this order, you agree to the{' '}
          <SmallText style={styles.innerText}>Terms of Service</SmallText> and{' '}
          <SmallText style={styles.innerText}>Privacy Policy</SmallText>.
          Subscription automatically renews unless auto-renew is turned off at
          least 24-hours before the end of the current period.
        </SmallText>
      </ComponentWrapper>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: totalSize(0.2),
    borderColor: colors.white,
  },
  btn: {
    width: width(19.6),
    height: height(3.4),
    backgroundColor: colors.appButtonColor3,
    borderRadius: totalSize(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnWrapeer: {
    justifyContent: 'center',
  },
  mainText: {
    height: height(8.6),
  },
  text: {
    width: width(65),
  },
  textWrap: {
    width: width(91),
  },
  mainTextTag: {
    textAlign: 'center',
  },
  innerText: {
    fontWeight: 'bold',
  },
});
