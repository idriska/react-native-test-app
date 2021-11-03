import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {ProductItem} from '../../components';

const AppContainer = styled.View({
  padding: 20,
});

const AppTitle = styled.Text({
  color: '#000',
  fontWeight: 600,
  fontSize: 30,
});

const AppText = styled.Text({
  color: '#000',
  fontSize: 16,
});

const Products = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([
    {
      img: 'https://officesnapshots.com/wp-content/uploads/2018/03/WME-IMG-offices-melbourne-1-1200x801.jpg',
      title: 'title',
      subTitle: 'sub title',
      rating: '3.4',
      distance: '10',
      price: 120,
      cargo: 10,
    },
    {
      img: 'https://officesnapshots.com/wp-content/uploads/2018/03/WME-IMG-offices-melbourne-1-1200x801.jpg',
      title: 'title',
      subTitle: 'sub title',
      rating: '3.4',
      distance: '10',
      price: 200,
      cargo: 15,
    },
  ]);

  useEffect(() => {
    let tempPrice = 0;
    products.forEach(el => {
      setTotalPrice((tempPrice += el.price));
    });
  }, [products]);

  const renderProducts = () => {
    return products.map((item, index) => {
      return <ProductItem key={index} data={item} />;
    });
  };

  return (
    <AppContainer>
      {renderProducts()}
      <AppTitle>Ürünlerin Toplamı</AppTitle>
      <AppText>Toplam: {totalPrice}</AppText>
    </AppContainer>
  );
};

export default Products;