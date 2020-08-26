import React from 'react';
import s from './todoListForm.module.css'

function TodoListForm() {
  return (
    <form className={s.todolistForm}>
      <input type="text" className={s.todolistForm_input}/>
      <button type="submit" className={s.todolistForm_submit}>Сохранить</button>
    </form>
  );
}

export default TodoListForm;
