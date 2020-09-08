import React, {useState} from 'react';
import axios from 'axios';
import s from './App.module.css';
import TodoListForm from "./Components/TodoListForm/TodoListForm";
import TodoListItem from "./Components/TodoListItem/TodoListItem";
import TodoListTitle from "./Components/TodoListTitle/TodoListTitle";


function App(props) {
  console.log(props.store.state)
  return (
    <div className={s.App}>
      <TodoListTitle/>
      <TodoListForm state={props.store.state}
                    dispatch={props.store.dispatch}
      />
      <TodoListItem state={props.store.state}
                    store={props.store}

                    deleteTask={props.store.deleteTask} // в App.js
      />
    </div>
  );

}

export default App;
