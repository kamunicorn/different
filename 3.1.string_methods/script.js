let str = 'урок-3-был слишком легким';

str = str.replace(/-/g, ' ');
console.log(str);

str = str.slice(0, str.indexOf('легким'));
console.log(str);

let s2 = 'легким'.slice(0, -2) + 'o';
console.log(s2);