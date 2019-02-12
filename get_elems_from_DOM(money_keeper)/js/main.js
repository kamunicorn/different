let expensesInps = document.getElementsByClassName('expenses-item'),
	optionalExpensesInps = document.querySelectorAll('.optionalexpenses-item'),
	incomeInp = document.querySelector('#income'),
	savingsChekbox = document.querySelector('#savings'),
	savingsSumInp = document.querySelector('#sum'),
	savingsPercentInp = document.querySelector('#percent'),

		// Получение кнопок
	expensesBtn = document.getElementsByTagName('button')[0],	// Кнопка Утвердить обязательные расходы
	optionalExpensesBtn = document.getElementsByTagName('button')[1],	// Кнопка Утвердить необязательные расходы
	countBudgetBtn = document.getElementsByTagName('button')[2],	// Кнопка Рассчитать (дневной бюджет)
	startBtn = document.getElementById('start'),	// Кнопка Начать расчет

		// Указанная дата - год, месяц, день (внизу справа)
	yearValue = document.querySelector('.year-value');
	monthValue = document.querySelector('.month-value');
	dayValue = document.querySelector('.day-value'),

		// Получение дивов, в которые выводятся результаты подсчетов
	budgetResult = document.getElementsByClassName('budget-value')[0],
	dayBudgetResult = document.getElementsByClassName('daybudget-value')[0],
	levelResult = document.getElementsByClassName('level-value')[0],
	expensesResult = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesResult = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeResult = document.getElementsByClassName('income-value')[0],
	monthSavingsResult = document.getElementsByClassName('monthsavings-value')[0],
	yearSavingsResult = document.getElementsByClassName('yearsavings-value')[0];

console.log(expensesInps);
console.log(optionalExpensesInps);

console.log(incomeInp);
console.log(savingsChekbox);
console.log(savingsSumInp);
console.log(savingsPercentInp);

console.log(startBtn);
console.log(expensesBtn);
console.log(optionalExpensesBtn);
console.log(countBudgetBtn);

console.log(yearValue);
console.log(monthValue);
console.log(dayValue);

console.log(budgetResult);
console.log(dayBudgetResult);
console.log(levelResult);
console.log(expensesResult);
console.log(optionalExpensesResult);
console.log(incomeResult);
console.log(monthSavingsResult);
console.log(yearSavingsResult);
