import { NAME_ACTION } from '../../Contants'

const initialState = {
   isToggle: false
}


const Reducer = (state = initialState, action) => {
   switch (action.type) {
      case NAME_ACTION.HANDLE_ISTOGLE_DARK_LIGHT:
         return {
            ...state,
            isToggle: action.payload.isToggle
         }
      default:
         return state;
   }
}

export default Reducer