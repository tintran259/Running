import {NAME_ACTION} from '../../Contants';

const initialState = {
  isLoading: false,
  isLogin: false
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case NAME_ACTION.SHOW_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case NAME_ACTION.HIDE_LOADING:
      return{
        ...state,
        isLoading: false
      }
    case NAME_ACTION.LOGIN_SUCCESS:
      return{
        ...state,
        isLogin: true
      }
    default:
      return state;
  }
};

export default Reducer;
