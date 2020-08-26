import React from 'react';
import s from './todoListItem.module.css';
import logo from "../../logo.svg";


function TodoListItem(props) {
  const {text} = props;
  const date = new Date();
  const displayDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}   ${date.getHours()}:${date.getMinutes()}`
  return (
    <article className={s.todolistItem}>
      <div>
        <button className={s.todolistItem__copy}></button>
        <button className={s.todolistItem__del}></button>
      </div>
      <div className={s.todolistItem__wrapper}>
        <img className={s.todolistItem__logo} src={logo} alt=""/>
        <span className={s.todolistItem__text}>{text}</span>

      </div>
      <span className={s.todolistItem__date}>{displayDate}</span>

    </article>
  );
}

export default TodoListItem;
