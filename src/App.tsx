import React, { useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import Container from '@mui/material/Container';
import MenuList from "./Component/MenuList/MenuList";
import Router from "./Routes/routes"
import { AppContext, reducer, initialState } from "./Store"
import "./scss/styles.scss";

/**
 * Should render static header and footer
 * If authentication passed reder respective component
 * If auth failed it redirect to login page
*/
export const App = () => {
  const [store, dispatch ] = React.useReducer(reducer, initialState);
  useEffect(() => {
    const token = sessionStorage.getItem("token")
    if(token){
      dispatch({type: 'LOGIN', payload: true})
      dispatch({type: 'TOKEN', payload: token})
    }
  }, []);
  const providerState: any = {
    store,
    dispatch
  }
  return (
    <BrowserRouter>
      <AppContext.Provider value={providerState} >
        <div className="cl-app">
          <Container className="cl-app__container" fixed maxWidth="sm">
            <MenuList />
            <div className='cl-app__details'>
              <Router />
            </div>
          </Container>
        </div>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
