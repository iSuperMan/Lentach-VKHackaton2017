const host = 'https://wavemeup.me/api';

export default {
  TASKS_API: `${host}/tasks`,
  NEWS_API: `${host}/news?filter=%7B%22include%22%3A%5B%22task%22%2C%20%22user%22%5D%7D`,
  NEWS_VOTEUP_API: `${host}/news/voteUp`,
  NEWS_VOTEDOWN_API: `${host}/news/voteDown`,
  AUTH_API: `${host}/users/auth/code`,
  USERS_API: `${host}/users/:id`,
  SET_WALLET_API: `${host}/users/setWallet`,
  FILES_API: `${host}/containers/media/upload`,
};
