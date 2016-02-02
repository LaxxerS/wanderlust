import _ from 'lodash';

import stub from '../stubs/expense';

export default {
  stub,

  state: {
    expenses: [stub],
  },

  init(budgets) {
    console.log(budgets.budgets[0].expenses)
  }
}
