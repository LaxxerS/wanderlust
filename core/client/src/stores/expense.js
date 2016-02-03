import _ from 'lodash';

import stub from '../stubs/expense';

export default {
  stub,
  cache: {},

  state: {
    expenses: [stub],
  },

  init(budgets) {
    this.state.expenses = _.reduce(budgets, (expenses, budget) => {
      _.each(budget.expenses, expense => {
        this.cache[expense.id] = expense;
      })
      return expenses.concat(budget.expenses);
    }, []);
  },

  all() {
    return this.state.expense;
  },

  byId(id) {
    return this.cache[id];
  },

  byIds(ids) {
    return _.map(ids, id => this.byId(id));
  }
}
