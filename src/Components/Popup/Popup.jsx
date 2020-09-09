import React from "react";
import s from './popup.module.css';
import close from '../../images/close.svg';
import TodoListForm from "../TodoListForm/TodoListForm";

function Popup(props) {

  const isClosePopup = () => {
    const addPopup = document.querySelector('#addPopup')
    addPopup.classList.remove(`${s.popup__isActive}`)
    // props.store.closePopup(addPopup)
  }

  const isOpenPopup = () => {
    const addPopup = document.querySelector('#addPopup')
    addPopup.classList.add(`${s.popup__isActive}`)
  }
  return (
    <div>

        <button className={s.popupOpen} onClick={isOpenPopup}>Добавить задачу</button>

      <div id="addPopup" className={s.popup}>
        <div className={s.popup__content}>
          <img src={close} onClick={isClosePopup} className={s.popup__close}/>
          {/*<img src={close} className={s.popup__close}/>*/}
          <h3 className={s.popup__title}>Добавить задачу</h3>
          <TodoListForm state={props.state}
                        dispatch={props.dispatch}
                        isClosePopup={isClosePopup}
          />
        </div>
      </div>
    </div>
  )
}


// function Popup () {
//   return (
//     <div id="addUserPopup" className="popup">
//       <div className="popup__content">
//         {/*<img src="<%=require('./images/close.svg')%>" alt="" className="popup__close">*/}
//           <h3 className="popup__title">Редактировать профиль</h3>
//           {/*<form className="popup__form form-addUser" noValidate name="new">*/}
//           {/*  <div className="input-container ">*/}
//           {/*    <input id="name" type="text" minLength="2" maxLength="30" name="name" required*/}
//           {/*           className="popup__input popup__input_type_name" placeholder="Имя">*/}
//           {/*      <span id="name-error" className="error"></span>*/}
//           {/*  </div>*/}
//           {/*  <div className="input-container ">*/}
//           {/*    <input id="job" type="text" minLength="2" maxLength="30" name="job" required*/}
//           {/*           className="popup__input popup__input_type_job" placeholder="О себе">*/}
//           {/*      <!-- <span id="error-job" class="error-message error-message__hidden"></span> -->*/}
//           {/*      <span id="job-error" className="error"></span>*/}
//           {/*  </div>*/}
//           {/*  <button id="submit" type='submit' className="button popup__button popup__button_user">Сохранить</button>*/}
//           {/*</form>*/}
//       </div>
//     </div>
//   )
// }

export default Popup