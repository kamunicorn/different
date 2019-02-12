function isNumeric(n) {
  	return !isNaN(parseFloat(n)) && isFinite(n);
}

let budgetOneDay,
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
}

let appData = {
    budget: money,
    timeData: time,
    expense: {},
    optionalExpense: {},
    income: [],
    savings: false,

    getExpense: function() {
        while (Object.keys(appData.expense).length < 2) {
            let key = prompt('Введите обязательную статью расходов в этом месяце', ''),
            value = prompt('Во сколько обойдется?', '');
            if (key != null && key != '' && isNumeric(value)) {
                appData.expense[key] = +value;
            } else {
                alert('Введена неверная пара ключ - значение:  "' + key + '" = "' + value + '"');
            }
        }
    },
    detectDayBudget: function() {
        budgetOneDay = Math.round(appData.budget / 30);
        alert('Бюджет на 1 день: ' + budgetOneDay);
    },
    /*detectLevel: function() {
        if (budgetOneDay < 300) {
            alert('Низкий уровень достатка :-(');
        } else if (budgetOneDay < 1000) {
            alert('Средний уровень достатка :-)');
        } else if (budgetOneDay >= 1000) {
            alert('Высокий уровень достатка ^_^');
        } else {
            alert('Неопознанный уровень достатка О_о')
        }
    },*/
    detectLevel: function() {
        switch (true) {
            case (budgetOneDay < 300):
                alert('Низкий уровень достатка :-(');
                break;
            case (budgetOneDay < 1000):
                alert('Средний уровень достатка :-)');
                break;
            case (budgetOneDay >= 1000):
                alert('Высокий уровень достатка ^_^');
                break;
            default:
                alert('Неопознанный уровень достатка О_о');
                break;
        }
    },
    chooseOptExpenses: function() {
        let i = 1;
        while (i <= 3) {
            answer = prompt('Статья необязательных расходов?', '');
            if (answer != null && answer != '' && !isFinite(answer)) {
                appData.optionalExpense[i] = answer;
                i++;
            } else {
                alert('Введено неверное значение: "' + answer + '"');
            }
        }
    },
    chooseIncome: function() {
            // Задаем этот вопрос, пока не получим удовлетворительный ответ
        let items;
        do {
            items = prompt('Что приносит вам дополнительный доход? Введите через запятую (без пробела).', '');
        } while (verifyStr(items) == true);

        appData.income = items.split(',');
        appData.income.push(prompt('Может еще что-нибудь?', ''));
        appData.income.sort();
        let incomeMessage = "Способы доп. заработка:\n";
        appData.income.forEach(function (item) {
            incomeMessage += item + '\n';
        });
        // incomeMessage += appData.income.join('; ');
        alert(incomeMessage);
    }
}

function verifyStr(str) {
        // возвращает true, если это число, или null, или ''
    return (isFinite(str) || str == '' || str == null);
    
}

console.log(appData);

appData.chooseOptExpenses();
appData.detectDayBudget();
appData.detectLevel();
appData.getExpense();
appData.chooseIncome();

console.log(appData);

console.log('Наша программа включает в себя данные:');
for (key in appData) {
    console.log(key + ' : ' + appData[key]);
}

/*for (let i = 0; i < 2; i++) {
    let key = prompt('Введите обязательную статью расходов в этом месяце'),
    value = prompt('Во сколько обойдется?');
        // Если строка (value) не является в точности числом, то результат перевода в число будет NaN
        // Функция isFinite(n) преобразует аргумент к числу и возвращает true, если это не NaN/Infinity
    if (key != null && key != '' && value != null && value != '' && isFinite(value)) {
        appData.expense[key] = value;
    } else {
        alert('Введена неверная пара ключ - значение:  "' + key + '" = "' + value + '"');
    }
}*/
/*do {
    let key = prompt('Введите обязательную статью расходов в этом месяце'),
    value = prompt('Во сколько обойдется?');
    if (key != null && key != '' && value != null && value != '' && isFinite(value)) {
        appData.expense[key] = value;
    } else {
        alert('Введена неверная пара ключ - значение:  "' + key + '" = "' + value + '"');
    }
} while (Object.keys(appData.expense).length < 2)*/