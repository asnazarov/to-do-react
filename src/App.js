import React, {useState} from 'react';
import axios from 'axios';
import s from './App.module.css';
import TodoListForm from "./Components/TodoListForm/TodoListForm";
import TodoListItem from "./Components/TodoListItem/TodoListItem";
import TodoListTitle from "./Components/TodoListTitle/TodoListTitle";
import close from "./images/close.svg";
import Popup from "./Components/Popup/Popup";


function App(props) {
  console.log(props)
  // const isClosePopup = () => {
  //   const addPopup = document.querySelector('#addPopup')
  //   props.store.closePopup(addPopup)
  // }
  //
  // const isOpenPopup = () => {
  //   const addPopup = document.querySelector('#addPopup')
  //   props.store.openPopup(addPopup)
  // }

  return (
    <div className={s.App}>
      <TodoListTitle/>
      <Popup state={props.store.state} dispatch={props.store.dispatch} />
      {/*<div>*/}
      {/*  <button onClick={isOpenPopup}>Добавить задачу</button>*/}
      {/*</div>*/}

      {/*<div id="addPopup" className={s.popup}>*/}
      {/*  <div className={s.popup__content}>*/}
      {/*    <img src={close} onClick={isClosePopup} className={s.popup__close}/>*/}
      {/*    <h3 className={s.popup__title}>Добавить задачу</h3>*/}
      {/*    <TodoListForm state={props.store.state}*/}
      {/*                  dispatch={props.store.dispatch} />*/}

      {/*  </div>*/}
      {/*</div>*/}

      <TodoListItem state={props.store.state}
                    store={props.store}

                    deleteTask={props.store.deleteTask} // в App.js
      />
    </div>
  );

}

export default App;
