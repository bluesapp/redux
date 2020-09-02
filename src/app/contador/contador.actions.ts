import { createAction, props } from '@ngrx/store';

export const incrementar = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
export const multiplicar = createAction(
    '[Counter Component] Multiplicar',
    props<{ numero: number }>()
);
export const dividir = createAction(
    '[Counter Component] Dividir',
    props<{ numero: number }>()
);