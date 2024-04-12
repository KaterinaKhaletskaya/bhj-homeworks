const tasksList = document.querySelector('.tasks__list');
const tasksAdd = document.getElementById('tasks__add');

tasksAdd.addEventListener('click', () => {

	const taskInput = document.getElementById('task__input');
	if (taskInput.value != "") {
		tasksList.insertAdjacentHTML("afterEnd",
			"<div class='task'><div class='task__title'></div><a href='#' class='task__remove'>&times;</a></div>"
		);
		const taskTitle = document.querySelector('.task__title');
		taskTitle.textContent = taskInput.value;
		taskInput.value = "";
	} else {
		alert('Введи задачу!');
	}

	let taskRemove = document.querySelector('a.task__remove');

	taskRemove.addEventListener('click', () => {
		let task = document.querySelector('.task');
		task.remove();
	})
})