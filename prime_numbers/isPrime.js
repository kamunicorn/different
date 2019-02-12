function isPrime (num) {
	let base = Math.sqrt(num);
	for (let i = 2; i <= base; i++) {
	    if (num % i == 0) {
	        return false;
	    }
	}
	return true;
}

let text = '';
for (let n = 1; n <= 100; n++) {
	if (isPrime(n)) {
		text += 'Число ' + n + ' простое. Делители этого числа: 1 и ' + n + '</br>';
		// console.log('Число ' + n + ' простое. Делители этого числа: 1 и ' + n);
	} else {
		// console.log('Число ' + n + ' составное.');
	}
}
document.write(text);