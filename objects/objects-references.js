let myAccount = {
  name: 'Kyle Spresser',
  expenses: 0,
  income: 0
};

let addExpense = function(account, amount) {
  account.expenses = myAccount.expenses + amount;
};

let addIncome = function(account, amount) {
  account.income = myAccount.income + amount;
};

let resetAccount = function(account) {
  account.expenses = 0;
  account.income = 0;
};

let getAccountSummary = function(account) {
  let balance = account.income - account.expenses;
  return `Account for ${account.name} has $${balance.toFixed(
    2
  )}. $${account.income.toFixed(2)} in income. $${account.expenses.toFixed(
    2
  )} in expenses.`;
};

addIncome(myAccount, 100);
addExpense(myAccount, 2.5);

console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));

// console.log(myAccount);
