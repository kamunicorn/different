let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
	weekStr = '',
	todayIndex = 2;


for (i = 0; i < week.length; i++) {
	switch (i) {
		case todayIndex:
			weekStr += '<i>' + week[i] + '</i><br>';
			break;
		case 5: case 6: 
			weekStr += '<b>' + week[i] + '</b><br>';
			break;
		default: 
			weekStr += week[i] + '<br>';
			break;
	};
};

console.log(weekStr);
document.getElementById('week').innerHTML = weekStr;
