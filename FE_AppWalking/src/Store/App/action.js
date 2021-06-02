import { NAME_ACTION } from '../../Contants'

export const actShowLoading = () =>{
  return{
    type: NAME_ACTION.SHOW_LOADING
  }
}

export const actHideLoading = () =>{
  return{
    type: NAME_ACTION.HIDE_LOADING
  }
}

export const actLoginSuccess = () =>{
  return{
    type: NAME_ACTION.LOGIN_SUCCESS
  }
}

export const actLogoutSuccess = () =>{
  return{
    type: NAME_ACTION.LOGOUT_SUCCESS
  }
}