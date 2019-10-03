class TodoItem {
    constructor(itemId, title) {
        this.title = title;
        this.itemId = itemId;
        this.isArchived = false;
    }

    todoItemArchived() {
        return this.isArchived;
    }

    archiveTodoItem() {
        this.isArchived = true;
    }
}