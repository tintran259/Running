import api from '../index';

export const RankScreens = {
  Rank: () => {
    return api.call().get('/rank?type=day&page=1&limit= 10');
  },
  Statistical: ({ token }) => {
    return api.callAuth(token).get('/activity/get-activity?type=week');
  },
};
