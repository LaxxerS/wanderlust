var dataProvider = require('../models'),
  _ = require('lodash'),

  expenses;

expenses = {
  browse: function browse() {
    return dataProvider.Expense.findAll().then(function(expenses) {
      var i = 0,
        omitted = {};

      if (expenses) {
        omitted = expenses.toJSON();
      }

      for (i; i < omitted.length; i = i + 1) {
        omitted[i].user = _.omit(omitted[i].user, ['password']);
      }

      return {
        expenses: omitted
      };
    })
  },

  read: function(args) {
    return dataProvider.Expense.findOne(args).then(function(expense) {
      var omitted;

      if (expense) {
        omitted = expense.toJSON();
        omitted.user = _.omit(omitted.user, ['password']);
        return {
          expense: expense
        };
      }
    });
  }
}

module.exports = expenses;
