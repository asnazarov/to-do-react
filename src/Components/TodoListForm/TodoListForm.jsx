import React from 'react';
import s from './todoListForm.module.css'

function TodoListForm(props) {
  console.log(props)
  const newTaskElement = React.createRef()

  const onAddTask = (event) => {
    event.preventDefault();
    const text = newTaskElement.current.value
    const obj = {
      type: 'ADD_TASK',
      newText: text
    }
    props.dispatch(obj,text)
    props.isClosePopup();
    newTaskElement.current.value = "";
  }

  return (
    <div>
      <form className={s.todolistForm} onSubmit={onAddTask}>
        <input type="text" className={s.todolistForm_input} ref={newTaskElement} required/>
        <button  type="submit" className={s.todolistForm_submit}>Сохранить</button>
      </form>
    </div>

  );
}

export default TodoListForm;
