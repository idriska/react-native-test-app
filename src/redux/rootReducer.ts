import {INCREMENT} from './types';

export function rootReducer(state: any, action: any) {
  if (action.type === INCREMENT) {
    return state += state;
  }

  return state;
}
