class Notes {
    static Priority = {
        LOW: 'low',
        NORMAL: 'normal',
        HIGH: 'high'
    }

    constructor(items) {
        this.items = items;
    }

    addNote(note) {
        this.items.push(note);
    }

    removeNote(text) {
        this.items = this.items.filter(item => item.text !== text);
    }

    updateNote(text, newPriority) {
        this.items.forEach(item => {
            if (item.text === text) {
                item.priority = newPriority;
            }
        });
    }
}

const myNotes = new Notes([]);

Notes.getPathToBasket();

myNotes.addNote({  text: 'Моя первая заметка', priority: Notes.Priority.LOW })
console.log(myNotes.items);

myNotes.addNote({ text: 'Моя вторая заметка', priority: Notes.Priority.NORMAL })
console.log(myNotes.items);

myNotes.removeNote('Моя первая заметка');
console.log(myNotes.items);

myNotes.updateNote('Моя вторая заметка', Notes.Priority.HIGH);
console.log(myNotes.items);