import { combineReducers } from 'redux';
import datos from '../data.json';

const initialState = {
  ...datos,
};

const hideShow = (menu) => {
  console.log(menu);
  if (menu.path[1].classList.contains('is-active')) {
    menu.path[1].classList.remove('is-active');
  } else {
    menu.path[1].classList.add('is-active');
  }
};

const validation = (event, burguerButton) => {
  if (event.matches) {
    burguerButton.addEventListener('click', hideShow);
  } else {
    burguerButton.removeEventListener('click', hideShow);
  }

  console.log('hola');
};

function data(state = { ...initialState }, action) {
  switch (action.type) {
    case 'ADD_CLASS': {
      // let menu = Array.from(state);
      // const ipad = window.matchMedia('screen and (max-width: 767px)');
      const query = action.payload.classL;
      const menu = document.querySelector('.menu');
      const burguerButton = document.querySelector('#burguer-menu');

      const media = window.matchMedia('screen and (max-width: 767px)');
      media.addListener(validation(query, burguerButton));
      console.log(media.addListener);

      // validation(, burguerButton);
      console.log(menu);
      console.log(burguerButton);

      // const copy = state.data;
      console.log(action.payload.classL);

      // console.log(copy);
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
