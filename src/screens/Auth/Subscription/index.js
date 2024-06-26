import {height} from 'react-native-dimension';
import React from 'react';
import {
  ComponentWrapper,
  MainHeader,
  MainWrapper,
  Spacer,
} from '../../../components';
import {Button, ComponentHeader} from '../../../commonComponents';
import {Plan, PlanFlatList, TermsAndConditionText} from './components';
import {PlanData} from '../../../utilities/dummyData';
import {useSubscription} from './hooks';

const Subscription = ({navigation}) => {
  const {onPressPlan, selectedId, onPressContinue} =
    useSubscription(navigation);
  return (
    <MainWrapper>
      <Spacer height={height(6.7)} />
      <ComponentWrapper>
        <MainHeader />
      </ComponentWrapper>

      <Spacer height={height(2.3)} />
      <ComponentHeader title={'Choose a Plan'} />

      <ComponentWrapper>
        <Spacer height={height(2.4)} />
        <PlanFlatList
          data={PlanData}
          onPress={onPressPlan}
          selectedId={selectedId}
        />

        <Spacer height={height(14.1)} />
        <Button title={'Continue'} onPress={onPressContinue} />

        <Spacer height={height(3.2)} />
        <TermsAndConditionText />
      </ComponentWrapper>
    </MainWrapper>
  );
};

export default Subscription;
