import { NAME_ACTION } from '../../Contants';
import { RankScreens } from '../../Services/Rank';
import { actHideLoading, actShowLoading } from '../App/action';

export const actGetListRank = data => {
  return {
    type: NAME_ACTION.GET_LIST_RANK,
    payload: {
      data,
    },
  };
};

export const actGetStatistical = data => {
  return {
    type: NAME_ACTION.GET_STATISTICAL,
    payload: {
      data,
    },
  };
};

export const asyncGetListRank = () => {
  return async dispatch => {
    try {
      dispatch(actShowLoading());
      const response = await RankScreens.Rank();
      const { data } = response;
      dispatch(actHideLoading());
      if (data.status === 'success') {
        dispatch(actGetListRank(data.data));
      }
    } catch (error) {
      dispatch(actHideLoading());
      console.log('error:', error);
    }
  };
};

export const asyncGetStatistical = ({ token }) => {
  return async dispatch => {
    try {
      dispatch(actShowLoading());
      const response = await RankScreens.Statistical({ token });
      const { data } = response;
      dispatch(actHideLoading());
      if (data.status === 'success') {
        dispatch(actGetStatistical(data.data));
      }
    } catch (error) {
      dispatch(actHideLoading());
      console.log('error:', error);
    }
  };
};
