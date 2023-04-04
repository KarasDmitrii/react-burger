import { useState } from 'react';
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { TRootState } from '..';


import { TApplicationActions } from '../utils/types';

type TinputValues = {
  [key: string]: string | undefined
}

export const useForm = (inputValues: TinputValues) => {
  const [values, setValues] = useState(inputValues);



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };
  return { values, handleChange, setValues };
}




export const useAppSelector: TypedUseSelectorHook<TRootState> = selectorHook;


export type AppThunk<ReturnType = void> = ThunkAction< ReturnType, TRootState, never, TApplicationActions >


type TypedDispatch<T> = ThunkDispatch<T, never, TApplicationActions>;

export function useDispatch() {return dispatchHook<TypedDispatch<TRootState>>();}

