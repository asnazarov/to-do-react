import React from 'react';
import s from './App.module.css';
import TodoList from "./Components/TodoList/TodoList";
import TodoListForm from "./Components/TodoListForm/TodoListForm";
import TodoListItem from "./Components/TodoListItem/TodoListItem";

function App(props) {

  return (
    <div className={s.App}>
      <TodoList />
      <TodoListForm />
      <TodoListItem text="Выравнивание текста по левому краю. В этом случае строки текста выравнивается по левому краю, а правый край располагается «лесенкой». Такой способ выравнивания является наиболее популярным" />
      {/*<TodoListItem text="Выравнивание текста по левому краю. В этом случае строки" />*/}
    <TodoListItem text="Ghbdtn" />
    </div>
  );
}

export default App;
