import { assign } from 'lodash';

import http from '../services/http';

export default {
  state: {
    users: []
  },

  init(successCb = null, errorCb = null) {
    http.get('users', data => {
      assign(this.state, data);
    }, successCb, errorCb);
  }
}
