import {useState} from 'react';
import {SCREEN} from '../../../../constants';
import moment from 'moment';
import {PickPhotoFromGallery} from '../../../../utilities';

export const useSignUp = navigation => {
  const [showPass, setShowPass] = useState(true);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const [imagePath, setImagePath] = useState();

  const onPressShowPassword = () => {
    setShowPass(!showPass);
  };

  const onPressSignIn = () => {
    navigation.navigate(SCREEN.signIn);
  };

  const onCancel = () => {
    setOpen(false);
  };

  const onConfirm = date => {
    setSelectedDate(moment(date).format('DD/MM/YYYY'));
    setOpen(false);
  };
  const onPressDateOfBirth = () => {
    setOpen(true);
  };

  const onPressUploadPicture = () => {
    PickPhotoFromGallery().then(response => setImagePath(response.path));
  };

  const onPressSignUp = () => {
    navigation.navigate(SCREEN.subscription);
  };
  return {
    onPressShowPassword,
    showPass,
    onPressSignIn,
    date,
    setDate,
    open,
    setOpen,
    onConfirm,
    selectedDate,
    onPressDateOfBirth,
    onCancel,
    onPressUploadPicture,
    imagePath,
    onPressSignUp
  };
};
