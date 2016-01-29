var dataProvider = require('../models'),

  budgets;

budgets = {
  browse: function browse() {
    return dataProvider.Budget.findAll().then(function(budgets) {
      return {budgets: budgets};
    })
  }
}

module.exports = budgets;
