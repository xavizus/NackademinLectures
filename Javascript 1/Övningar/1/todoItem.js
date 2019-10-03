class todoItem {
    constructor(itemId, title) {
        this.title = title;
        this.itemId = itemId;
        this.isArchived = false;
    }

    isTodoItemArchived() {
        return this.isArchived;
    }

    archiveTodoItem() {
        this.isArchived = true;
    }
}