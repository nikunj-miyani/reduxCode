import {GET_USERS} from '../constants/actionType';
import Api from '../utils/api';

export function getUsers() {
  return async dispatch => {
    try {
      const res = await Api.GET('users');
      if (res) {
        dispatch({type: GET_USERS, payload: res});
        return {status: true, data: res};
      } else {
        return {status: false, message: 'Please check your respose!'};
      }
    } catch (error) {
      console.log('userLogin Error: ', error);
      return {status: false, message: 'Oops, Something Went Wrong'};
    }
  };
}
