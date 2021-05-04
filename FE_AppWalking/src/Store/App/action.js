import { NAME_ACTION } from '../../Contants'


export const actHandleIsToggle = (isToggle) => {
   return {
      type: NAME_ACTION.HANDLE_ISTOGLE_DARK_LIGHT,
      payload: {
         isToggle
      }
   }
}