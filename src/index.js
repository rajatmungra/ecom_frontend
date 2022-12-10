import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore } from 'redux';
import App from './App';
import reducer from './Redux/Reducer/reducer';
import thunk from 'redux-thunk';
import { GoogleOAuthProvider } from '@react-oauth/google';
const clientid = '429656974916-th46reibifcema4hsae20ss637ap26oc.apps.googleusercontent.com' 

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer, applyMiddleware(thunk))
root.render(
  <Provider store={store}>
       <GoogleOAuthProvider clientId={clientid}>
        <App />
      </GoogleOAuthProvider>
    </Provider>
 
);

