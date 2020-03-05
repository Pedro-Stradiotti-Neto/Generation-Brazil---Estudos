var arrayTodo = [];

function TODO(desc, dDate) {
    this.description = desc;
    this.dueDate = dDate;
}

/* let obj = {"description":description, "dueDate": dueDate};    -> Outra forma de se criar/atribuir um objeto a variável
   
    let obj = {
   "description": description,         -> Utiliza-se "" para criar os rótulos das propriedades, nesse jeito de criação
   "dueDate": dueDate,
   "getData": () => {códigos}          -> Pode-se criar métodos dessa forma
}; */

function addTodoItem(todo) {
    var ul = document.getElementById("todosList");
    var li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(todo.description + " - " + todo.dueDate));
    ul.appendChild(li);
    arrayTodo.push(todo);
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
        showErrorMessage('Descrição e uma Data Obrigatórios!');
    }
    else if (!todo.description) {
        showErrorMessage('Descrição Obrigatória!');
    }
    else if (!todo.dueDate) {
        showErrorMessage('Data Obrigatória!');
    }
    else if (todo.description.length < 3) {
        showErrorMessage('Descrição com pelo menos três letras!');
    }
    else {
        return true;
    }
    return false;
}

function clearTodos() {
    arrayTodo = [];
    let ul = document.getElementById("todosList");
    ul.innerText = "";
    console.log(arrayTodo);

}
