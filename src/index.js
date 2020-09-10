import React from 'react';
import ReactDOM from 'react-dom';
import './vendor/fonts.css';
import './vendor/normalize.css';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
// import state from './redux/state'
import store from "./redux/state";

export const renderAllApp = (state) => {

  ReactDOM.render(
    <BrowserRouter>
      <App
        store={store}
      />
    </BrowserRouter>,
    document.getElementById('root')
  );
}
renderAllApp(store.getState())
store.subscribe(() => {
  let state = store.getState()
  renderAllApp(state)
}) // перерисовка дерева при изменении state