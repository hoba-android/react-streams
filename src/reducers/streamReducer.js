import _ from 'lodash';
import {
  EDIT_STREAM,
  CREATE_STREAM,
  DELETE_STREAM,
  FETCH_A_STREAM,
  FETCH_ALL_STREAMs,
} from '../actions/types';

// const INITIAL_STATE = {
//   isSignedIn: null,
//   userId: null,
// };

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
    case FETCH_A_STREAM:
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case DELETE_STREAM:
      _.omit(state, action.payload);

    case FETCH_ALL_STREAMs:
      return { ...state, ..._.mapKeys(action.payload, 'id') };

    default:
      return state;
  }
};
