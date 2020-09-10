import React from 'react';
import List from "./List/List";
import axios from 'axios';


function TodoListItem(props) {

// const componentDidMount = () => {
//     axios.get('https://api-test.pa7lux.ru/streams/')
//       .then(res => {
//         console.log(res.data)
//       })
//   }

  const taskElement = props.state.map((item, i) => <List
    deleteTask={props.deleteTask}  // далее в компонент таски
    state={props.state}
    message={item.name}
    dispatch={props.store.dispatch}
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
