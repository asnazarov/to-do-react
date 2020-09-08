import React from 'react';
import ReactDOM from 'react-dom';
import './vendor/fonts.css';
import './vendor/normalize.css';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
// import state from './redux/state'
import store from "./redux/state";
import {addTask} from './redux/state'

export const renderAllApp = (state) => {

  ReactDOM.render(
    <BrowserRouter>
      <App
        store={store}
        // dispatch={store.dispatch.bind(store)}
        // addTask={store.addTask.bind(store)}
        // state={state}
      />
    </BrowserRouter>,
    document.getElementById('root')
  );
}
renderAllApp(store.getState())
store.subscribe(() => {
  let state = store.getState()
  renderAllApp(state)
})
// перерисовка дерева при изменении state