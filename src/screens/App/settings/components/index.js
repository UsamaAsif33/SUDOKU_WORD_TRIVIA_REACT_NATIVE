import {Pressable, StyleSheet, Switch, TouchableOpacity} from 'react-native';
import {height, width, totalSize} from 'react-native-dimension';

import {
  BottomSheet,
  Hrline,
  LargeText,
  MediumTitle,
  RegularText,
  RowWrapper,
  Spacer,
  Wrapper,
} from '../../../../components';
import {colors} from '../../../../constants';
import {Icon} from 'react-native-elements';
import {useSettings} from '../hooks';

export const SettingsBtn = ({title, onPress, showSwitch}) => {
  const {toggleSwitch, isEnabled} = useSettings();
  return (
    <Pressable onPress={onPress}>
      <RowWrapper>
        <LargeText>{title}</LargeText>
        {showSwitch ? (
          <Switch
            trackColor={{false: colors.white, true: colors.appButtonColor3}}
            thumbColor={isEnabled ? colors.white : colors.appButtonColor3}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        ) : (
          <Icon
            name="keyboard-arrow-right"
            type="material"
            size={totalSize(2.4)}
            color={colors.white}
          />
        )}
      </RowWrapper>
    </Pressable>
  );
};

export const SettingsButtons = ({navigation}) => {
  const {
    onPressProfile,
    onPressRemoveAds,
    onPressContactUs,
    resetRef,
    deleteRef,
    onPressReset,
    onPressResetNo,
    onPresstResetYes,
    onPressDelete,
    onPressDeleteNo,
    onPresstDeleteYes,
    onPressLogout,
  } = useSettings(navigation);
  return (
    <Wrapper>
      <SettingsBtn title={'My Profile'} onPress={onPressProfile} />

      <Spacer height={height(2.3)} />
      <SettingsBtn title={'Notifications'} showSwitch />

      <Spacer height={height(2.3)} />
      <SettingsBtn title={'Remove Ads'} onPress={onPressRemoveAds} />

      <Spacer height={height(2.3)} />
      <SettingsBtn title={'Contact Us'} onPress={onPressContactUs} />

      <Spacer height={height(4.3)} />
      <Hrline
        color={colors.appBgColor3}
        Width={width(79.4)}
        height={height(0.1)}
      />

      <Spacer height={height(4.3)} />
      <SettingsBtn title={'Reset Account Progress'} onPress={onPressReset} />
      <BottomSheet
        innerRef={resetRef}
        onPressNo={onPressResetNo}
        onPressYes={onPresstResetYes}
        title={'Are you sure you want to reset your account progress'}
        description={'Once the progress is reset it cannot be undone'}
      />

      <Spacer height={height(2.3)} />
      <SettingsBtn title={'Delete Account'} onPress={onPressDelete} />
      <BottomSheet
        innerRef={deleteRef}
        onPressNo={onPressDeleteNo}
        onPressYes={onPresstDeleteYes}
        title={'Are you sure you want to Delete your account '}
        description={'Once the account is deleted it cannot be undone'}
      />

      <Spacer height={height(2.3)} />
      <SettingsBtn title={'Logout'} onPress={onPressLogout} />
    </Wrapper>
  );
};
