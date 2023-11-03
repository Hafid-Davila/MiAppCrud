// Obtén la lista de tareas desde el almacenamiento local al cargar la página.
let tasks = JSON.parse(localStorage.getItem('tasks')) || []; 

// Función para mostrar las tareas en la lista.

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

        tasks.forEach((task, index) => {
            const li = document.createElement('li');


        const taskText = document.createElement('p');
        taskText.textContent = task;
        li.appendChild(taskText);

        const editButton = document.createElement('button');
            editButton.className = 'edit-button'; // Agrega la clase 'edit-button'
            editButton.textContent = 'Editar';
            editButton.onclick = () => editTask(index)

        const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-button'; // Agrega la clase 'delete-button'
            deleteButton.textContent = 'Borrar';
            deleteButton.onclick = () => deleteTask(index);

        li.appendChild(editButton);
        li.appendChild(deleteButton);

        taskList.appendChild(li);

    });

}

// Función para agregar una tarea.
function addTask() {
    const taskInput = document.getElementById('task');
    const newTask = taskInput.value;
    if (newTask) {
        tasks.push(newTask);
        taskInput.value = '';
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
    }
}

// Función para editar una tarea.
function editTask(index) {
    const updatedTask = prompt('Editar tarea', tasks[index]);
    if (updatedTask !== null) {
        tasks[index] = updatedTask;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
    }
}

// Función para borrar una tarea.
function deleteTask(index) {
    if (confirm('¿Estás seguro de que quieres borrar esta tarea?')) {
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
    }
}

// Mostrar tareas al cargar la página.
displayTasks();
