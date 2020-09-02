
import { createReducer, on } from '@ngrx/store';
import { incrementar, decrement, reset, multiplicar, dividir } from './contador.actions';

export const initialState = 20;

const _counterReducer = createReducer(initialState,
  on(incrementar, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => initialState),
  on(multiplicar, (state, { numero }) => state * numero),
  on(dividir, (state, { numero }) => state / numero),
);

export function contadorReducer(state, action) {
  console.log('act', action);
  return _counterReducer(state, action);
}