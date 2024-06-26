import {height, width, totalSize} from 'react-native-dimension';
import {
  Custom,
  PrimaryImage,
  RegularText,
  Spacer,
  TextInputBordered,
  TinyTitle,
  Wrapper,
} from '../../../../components';
import PrimaryDropDown from '../../../../components/dropDown';
import {SignInFields} from '../../../../commonComponents';
import {AppIcons} from '../../../../assets';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../../../constants';

export const SignUnFields = ({
  date,
  onPress,
  showPass,
  onPressShowPassword,
}) => {
  return (
    <Wrapper style={{zIndex: 1}}>
      <SignInFields
        placeholder={'Enter Email'}
        onPress={onPressShowPassword}
        showPass={showPass}
      />

      <Spacer height={height(1.5)} />
      <TextInputBordered placeholder={'Enter Name'} />

      <Spacer height={height(1.5)} />
      <TextInputBordered
        placeholder={'Enter Date of Birth'}
        editable={false}
        value={date}
        onPress={onPress}
      />

      <Spacer height={height(1.5)} />
      <PrimaryDropDown 
        placeholder={'Select Your Gender'}
        initialItems={[
          {label: 'Male', value: 'male'},
          {label: 'Female', value: 'female'},
        ]}
      />
    </Wrapper>
  );
};

export const UploadImage = ({onPress, image}) => {
  return (
    <Wrapper style={styles.mainContainer}>
      {image ? (
        <TouchableOpacity onPress={onPress}>
          <PrimaryImage source={{uri: image}} styles={styles.uploadImg} />
        </TouchableOpacity>
      ) : (
        <Wrapper style={styles.upload}>
          <TouchableOpacity onPress={onPress}>
            <Wrapper style={styles.img}>
              <Custom icon={AppIcons.upload} size={totalSize(2.4)} />
            </Wrapper>
          </TouchableOpacity>
          <Spacer height={height(1.2)} />
          <TinyTitle>Upload Profile Picture</TinyTitle>
        </Wrapper>
      )}
    </Wrapper>
  );
};

export const ComponentFooter = ({onPress}) => {
  return (
    <RegularText style={styles.mainText}>
      Already have an account?{'  '}
      <RegularText onPress={onPress} style={styles.textColor}>
        Sign in
      </RegularText>
    </RegularText>
  );
};

const styles = StyleSheet.create({
  img: {
    height: totalSize(4.4),
    width: totalSize(4.4),
    borderRadius: totalSize(4.4) / 2,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    width: width(89),
    height: height(12.9),
    borderWidth: totalSize(0.1),
    borderColor: colors.appBorderColor9,
    borderStyle: 'dashed',
    justifyContent: 'center',
  },
  mainText: {
    textAlign: 'center',
  },
  textColor: {
    color: colors.appTextColor3,
  },
  upload: {
    alignItems: 'center',
  },
  uploadImg: {
    width: width(88),
    height: height(11.9),
  },
});
