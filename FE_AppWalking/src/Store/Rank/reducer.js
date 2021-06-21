import {NAME_ACTION} from '../../Contants';

const initialState = {
  rankList: [],
  statistical: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NAME_ACTION.GET_LIST_RANK:
      return {
        ...state,
        rankList: action.payload.data,
      };
    case NAME_ACTION.GET_STATISTICAL:
      return {
        ...state,
        statistical: action.payload.data,
      };
    default:
      return state;
  }
};

export default reducer;
