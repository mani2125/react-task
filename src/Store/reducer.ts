import { IState, IAction } from "./type"

export const initialState: IState = {
    loggedIn: false,
    token: "",
};

export const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'LOGIN': {
      return { ...state, loggedIn: action.payload };
    }
    case 'TOKEN': {
      return { ...state, token: action.payload };
    }
    default:
      return initialState;
  }
};
