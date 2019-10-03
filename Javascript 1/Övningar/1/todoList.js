class todoList {
    constructor() {
        this.todoItems = [];
        this.itemId = 0;
    }

    addTodoItem(title) {
        this.itemId++;
        this.todoItems = [...this.todoItems, new todoItem(this.itemId, title)];
    }

    archiveSelectedItems(selectedItemsIds) {
        selectedItemsIds.forEach(selectedItemId => {

        });
    }
}