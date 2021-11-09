import 'react-native';
import {decrement, increment} from '../actions';
import {basketReducer} from '../basket-reducer';

it('basket price should be increment', () => {
  let action = increment({
    total: 100,
    cargoTaxes: 12,
  });

  let state = {total: 0, cargoTaxes: 0};
  let newState = basketReducer(state, action);

  expect(newState).toStrictEqual({
    total: 100,
    cargoTaxes: 12,
  });
});

it('basket price should be decrement', () => {
  let action = decrement({
    total: 45,
    cargoTaxes: 3,
  });

  let state = {total: 100, cargoTaxes: 12};
  let newState = basketReducer(state, action);

  expect(newState).toStrictEqual({
    total: 55,
    cargoTaxes: 9,
  });
});
