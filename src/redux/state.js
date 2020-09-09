import {renderAllApp} from "../index";
import s from "../App.module.css";

const store = {

  renderAllApp() {
    console.log('renderAllApp сработал')
  },

  state: [
    {
      "id": 207,
      "name": "Устроиться в Яндекс",
      "iframeLink": null,
      "description": null,
      "created_at": "2020-08-29T00:18:53.504Z",
      "updated_at": "2020-08-29T00:18:53.504Z"
    },
    {
      "id": 211,
      "name": "Саня, все хорошо! Я все удалил:)",
      "iframeLink": null,
      "description": null,
      "created_at": "2020-08-29T01:37:32.440Z",
      "updated_at": "2020-08-29T01:37:32.440Z"
    },
    {
      "id": 212,
      "name": "Яндекс",
      "iframeLink": null,
      "description": null,
      "created_at": "2020-08-29T00:18:53.504Z",
      "updated_at": "2020-08-29T00:18:53.504Z"
    },
    {
      "id": 213,
      "name": "Я все удалил:)",
      "iframeLink": null,
      "description": null,
      "created_at": "2020-08-29T01:37:32.440Z",
      "updated_at": "2020-08-29T01:37:32.440Z"
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

  // addTask(text) {
  //   const newTask = {
  //     id: 207,
  //     name: text,
  //   }
  //   this.state.push(newTask)
  //   renderAllApp(this.state)
  // },
  subscribe(observer) {
    this.renderAllApp = observer;
  },

}
export default store