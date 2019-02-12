let arr = [20, 33, 1,'Человек', 2, 3],
	result = 0;

arr.forEach((elem) => {
	if (!isNaN(elem)) {
		result += elem ** 2;
	}
});

console.log(result);
