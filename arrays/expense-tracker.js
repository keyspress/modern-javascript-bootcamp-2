const account = {
  name: 'Kyle Spresser',
  expenses: [],
  income: [],
  addExpense: function(description, amount) {
    this.expenses.push({
      description,
      amount
    });
  },
  addIncome: function(description, amount) {
    this.income.push({
      description,
      amount
    });
  },
  getAccountSummary: function() {
    let totalExpenses = 0;
    let totalIncome = 0;
    this.expenses.forEach(expense => {
      totalExpenses = totalExpenses + expense.amount;
    });
    this.income.forEach(income => {
      totalIncome = totalIncome + income.amount;
    });
    return `${this.name} has a balance of $${totalIncome -
      totalExpenses}. $${totalIncome} in income. $${totalExpenses} in expenses.`;
  }
};

account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.addIncome('Job', 1000);
console.log(account.getAccountSummary());
