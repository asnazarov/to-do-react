import React from 'react';
import s from './todoList.module.css';
import Popup from "../Popup/Popup";

function TodoListTitle() {

  const showPopup = () => {
  return (
    <Popup />
  )
  }
  return (
    <section className={s.todolist}>
      <h1 className={s.todolist__title} onClick={showPopup}><span className={s.todolist__titleItem}>To-do</span> List
      </h1>
    </section>
  );
}

export default TodoListTitle;