import React from 'react';
import {Text, TouchableOpacity, View, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as COLORS from '../styles/colors';
import { Product } from '../utils/interfaces';

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
});

const AppDataContainer = styled.View({
  marginLeft: 20,
});

const AppImage = styled.Image({
  width: '100%',
  height: '100%',
  borderRadius: 12,
  zIndex: 1
});

const AppImageShadow = styled.Image({
  width: '100%',
  height: '100%',
  borderRadius: 12,
  position: 'absolute',
  top: 7,
  left: 0,
  opacity: 0.2,
});

const AppTitle = styled.Text({
  color: COLORS.SECONDARY,
  fontSize: 16,
  fontWeight: 600,
  lineHeight: '24px',
});

const AppSubTitle = styled.Text({
  color: COLORS.PRIMARY,
  fontSize: 12,
  lineHeight: '16px',
  marginVertical: 7,
});

const AppAddToBasketButton = styled.Text({
  color: '#f00',
  fontSize: 12,
  fontWeight: 700,
  lineHeight: '16px',
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
  lineHeight: '16px',
});

const AppIcon = styled.Image({
  width: 15,
  height: 15,
});

const ProductItem = ({data, isAdded, callback}: any) => {
  const setCallback = (data: Product) => {
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
        <AppImageShadow
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
                SEPETTEN ??IKAR
              </AppAddToBasketButton>
            </AppBadgeContainer>
          )}
        </TouchableOpacity>
      </AppDataContainer>
    </AppContainer>
  );
};

export default ProductItem;
