var arrayTodo = [];

function TODO(desc, dDate) {
    this.description = desc;
    this.dueDate = dDate;
}

function addTodoItem(todo) {
    var ul = document.getElementById("todosList");
    var li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(todo.description + " - " + todo.dueDate));
    ul.appendChild(li);
    arrayTodo.push(new TODO(todo));

}

function showErrorMessage(message) {
    var alert = document.getElementById("alert");
    alert.innerHTML = message;
    alert.style.visibility = "visible";
}

function hideErrorMessage() {
    document.getElementById("alert").style.visibility = "hidden";
}

function onAddClicked() {
    var description = document.getElementById("description").value;
    var dueDate = document.getElementById("dueDate").value;
    console.log("description: " + description);
    console.log("dueDate: " + dueDate);
    let newTodo = new TODO(description, dueDate);
    if (validTodo(newTodo)) {
        addTodoItem(newTodo);
    }
    console.log(arrayTodo);
}

function validTodo(todo) {

    hideErrorMessage();

    if ((!todo.description) && (!todo.dueDate.value)) {
        showErrorMessage('Digite uma descrição e uma data!');
        return false;
    }

    if (!todo.description) {
        showErrorMessage('Digite uma descrição!');
        return false;
    }

    if (!todo.dueDate) {
        showErrorMessage('Digite uma data!');
        return false;
    }

    if (todo.description.length > 2) {
        return true;
    } else {
        showErrorMessage('Digite uma palavra com pelo menos três letras!');
    }

}

function clearTodos() {
    arrayTodo = [];
    document.getElementById("todosList").remove();
    console.log(arrayTodo);

}
