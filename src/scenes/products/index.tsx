import React, {useEffect, useState} from 'react';
import {ProductItem} from '../../components';
import {createStore} from 'redux';
import {rootReducer} from '../../redux/rootReducer';
import {increment} from '../../redux/actions';
import {environment} from '../../utils/environment';
import * as COLORS from '../../styles/colors';
import {
  AppContainer,
  AppProductsList,
  AppProductTotalTitle,
  AppTotalContainer,
  AppGeneralTotalText,
  AppText,
} from './styled';

const Products = () => {
  const store = createStore(rootReducer, {action: 0});
  const [price, setPrice] = useState({
    total: 0,
    cargoTaxes: 0,
  });
  const [products, setProducts] = useState([
    {
      _id: 1,
      img: 'https://officesnapshots.com/wp-content/uploads/2018/03/WME-IMG-offices-melbourne-1-1200x801.jpg',
      title: 'Villa Bosphorus',
      subTitle: 'Lorem İpsum Sit Dolor Met',
      rating: '3.9',
      distance: '3.7',
      price: 120,
      cargo: 10,
    },
    {
      _id: 2,
      img: 'https://officesnapshots.com/wp-content/uploads/2018/03/WME-IMG-offices-melbourne-1-1200x801.jpg',
      title: 'Villa Bosphorus',
      subTitle: 'Lorem İpsum Sit Dolor Met',
      rating: '3.9',
      distance: '3.7',
      price: 120,
      cargo: 10,
    },
    {
      _id: 3,
      img: 'https://officesnapshots.com/wp-content/uploads/2018/03/WME-IMG-offices-melbourne-1-1200x801.jpg',
      title: 'Villa Bosphorus',
      subTitle: 'Lorem İpsum Sit Dolor Met',
      rating: '3.9',
      distance: '3.7',
      price: 120,
      cargo: 10,
    },
    {
      _id: 4,
      img: 'https://officesnapshots.com/wp-content/uploads/2018/03/WME-IMG-offices-melbourne-1-1200x801.jpg',
      title: 'Villa Bosphorus',
      subTitle: 'Lorem İpsum Sit Dolor Met',
      rating: '3.9',
      distance: '3.7',
      price: 120,
      cargo: 10,
    },
  ]);
  const [basket, setBasket] = useState<any>([]);

  // useEffect(() => {
  //   getProducts();
  // }, []);

  useEffect(() => {
    calculatePrice();
  }, [basket]);

  const calculatePrice = () => {
    let tempTotal = 0;
    let tempCargoTaxes = 0;
    basket.forEach((el: any) => {
      tempTotal += el['price'];
      tempCargoTaxes +=
        el['cargo'] + (el['price'] * environment.TAX_RATE) / 100;

      setPrice({total: tempTotal, cargoTaxes: tempCargoTaxes});
    });
  };

  const getProducts = async () => {
    try {
      const response = await fetch(`${environment.PUBLIC_URL}/prodcuts`, {
        method: 'GET',
      });
      const data = await response.json();

      console.log(data);

      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const renderProducts = () => {
    return products.map((item, index) => {
      let product = basket.find((el: any) => {
        return el._id == item._id;
      });
      return (
        <ProductItem
          key={index}
          data={item}
          isAdded={product ? true : false}
          callback={(res: any) => {
            let tempArr = [];

            let product = basket.find((el: any) => {
              return el._id == res._id;
            });

            if (product) {
              let products = basket.find((el: any) => {
                return el._id != res._id;
              });
              tempArr = products || [];
            } else {
              tempArr = [...basket, res];
            }
            console.log(tempArr)
            setBasket(tempArr);
            // store.dispatch(increment);
          }}
        />
      );
    });
  };

  return (
    <AppContainer>
      <AppProductsList>{renderProducts()}</AppProductsList>
      <AppTotalContainer>
        <AppProductTotalTitle>Ürünlerin Toplamı:</AppProductTotalTitle>
        <AppText>Toplam: {price.total} TL</AppText>
        <AppText>Vergiler + Kargo: {price.cargoTaxes.toFixed(2)} TL</AppText>
        <AppGeneralTotalText>
          Genel Toplam: {price.total + price.cargoTaxes} TL
        </AppGeneralTotalText>
      </AppTotalContainer>
    </AppContainer>
  );
};

export default Products;
