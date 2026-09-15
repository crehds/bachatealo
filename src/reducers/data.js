import { combineReducers } from 'redux';
import schema from '../schemas/index';

const initialState = {
  entities: schema.entities,
  sections: schema.result.sections,
};

function data(state = initialState) {
  // The store holds the normalized contents of data.json, which never change
  // at runtime. Returning the same reference keeps connected containers from
  // re-rendering on unrelated dispatches.
  return state;
}

const handle = combineReducers({
  data,
});

export default handle;
