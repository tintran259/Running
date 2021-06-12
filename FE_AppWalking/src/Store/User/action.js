import {NAME_ACTION} from '../../Contants';

export const actGetInfoUser = data => {
  return {
    type: NAME_ACTION.GET_INFOR_USER,
    payload: {
      data,
    },
  };
};
