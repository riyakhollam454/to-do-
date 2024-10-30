// Get references to DOM elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const descriptionInput = document.getElementById('description-input');
const dueDateInput = document.getElementById('due-date');
const taskList = document.getElementById('task-list');

// Event listener for task form submission
taskForm.addEventListener('submit', addTask);

function addTask(event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();
    const taskDescription = descriptionInput.value.trim();
    const taskDueDate = dueDateInput.value;

    if (!taskText) return;

    const task = document.createElement('div');
    task.classList.add('task');

    const taskInfo = document.createElement('div');
    taskInfo.classList.add('task-info');
    taskInfo.innerHTML = `
        <strong>${taskText}</strong> <br>
        <small>${taskDescription}</small> <br>
        <small>${taskDueDate}</small>
    `;

    const taskButtons = document.createElement('div');
    taskButtons.classList.add('task-buttons');

    const completeButton = document.createElement('button');
    completeButton.classList.add('complete');
    completeButton.textContent = '✓';
    completeButton.addEventListener('click', () => {
        task.classList.toggle('complete');
    });

    const editButton = document.createElement('button');
    editButton.classList.add('edit');
    editButton.textContent = '✏️';
    editButton.addEventListener('click', () => {
        taskInput.value = taskText;
        descriptionInput.value = taskDescription;
        dueDateInput.value = taskDueDate;
        task.remove();
    });

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.textContent = '🗑️';
    deleteButton.addEventListener('click', () => {
        task.remove();
    });

    taskButtons.appendChild(completeButton);
    taskButtons.appendChild(editButton);
    taskButtons.appendChild(deleteButton);

    task.appendChild(taskInfo);
    task.appendChild(taskButtons);
    taskList.appendChild(task);

    taskInput.value = '';
    descriptionInput.value = '';
    dueDateInput.value = '';
}
