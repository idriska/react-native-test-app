import React from 'react';
import styled from 'styled-components/native';
import {TextInput} from 'react-native-paper';
import * as COLORS from '../../styles/colors';

const AppContainer = styled.View({
  flex: 1,
  padding: 24,
  backgroundColor: '#fff',
});

const AppProductsList = styled.ScrollView({

});

const AppTotalContainer = styled.View({
  paddingTop: 15
})

const AppProductTotalTitle = styled.Text({
  color: COLORS.SECONDARY,
  fontWeight: 400,
  fontSize: 24,
  lineHeight: 32,
});

const AppText = styled.Text({
  color: COLORS.SECONDARY,
  fontSize: 12,
  fontWeight: 400,
  lineHeight: 22,
});

const AppDivider = styled.View({
  borderBottomWidth: 1,
  borderColor: COLORS.HELPER_GRAY,
  marginTop: 18,
});

const AppGeneralTotalText = styled.Text({
  fontSize: 16,
  fontWeight: 600,
  marginTop: 8,
  color: COLORS.SECONDARY
})

export {
  AppContainer,
  AppProductsList,
  AppProductTotalTitle,
  AppTotalContainer,
  AppGeneralTotalText,
  AppText,
  AppDivider,
};
