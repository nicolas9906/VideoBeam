import React from "react";
import { store } from './store/store';
import { AppRouters } from './AppRouters/AppRouters';
import { Provider } from "react-redux";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

export const  App = () => {
  return (
    <Provider store={ store }> 
         <AppRouters/>
         </Provider>

  );
}


