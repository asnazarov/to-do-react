import {renderAllApp} from "../index";

const store = {

  renderAllApp() {
    console.log('renderAllApp сработал')
  },

  state: [
    {
      "id": 207,
      "name": "Устроиться в ЭВРИКУ",
    },
    {
      "id": 211,
      "name": "одна из крупнейших IT-компаний в Санкт-Петербурге:)",
    },
    {
      "id": 212,
      "name": "ЭВРИКА:)",
    },
    {
      "id": 213,
      "name": "Разработка и создание комплексных информационных систем",
    },
    {
      "id": 214,
      "name": "существуем с 1990 года",
    }
  ],



  getState() {
    return this.state;
  },
  dispatch(action) {
    if (action.type = 'ADD_TASK') {
      const newTask = {
        id: this.state[this.state.length - 1].id + 1,
        name: action.newText,
      }
      this.state.push(newTask);
      renderAllApp(this.state);
    }
  },

   deleteTask (index) {   // store
    let arr = this.state
    arr.splice(index, 1);
    renderAllApp(this.state)
  },

  subscribe(observer) {
    this.renderAllApp = observer;
  },

}

export default store