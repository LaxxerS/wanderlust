import _ from 'lodash';

import stub from '../stubs/budget';
import expenseStore from './expense';

export default {
  stub,

  state: {
    budgets: [],
  },

  init(budgets) {
    this.state.budgets = budgets;
    expenseStore.init(this.state.budgets);
  }
}
