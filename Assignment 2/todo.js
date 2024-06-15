// Step7: Write the function to create the password, check the password whether correct, add/remove/save/load tasks.
document.addEventListener("DOMContentLoaded", () => {
    const password = "correctpassword"; // Set your password here

    function checkPassword() {
        const userPassword = document.getElementById('password').value;
        const messageElement = document.getElementById('passwordMessage');

        if (userPassword === password) {
            messageElement.innerText = "Password correct. Access granted.";
            document.getElementById('login').style.display = 'none';
            document.getElementById('todoContainer').style.display = 'block';
        } else {
            messageElement.innerText = "Incorrect password. Try again.";
        }
    }

    function addTodo() {
        const newTodoText = document.getElementById('newTodo').value;
        if (newTodoText === "") {
            alert("Please enter a task.");
            return;
        }
        const newTodoItem = document.createElement('li');
        newTodoItem.innerText = newTodoText;
        newTodoItem.onclick = function () {
            this.remove();
        };
        document.getElementById('todoList').appendChild(newTodoItem);
        document.getElementById('newTodo').value = "";
    }

    function saveTodos() {
        const todoList = document.getElementById('todoList');
        const todos = [];
        for (let i = 0; i < todoList.children.length; i++) {
            todos.push(todoList.children[i].innerText);
        }
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function loadTodos() {
        const todos = JSON.parse(localStorage.getItem('todos'));
        if (todos) {
            const todoList = document.getElementById('todoList');
            todoList.innerHTML = '';
            for (const todo of todos) {
                const todoItem = document.createElement('li');
                todoItem.innerText = todo;
                todoItem.onclick = function () {
                    this.remove();
                };
                todoList.appendChild(todoItem);
            }
        }
    }

    window.checkPassword = checkPassword;
    window.addTodo = addTodo;
    window.saveTodos = saveTodos;
    window.loadTodos = loadTodos;
});
