/**
 * Add an eventListener for DOMContentLoaded. Then run our function main.
 */
document.addEventListener("DOMContentLoaded", main);

/**
 * Add a todo-item to our todo-list.
 */
function addTodoItem(todoLIST) {
    return function () {
        let itemToAdd = document.getElementById("todo-text").value;
        todoLIST.addTodoItem(itemToAdd);
        todoLIST.updateHTML();
    }
}

/**
 * Archives the checked boxes
 * @param {Object todoList} todoLIST 
 */
function archiveTodoItems(todoLIST) {
    return function () {
        let checkboxes = document.querySelectorAll("[id^='chkbox-id-']");
        let itemsToArchive = [];
        for (let checkbox of checkboxes) {
            if (checkbox.checked) {
                itemsToArchive = [...itemsToArchive, Number(checkbox.id.substr(10, 1))];
            }
        }

        todoLIST.archiveSelectedItems(itemsToArchive);
        todoLIST.updateHTML();
    }
}

function main() {
    let todoLIST = new todoList;
    document.getElementById("btnAddTodo").addEventListener("click", addTodoItem(todoLIST));
    document.getElementById("btnFinishTodo").addEventListener("click", archiveTodoItems(todoLIST));
}