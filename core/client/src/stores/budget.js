import { assign } from 'lodash';

import stub from '../stubs/budget';
import expenseStore from './expense';

export default {
  stub,

  state: {
    budgets: [stub],
  },

  init(budgets) {
    assign(this.state, budgets);
    expenseStore.init(this.state.budgets);
  },

  all() {
    return this.state.budgets;
  }
}
