import api from '../index';

export const Home = {
  Activity: ({step, token, timeStart, timeEnd}) => {
    return api.callAuth(token).post('/activity/add', {
      steps_number: step,
      time_begin: timeStart,
      time_end: timeEnd,
    });
  },
};
