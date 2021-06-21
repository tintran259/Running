import { NAME_ACTION } from '../../Contants';
import { Event } from '../../Services/Event';
import { actHideLoading, actShowLoading } from '../App/action';

export const actGetListEvent = data => {
  return {
    type: NAME_ACTION.GET_LIST_EVENT,
    payload: {
      data,
    },
  };
};

export const actGetListEventJoined = data => {
  return {
    type: NAME_ACTION.GET_LIST_EVENT_JOINED,
    payload: {
      data,
    },
  };
};

export const actGetEventDetail = data => {
  return {
    type: NAME_ACTION.GET_EVENT_DETAIL,
    payload: {
      data,
    }
  }
}

export const asyncGetListEvent = ({ token }) => {
  return async dispatch => {
    try {
      const response = await Event.ListEvent({ token });
      const { data } = response;
      if (data.status === 'success') {
        console.log('data:', data);
        dispatch(actGetListEvent(data.data));
      }
    } catch (error) {
      console.log('error:', error);
    }
  };
};

export const asyncJoinEvent = ({ token, event_id }) => {
  return async dispatch => {
    try {
      dispatch(actShowLoading());
      const response = await Event.EventWantJoined({ token, event_id });
      console.log(response);
      dispatch(actHideLoading());
    } catch (error) {
      console.log(error);
      dispatch(actHideLoading());
    }
  };
};
export const asyncEventDetails = ({ event_id }) => {
  return async dispatch => {
    try {
      dispatch(actShowLoading());
      const response = await Event.EventDetail({ event_id });
      console.log("response:", response);
      const { data } = response;
      if (data.status === 'success') {
        dispatch(actGetEventDetail(data.data));
      }
      dispatch(actHideLoading());
    } catch (error) {
      console.log(error);
      dispatch(actHideLoading());
    }
  };
};

export const asynceListEventJoined = ({ token }) => {
  return async dispatch => {
    try {
      dispatch(actShowLoading());
      const response = await Event.EventJoined({ token });
      const { data } = response;
      if (data.status === 'success') {
        dispatch(actGetListEventJoined(data.data));
      }
      dispatch(actHideLoading());
    } catch (error) {
      console.log(error);
      dispatch(actHideLoading());
    }
  };
};
