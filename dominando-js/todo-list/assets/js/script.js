var list = document.getElementById('todo-list');

var input = document.getElementById('textInput')

input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('inputButton').click();
        input.value = '';
    }
})

function addTodo() {

    var div = document.createElement('div');
    var todo = document.createElement('input')
    var label = document.createElement('label');

    todo.type = 'checkBox';
    todo.className = 'checkBox';
    var text = document.createTextNode(input.value);
    div.appendChild(todo);

    label.appendChild(text);
    div.appendChild(label);

    list.appendChild(div);

}

function clearTodos() {
    list.innerHTML = '';
}