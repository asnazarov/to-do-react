import React from 'react';
import s from './todoList.module.css';

function TodoListTitle() {

  return (
    <section className={s.todolist}>
      <h1 className={s.todolist__title} ><span className={s.todolist__titleItem}>To-do</span> List
      </h1>
    </section>
  );
}

export default TodoListTitle;