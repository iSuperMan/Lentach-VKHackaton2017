const host = 'http://local.lentach.com/api';

export default {
  TASKS_API: `${host}/tasks`,
  NEWS_API: `${host}/news`,
  AUTH_API: `${host}/users/auth/code`,
  USERS_API: `${host}/users/:id`,
  FILES_API: `${host}/containers/media/upload`,
};
