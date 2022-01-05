const currentDate = new Date();

function currentDayToString(currentDate) {
	const currentDay = currentDate.getDay();
	const frDays = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

	return frDays[currentDay];
}

dayText.innerHTML = currentDayToString(currentDate);