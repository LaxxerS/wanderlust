import _ from 'lodash';
import http from '../services/http';

import stub from '../stubs/user';
import budgetStore from './budget';

export default {
  stub,

  state: {
    users: [],
    current: stub
  },

  init(users, current) {
      this.state.users = users;
      this.state.current = current;
  },

  login(username, password, successCb = null, errorCb = null) {
    http.post('authentications', { username, password }, successCb, errorCb);
  },

}
