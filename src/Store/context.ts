import React from 'react';
import { initialState } from "./reducer"
import { IState, IAction } from './type';

export interface IContextProps {
  store: IState;
  dispatch:React.Dispatch<IAction>
}

const AppContext = React.createContext({} as IContextProps);

export function useAppContext() {
  return React.useContext(AppContext);
}

export default AppContext;