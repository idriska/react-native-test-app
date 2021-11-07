import React from 'react';
import {Text, TouchableOpacity, View, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as COLORS from '../styles/colors';

const {width, height} = Dimensions.get('window');

const AppContainer = styled.View({
  flexDirection: 'row',
  marginVertical: 10,
  borderBottomWidth: 1,
  borderColor: '#F1F3F5',
  paddingBottom: 15,
});

const AppImageContainer = styled.View({
  width: width * 0.2,
  height: width * 0.2,

  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 1,
  shadowRadius: 13,

  elevation: 16,
});

const AppDataContainer = styled.View({
  marginLeft: 20,
});

const AppImage = styled.Image({
  width: '100%',
  height: '100%',
  borderRadius: 12,
});

const AppTitle = styled.Text({
  color: COLORS.SECONDARY,
  fontSize: 16,
  fontWeight: 600,
  lineHeight: 24,
});

const AppSubTitle = styled.Text({
  color: COLORS.PRIMARY,
  fontSize: 12,
  lineHeight: 16,
  marginVertical: 7,
});

const AppAddToBasketButton = styled.Text({
  color: '#f00',
  fontSize: 12,
  fontWeight: 700,
  lineHeight: 16,
  marginLeft: 5,
});

const AppBadgeContainer = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
});

const AppBadgeText = styled.Text({
  color: COLORS.SECONDARY,
  fontSize: 12,
  fontWeight: 400,
  lineHeight: 16,
});

const AppIcon = styled.Image({
  width: 15,
  height: 15,
});

const ProductItem = ({data, isAdded, callback}: any) => {
  const setCallback = (data: any) => {
    callback(data);
  };

  return (
    <AppContainer>
      <AppImageContainer>
        <AppImage
          source={{
            uri: data.img,
          }}
        />
      </AppImageContainer>
      <AppDataContainer>
        <AppTitle>{data.title}</AppTitle>
        <AppSubTitle>{data.subTitle}</AppSubTitle>
        <View style={{flexDirection: 'row'}}>
          <AppBadgeContainer>
            <AppIcon
              source={require('../assets/icons/star.png')}
              resizeMode="contain"
            />
            <AppBadgeText> {data.rating}</AppBadgeText>
          </AppBadgeContainer>
          <AppBadgeContainer style={{marginLeft: 25}}>
            <FontAwesome
              name="map-marker"
              style={{color: COLORS.HELPER_TURQUOISE}}
            />
            <AppBadgeText> {data.distance} km</AppBadgeText>
          </AppBadgeContainer>
        </View>
        <TouchableOpacity
          style={{marginTop: 30}}
          onPress={() => {
            setCallback(data);
          }}>
          {!isAdded ? (
            <AppBadgeContainer>
              <AppIcon
                source={require('../assets/icons/target.png')}
                resizeMode="contain"
              />
              <AppAddToBasketButton>SEPETE EKLE</AppAddToBasketButton>
            </AppBadgeContainer>
          ) : (
            <AppBadgeContainer>
              <FontAwesome name="minus" style={{color: 'green'}}/>
              <AppAddToBasketButton style={{color: 'green'}}>
                SEPETTEN ÇIKAR
              </AppAddToBasketButton>
            </AppBadgeContainer>
          )}
        </TouchableOpacity>
      </AppDataContainer>
    </AppContainer>
  );
};

export default ProductItem;
