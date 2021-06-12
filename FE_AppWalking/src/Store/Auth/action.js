import {NAME_ACTION} from '../../Contants';
import {Authentization} from '../../Services/Auth';
import {actShowLoading, actHideLoading} from '../../Store/App/action';
import {actGetInfoUser} from '../../Store/User/action';
import {Storage} from '../../Helper';

export const actGetToken = token => {
  return {
    type: NAME_ACTION.GET_TOKEN,
    payload: {
      token,
    },
  };
};

export const asyncRegister = ({
  email,
  firstname,
  lastname,
  gender,
  birthday,
  phone,
  address,
  password,
}) => {
  return async dispatch => {
    try {
      dispatch(actShowLoading());
      const response = await Authentization.Register({
        email,
        firstname,
        lastname,
        gender,
        birthday,
        phone,
        address,
        password,
      });
      dispatch(actHideLoading());
      console.log('response:', response.data.message);
      const {data} = response;
      if (data.status === 'success') {
        return {
          ok: true,
        };
      } else {
        return {
          ok: false,
          data: 'Email đã tồn tại !',
        };
      }
    } catch (error) {
      dispatch(actHideLoading());
      console.log('error', error);
    }
  };
};
export const asyncLogin = ({username, password}) => {
  return async dispatch => {
    try {
      dispatch(actShowLoading());
      const response = await Authentization.Login({username, password});
      console.log('response:', response);
      dispatch(actHideLoading());
      const {data} = response;
      if (data.data) {
        const token = data.data.accessToken;
        const inforUser = data.data.info;
        dispatch(actGetInfoUser(inforUser));
        dispatch(actGetToken(token));
        Storage.setToken(token);
        return {
          ok: true,
          inforUser,
        };
      } else {
        dispatch(actHideLoading());
        return {
          ok: false,
        };
      }
    } catch (error) {
      dispatch(actHideLoading());
      console.log('error', error);
      return {
        ok: false,
      };
    }
  };
};
