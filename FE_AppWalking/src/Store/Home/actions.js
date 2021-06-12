import {Home} from '../../Services/Home';
import {actShowLoading, actHideLoading} from '../../Store/App/action';

export const asyncAddActivity = ({step, token, timeStart, timeEnd}) => {
  console.log(token);
  return async dispatch => {
    try {
      dispatch(actShowLoading());
      const reponse = await Home.Activity({step, token, timeStart, timeEnd});
      console.log('response:', reponse);
      dispatch(actHideLoading());
    } catch (error) {
      dispatch(actHideLoading());
    }
  };
};
