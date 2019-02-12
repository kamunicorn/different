function fun(arg) {
	if (typeof(arg) != 'string') {
		console.log('Не строка: ' + arg);
	}
	console.log('Тип данных arg: ' + typeof(arg));
	
	if (typeof(arg) == 'string') {
		let s = arg.trim();
		console.log("Убраны пробелы: '" + s + "'");
		if (s.length > 50) {
			console.log('');
			console.log('s.length = ' + s.length);
			s = s.slice(0, 50) + '...';
			console.log('Обрезано до 50-го символа: ' + s);
			console.log('s.length = ' + s.length);
		}
	}
	console.log('');
}

fun(1);
fun(null);
fun([]);
fun('Самая опасная и адреналиновая гонка на спортивных автомобилях во вселенной проводится раз в пять лет. И это случится сегодня. JP, гонщик-сорвиголова, занял свою позицию на старте. Гонщица Соноши, в которую тайно влюблен JP, тоже здесь в эту ночь. В этой гонке разрешено абсолютно все, а машины оборудованы современным оружием.');