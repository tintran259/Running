import { NAME_ACTION } from '../../Contants';
import { Storage } from '../../Helper';

const initialState = {
  token: Storage.getToken() || '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NAME_ACTION.GET_TOKEN:
      return {
        ...state,
        token: action.payload.token,
      };
    default:
      return state;
  }
};

export default reducer;
