import api from '../index';

export const Event = {
  ListEvent: ({token}) => {
    return api.callAuth(token).post('event/all?page=1 &limit=10');
  },
  EventWantJoined: ({token, event_id}) => {
    return api.callAuth(token).post(`/event/join/${event_id}`);
  },
  EventJoined: ({token}) => {
    return api.callAuth(token).post(`/event/joined`);
  },
};
