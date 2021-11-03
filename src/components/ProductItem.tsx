import React from 'react';
import {Text, TouchableOpacity, View, Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {width, height} = Dimensions.get('window');

const AppContainer = styled.View({
  flexDirection: 'row',
  marginVertical: 10
});

const AppImageContainer = styled.View({
  width: width * 0.25,
  height: width * 0.25,
});

const AppDataContainer = styled.View({
  marginLeft: 20,
});

const AppImage = styled.Image({
  width: '100%',
  height: '100%',
  borderRadius: 15,
});

const AppTitle = styled.Text({
  color: '#000',
  fontSize: 18,
  fontWeight: 500,
});

const AppSubTitle = styled.Text({
  color: '#6c6c6c',
  fontSize: 14,
});

const AppAddToBasketButton = styled.Text({
  color: '#f00',
  fontSize: 14,
});

const ProductItem = ({data: {...data}}) => {
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
          <Text>{data.rating}</Text>
          <Text>{data.distance} km</Text>
        </View>
        <TouchableOpacity>
          <AppAddToBasketButton>SEPETE EKLE</AppAddToBasketButton>
        </TouchableOpacity>
      </AppDataContainer>
    </AppContainer>
  );
};

export default ProductItem;
