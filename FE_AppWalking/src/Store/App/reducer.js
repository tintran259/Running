import {NAME_ACTION} from '../../Contants';

const initialState = {
  isLoading: false,
  isLogin: false,
  isRank: '',
  isChart: '',
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case NAME_ACTION.SHOW_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case NAME_ACTION.HIDE_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case NAME_ACTION.LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
      };
    case NAME_ACTION.LOGOUT_SUCCESS:
      return {
        ...state,
        isLogin: false,
      };
    case NAME_ACTION.HANDLE_CHART:
      return {
        ...state,
        isChart: Math.random(),
      };
    case NAME_ACTION.HANDLE_RANK:
      return {
        ...state,
        isRank: Math.random(),
      };
    default:
      return state;
  }
};

export default Reducer;
