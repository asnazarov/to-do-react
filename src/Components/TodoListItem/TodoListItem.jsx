import React from 'react';
import List from "./List/List";


function TodoListItem(props) {

  const taskElement = props.state.map((item, i) => <List
    // deleteTask={props.deleteTask}  // далее в компонент таски
    state={props.state}
    message={item.name}
    key={item.id}
    index={i}  //передаем индекс в компонент таски
  />)
  return (
    <div>
      {taskElement}
    </div>
  );
}

export default TodoListItem;
