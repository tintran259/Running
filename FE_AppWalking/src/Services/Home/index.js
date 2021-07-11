import api from '../index';

export const Home = {
  Activity: ({ stepCount, tokenAsync, timeStart, timeEnd }) => {
    return api.callAuth(tokenAsync).post('/activity/add', {
      steps_number: stepCount,
      time_begin: timeStart,
      time_end: timeEnd,
    });
  },
};
