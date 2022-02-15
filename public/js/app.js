// Task list handling
const taskList = document.querySelector('.task_list');
const modalInput = document.querySelector('.modal_input');
const validateBtn = document.querySelector('.modal_validate');

function addTask() {
	const newLi = document.createElement('li');
	const newTask = document.createTextNode(modalInput.value);
	newLi.appendChild(newTask);
	taskList.appendChild(newLi);
	modalInput.value = '';
}

validateBtn.addEventListener('click', addTask);