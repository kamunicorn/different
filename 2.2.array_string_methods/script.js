let arr = ['3526', '43333', '123456', '732', '2356', '315487', '0248'];

for (let i = 0; i < arr.length; i++) {
	if (arr[i][0] == 7 || arr[i][0] == 3) {
		console.log('arr[' + i + '] = ' + arr[i]);
	}
}