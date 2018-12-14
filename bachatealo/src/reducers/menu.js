import { combineReducers } from 'redux';
import datos from '../data.json';

const initialState = {
  ...datos,
};

const hideShow = (menu) => {
  if (menu.classList.contains('is-active')) {
    menu.classList.remove('is-active');
  } else {
    menu.classList.add('is-active');
  }
};

const validation = (event, burguerButton, classL) => {
  console.log(classL);
  if (event.matches) {
    burguerButton.addEventListener('click', hideShow(classL));
  } else {
    burguerButton.removeEventListener('click', hideShow);
  }

};

function data(state = { ...initialState }, action) {
  switch (action.type) {
    case 'ADD_CLASS': {

      const burguerButton = document.querySelector('#burguer-menu');
      const media = window.matchMedia('screen and (max-width: 767px)');

      validation(media, burguerButton, action.payload.classL);

      return {
        ...state,
      };
    }

    default:
      return {
        ...state,
      };
  }
}

const handle = combineReducers({
  data,
});

export default handle;
