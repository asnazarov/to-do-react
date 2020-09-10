import React, {useState} from 'react';
import s from './App.module.css';
import TodoListItem from "./Components/TodoListItem/TodoListItem";
import TodoListTitle from "./Components/TodoListTitle/TodoListTitle";
import Popup from "./Components/Popup/Popup";


function App(props) {
  console.log(props)

  return (
    <div className={s.App}>
      <TodoListTitle/>
      <Popup state={props.store.state} dispatch={props.store.dispatch} />
      <TodoListItem state={props.store.state}
                    store={props.store}
                    dispatch={props.store.dispatch}
                    deleteTask={props.store.deleteTask} // в App.js
      />
    </div>
  );
}

export default App;
