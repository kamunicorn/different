let age = document.getElementById('age');

let alex = new User('Ivanov', 'Alex');
console.log(alex);

showUser2.call(age, 'Ivanov');
showUser.apply(age, ['Ivanov', 'Alex']);
// showUser.apply(age, ['Alekseev', 'Ivan']);

let result = showUserObj.bind(age);
// result(alex);

function User(surname, name) {
	this.surname = surname;
	this.name = name;
}

function showUser(surname, name) {
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

function showUser2(surname) {
    alert("Пользователь " + surname + ", его возраст " + this.value);
}

function showUserObj(obj) {
    alert("Пользователь " + obj.surname + " " + obj.name + ", его возраст " + this.value);
}