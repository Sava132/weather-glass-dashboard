// Конфигурация приложения
const taskApp = {
    tasks: [],
    
    // Метод добавления задачи
    addTask: (text) => {
        if (!text.trim()) return;
        
        const newTask = {
            id: Date.now(),
            content: text,
            status: 'active'
        };
        
        taskApp.tasks.push(newTask);
        taskApp.render();
    },

    // Метод удаления
    deleteTask: (id) => {
        taskApp.tasks = taskApp.tasks.filter(t => t.id !== id);
        taskApp.render();
    },

    // Отрисовка интерфейса
    render: () => {
        const list = document.getElementById('taskList');
        const count = document.getElementById('count');
        
        list.innerHTML = taskApp.tasks.map(task => `
            <li>
                <span>${task.content}</span>
                <span class="delete-btn" onclick="taskApp.deleteTask(${task.id})">Remove</span>
            </li>
        `).join('');
        
        count.innerText = taskApp.tasks.length;
    }
};

// Слушатель событий
document.getElementById('addBtn').addEventListener('click', () => {
    const input = document.getElementById('taskInput');
    taskApp.addTask(input.value);
    input.value = '';
});