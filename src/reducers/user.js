import {GET_USERS} from '../constants/actionType';

const initialState = {usersInfo: null};

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case GET_USERS: {
      return {
        ...state,
        usersInfo: action.payload,
      };
    }
    default:
      return state;
  }
}
