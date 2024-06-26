import {height} from 'react-native-dimension';
import React from 'react';
import {
  ComponentWrapper,
  MainHeader,
  MainWrapper,
  Spacer,
} from '../../../components';
import {ComponentHeader} from '../../../commonComponents';
import {InstructionLBtnsFlatList} from './components';
import {useInstruction} from './hooks';
import {InstructionBtnsData} from '../../../utilities/dummyData';

const Instruction = () => {
  const {onPressBtn, selectedId} = useInstruction();
  return (
    <MainWrapper>
      <Spacer height={height(6.7)} />
      <ComponentWrapper>
        <MainHeader />
      </ComponentWrapper>

      <Spacer height={height(2.3)} />
      <ComponentHeader title={'Instruction'} />

      <Spacer height={height(2.3)} />
      <ComponentWrapper>
        <InstructionLBtnsFlatList
          onPress={onPressBtn}
          data={InstructionBtnsData}
          selectedId={selectedId}
        />
      </ComponentWrapper>
    </MainWrapper>
  );
};

export default Instruction;
