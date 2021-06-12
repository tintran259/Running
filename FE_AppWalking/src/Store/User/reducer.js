import {NAME_ACTION} from '../../Contants';

const initalState = {
  infoUser: '',
};

const Reducer = (state = initalState, action) => {
  switch (action.type) {
    case NAME_ACTION.GET_INFOR_USER:
      return {
        ...state,
        inforUser: action.payload.data,
      };
      break;

    default:
      break;
  }
  return state;
};

export default Reducer;
