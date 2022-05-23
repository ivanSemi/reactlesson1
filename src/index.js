import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {BrowserRouter} from "react-router-dom";
import {createStore} from "redux"
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const initalState = {
  count: 0
}
const reducer = (state = initalState, action) => {
  switch (action.type) {
    // case '',

    default:
      return state

  }
}
const store = createStore(reducer);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
          <App />
      </React.StrictMode>
  </BrowserRouter>
  </Provider>
);
