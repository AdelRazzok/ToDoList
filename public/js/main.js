const currentDate = new Date();

function currentDayToString(currentDate) {
	const frDays = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
	return frDays[currentDate.getDay()];
}

function currentMonthToString(currentDate) {
	const frMonths = [
		'Janvier',
		'Février',
		'Mars',
		'Avril',
		'Mai',
		'Juin',
		'Juillet',
		'Août',
		'Septembre',
		'Octobre',
		'Novembre',
		'Décembre'
	]
	return frMonths[currentDate.getMonth()];
}

document.getElementById('dayNb').innerText   = currentDate.getUTCDate();
document.getElementById('month').innerText   = currentMonthToString(currentDate);
document.getElementById('year').innerText    = currentDate.getUTCFullYear();
document.getElementById('dayText').innerText = currentDayToString(currentDate);