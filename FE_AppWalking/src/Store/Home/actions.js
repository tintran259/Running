import { Home } from '../../Services/Home';
import { actShowLoading, actHideLoading } from '../../Store/App/action';

export const asyncAddActivity = ({ stepCount, tokenAsync, timeStart, timeEnd }) => {
  return async dispatch => {
    try {
      dispatch(actShowLoading());
      const reponse = await Home.Activity({ stepCount, tokenAsync, timeStart, timeEnd });
      const { data } = reponse;
      if (data.status === 'success') {
        dispatch(actHideLoading());
        return {
          ok: true,
        };
      }
      dispatch(actHideLoading());
      return {
        ok: false,
      };
    } catch (error) {
      dispatch(actHideLoading());
      return {
        ok: false,
      };
    }
  };
};
