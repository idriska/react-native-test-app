import {DECREMENT, INCREMENT} from './types';

export const increment = (data: {}) => {
  return {
    type: INCREMENT,
    data: data
  };
}

export const decrement = (data: {}) => {
  return {
    type: DECREMENT,
    data: data
  };
}
