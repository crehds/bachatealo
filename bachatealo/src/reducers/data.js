import { combineReducers } from 'redux';
import schema from '../schemas/index';

const initialState = {
  entities: schema.entities,
  sections: schema.result.sections,
};

const hideShow = async (menu) => {
  if (menu.classList.contains('is-active')) {
    await menu.classList.remove('is-active');
  } else {
    await menu.classList.add('is-active');
  }
};

const validation = async (event, burguerButton, classL) => {
  if (event.matches) {
    await burguerButton.addEventListener('click', hideShow(classL));
  } else {
    await burguerButton.removeEventListener('click', hideShow);
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
