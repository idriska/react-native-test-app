import React from 'react';
import styled from 'styled-components/native';
import {TextInput} from 'react-native-paper';
import * as COLORS from '../../styles/colors';

const AppContainer = styled.View({
  flex: 1,
  padding: 24,
  backgroundColor: '#fff',
});

const AppSignUpContainer = styled.View({});

const AppAccountContainer = styled.View({
  flex: 1,
});

const AppTitle = styled.Text({
  color: COLORS.SECONDARY,
  fontWeight: 600,
  fontSize: 32,
  lineHeight: 42,
  marginTop: 30,
});

const AppInput = styled(TextInput)({
  backgroundColor: 'none',
  paddingHorizontal: 0,
  marginTop: 30,
});

const AppInputStyleProps = {
  activeUnderlineColor: COLORS.HELPER_TURQUOISE,
  selectionColor: COLORS.SECONDARY,
  underlineColor: COLORS.HELPER_GRAY,
};

const AppSignUpButton = styled.Text({
  color: COLORS.WHITE,
  backgroundColor: COLORS.HELPER_GRAY,
  marginTop: 37,
  borderRadius: 12,
  height: 56,
  textAlign: 'center',
  lineHeight: 56,
  fontSize: 14,
});

const AppLogOutButton = styled.Text({
  color: COLORS.HELPER_RED,
  borderWidth: 1,
  borderColor: COLORS.HELPER_RED,
  borderRadius: 12,
  height: 56,
  textAlign: 'center',
  lineHeight: 56,
  fontSize: 14,
});

const AppUserName = styled.Text({
  color: '#000',
  fontWeight: 700,
  fontSize: 36,
  marginVertical: 32
});

const AppText = styled.Text({
  color: '#000',
  fontSize: 14,
  fontWeight: 500,
  lineHeight: 28,
});

const AppLocaleTitle = styled.Text({
  color: COLORS.PRIMARY,
  fontSize: 12,
});

const AppPickerContainer = styled.View({
  borderColor: COLORS.PRIMARY,
  borderBottomWidth: 1,
  marginTop: 30,
});

const AppDivider = styled.View({
    borderBottomWidth: 1,
    borderColor: COLORS.HELPER_GRAY,
    marginTop: 18
})

export {
  AppContainer,
  AppSignUpContainer,
  AppAccountContainer,
  AppTitle,
  AppInput,
  AppLocaleTitle,
  AppInputStyleProps,
  AppSignUpButton,
  AppLogOutButton,
  AppUserName,
  AppText,
  AppPickerContainer,
  AppDivider
};
