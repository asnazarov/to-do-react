import React from 'react';
import logo from "../../../logo.svg";
import s from './list.module.css'

function List(props) {
  const {message} = props;

  const callDeleteTask = () => {  // onClick
    props.deleteTask(props.index)
  }

  return (
    <article className={s.list}>
        <button className={s.list__del} onClick={callDeleteTask}></button>
      <div className={s.list__wrapper}>
        <img className={s.list__logo} src={logo} alt=""/>
        <span className={s.list__text}>{message}</span>
      </div>
    </article>
  );
}

export default List;