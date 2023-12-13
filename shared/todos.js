function createTodo(todo) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('todo-title');
    titleDiv.textContent = todo.title;

    if (todo.completed) {
        titleDiv.textContent = '✅ ' + titleDiv.textContent;
        todoDiv.classList.add('todo-completed');
    } else {
        titleDiv.textContent = '❌ ' + titleDiv.textContent;
        todoDiv.classList.add('todo-not-completed');
    }

    todoDiv.appendChild(titleDiv);

    return todoDiv;
}

function displayTodo(todo) {
    const allTodosDiv = document.querySelector('.todos');

    const todoDiv = createTodo(todo);

    allTodosDiv.appendChild(todoDiv);
}

function displayTodos(todos) {
    const allTodosDiv = document.querySelector('.todos');

    todos.forEach((todo) => {
        const todoDiv = createTodo(todo);
        allTodosDiv.appendChild(todoDiv);
    });
}
