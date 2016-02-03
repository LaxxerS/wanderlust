import { assign } from 'lodash';
import ls from '../services/ls';
import http from '../services/http';

import userStore from './user';
import budgetStore from './budget';
import colourStore from './colour';
import tagStore from './tag';

export default {
  state: {
    budgets: [],
    expenses: [],
    colours: [],
    tags: [],
    users: [],
    current: null
  },

  init(successCb = null, errorCb = null) {
    var id = ls.get('id');
    http.get(`data/${id}`, data => {
      assign(this.state, data);
      userStore.init(this.state.users, this.state.current);
      budgetStore.init(_.pick(this.state.current, ['budgets']));
      colourStore.init(this.state.colours);
      tagStore.init(_.pick(this.state.current, ['tags']));
    }, successCb, errorCb);
  }
}
