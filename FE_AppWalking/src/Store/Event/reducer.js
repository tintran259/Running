import {NAME_ACTION} from '../../Contants';

const initialState = {
  listEvent: [],
  listEventJoined: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NAME_ACTION.GET_LIST_EVENT:
      return {
        ...state,
        listEvent: action.payload.data,
      };
    case NAME_ACTION.GET_LIST_EVENT_JOINED:
      return {
        ...state,
        listEventJoined: action.payload.data,
      };
    default:
      return state;
  }
};

export default reducer;
