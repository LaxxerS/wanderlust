import _ from 'lodash';
import http from '../services/http';

import stub from '../stubs/user';

export default {
  stub,

  state: {
    users: [],
    current: stub
  },

  current(user = null) {
    if(user) {
      this.state.current = user;
    }

    return this.state.current;
  },
  
  login(username, password, successCb = null, errorCb = null) {
    http.post('authentications', { username, password }, successCb, errorCb);
  },

}
