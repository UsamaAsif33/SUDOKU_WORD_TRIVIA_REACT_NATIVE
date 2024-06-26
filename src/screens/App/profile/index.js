import {height} from 'react-native-dimension';
import React from 'react';
import {
  ComponentWrapper,
  MainHeader,
  MainWrapper,
  Spacer,
} from '../../../components';
import {Button, ComponentHeader} from '../../../commonComponents';
import {ProfileCardFlatList, ProfileFields} from './components';
import {ProfileCardData} from '../../../utilities/dummyData';

const Profile = () => {
  return (
    <MainWrapper>
      <Spacer height={height(6.7)} />
      <ComponentWrapper>
        <MainHeader />
      </ComponentWrapper>
      <Spacer height={height(1.2)} />
      <ComponentHeader title={'My Profile'} showRightImg />
      <Spacer height={height(1.3)} />
      <ComponentWrapper>
        <ProfileCardFlatList data={ProfileCardData} />

        <Spacer height={height(6)} />
        <ProfileFields />

        <Spacer height={height(3.4)} />
        <Button title={'Update'} />
      </ComponentWrapper>
    </MainWrapper>
  );
};

export default Profile;
