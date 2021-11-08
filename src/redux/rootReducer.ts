import {DECREMENT, INCREMENT} from './types';

export function rootReducer(state = {total: 0, cargoTaxes: 0}, action: any) {
  if (action.type === INCREMENT) {
    state.total += action.data.total;
    state.cargoTaxes += action.data.cargoTaxes;
    return state;
  } else if (action.type === DECREMENT) {
    state.total -= action.data.total;
    state.cargoTaxes -= action.data.cargoTaxes;
    return state;
  }

  return state;
}
