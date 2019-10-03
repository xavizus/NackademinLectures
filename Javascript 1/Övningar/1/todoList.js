class todoList {
    constructor() {
        this.todoItems = [];
        this.itemId = 0;
    }

    addTodoItem(title) {
        this.itemId++;
        this.todoItems = [...this.todoItems, new TodoItem(this.itemId, title)];
    }

    findItemIdIndex(itemToFind) {

        for (let todoItemIndex in this.todoItems) {
            if (this.todoItems[todoItemIndex].itemId === itemToFind) {
                return todoItemIndex
            }
        }
        return false;
    }

    archiveSelectedItems(selectedItemsIds) {
        selectedItemsIds.forEach(selectedItemId => {
            let itemIndex = this.findItemIdIndex(selectedItemId);
            if (itemIndex !== false) {
                this.todoItems[itemIndex].archiveTodoItem();
            }
        });
    }

    resetInnerHTML(items) {
        for (let item of items) {
            document.getElementById(item).innerHTML = "";
        }
    }

    viewTodoItems() {
        for (let todoItem of this.todoItems) {
            if (todoItem.todoItemArchived()) {
                let newDiv = document.createElement("div");
                let textNode = document.createTextNode(todoItem.title);
                newDiv.appendChild(textNode);
                document.getElementById("todo-items-archive").appendChild(newDiv);
            } else {
                let newDiv = document.createElement("div");
                let newLabel = document.createElement("label");
                let textNode = document.createTextNode(todoItem.title);
                let newNode = document.createElement("input");
                let elementID = `chkbox-id-${todoItem.itemId}`;
                newNode.setAttribute("type", "checkbox");
                newNode.setAttribute("id", elementID);
                newLabel.append(newNode, textNode);
                newDiv.append(newLabel);
                document.getElementById("todo-items").appendChild(newDiv);
            }
        }
    }

    updateHTML() {
        this.resetInnerHTML(["todo-items", "todo-items-archive"]);

        this.viewTodoItems();

    }
}