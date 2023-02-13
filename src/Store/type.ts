export type IState = {
    loggedIn: Boolean;
    token: string;
};

export type IAction = 
 | { type: 'LOGIN'; payload: boolean }
 | { type: 'TOKEN'; payload: string }
