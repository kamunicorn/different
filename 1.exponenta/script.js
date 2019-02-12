"use strict";
    // Получаем число от пользователя
let num = prompt('Введите 5-разрядное число:', 33721),
	multiplication = num[0] * num[1] * num[2] * num[3] * num[4];
console.log(multiplication);

let exponenta = multiplication ** 3;
console.log(multiplication + ' в третьей степени = ' + exponenta);
let expString = exponenta+'';
console.log('первые два числа exponenta: ' + expString[0] + expString[1]);