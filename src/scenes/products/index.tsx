import React, {useEffect, useState} from 'react';
import {ProductItem} from '../../components';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {basketReducer} from '../../redux/basket-reducer';
import {decrement, increment} from '../../redux/actions';
import {environment} from '../../utils/environment';
import {
  AppContainer,
  AppProductsList,
  AppProductTotalTitle,
  AppTotalContainer,
  AppGeneralTotalText,
  AppText,
} from './styled';
import { Product } from '../../utils/interfaces';

const store = createStore(basketReducer, applyMiddleware(thunk));

const Products = () => {
  const [price, setPrice] = useState({
    total: 0,
    cargoTaxes: 0,
  });
  const [products, setProducts] = useState<Product[]>([]);
  const [basket, setBasket] = useState<Product[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch(`${environment.PUBLIC_URL}/products`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const renderProducts = () => {
    return products.map((item, index) => {
      let product = basket.find((el: Product) => {
        return el._id == item['_id'];
      });
      return (
        <ProductItem
          key={index}
          data={item}
          isAdded={product ? true : false}
          callback={(res: Product) => {
            updateBasket(res);
          }}
        />
      );
    });
  };

  const updateBasket = (data: Product) => {
    let tempArr = [];
    let dispatchetData = {
      total: data.price,
      cargoTaxes: data.cargo || 0 + (data.price || 0 * environment.TAX_RATE) / 100,
    };
    
    let product = basket.find((el: Product) => {
      return el._id == data._id;
    });

    if (product) {
      let products = basket.filter((el: Product) => {
        return el._id != data._id;
      });
      tempArr = products || [];
      store.dispatch(decrement(dispatchetData));
    } else {
      tempArr = [...basket, data];
      store.dispatch(increment(dispatchetData));
    }

    setBasket(tempArr);
  };

  store.subscribe(() => {
    let state = store.getState();
    setPrice({cargoTaxes: state.cargoTaxes, total: state.total});
  });

  return (
    <AppContainer>
      <AppProductsList>{renderProducts()}</AppProductsList>
      <AppTotalContainer>
        <AppProductTotalTitle>Ürünlerin Toplamı:</AppProductTotalTitle>
        <AppText>Toplam: {price.total} TL</AppText>
        <AppText>Vergiler + Kargo: {price.cargoTaxes.toFixed(2)} TL</AppText>
        <AppGeneralTotalText>
          Genel Toplam: {(price.total + price.cargoTaxes).toFixed(2)} TL
        </AppGeneralTotalText>
      </AppTotalContainer>
    </AppContainer>
  );
};

export default Products;
