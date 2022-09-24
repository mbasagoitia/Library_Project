console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

const testInput = document.querySelector("#test-input");
const testButton = document.querySelector("#test-button");
testButton.addEventListener("click", logValue);
function logValue () {
    console.log(testInput.value);
}

class Book {
    constructor(id, title, author, read) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.read = read;
    }
}

class Library {
    constructor (bookCount, books) {
        bookCount = 0;
        this.bookCount = bookCount;
        this.books = books;
    }


    //Library.markRead(3)

    markRead (id) {
        for (let book of this.books) {
            if (book.id == id) {
                book.read = true;
            }
        }
    }

    addBook () {
        const newTitle = document.querySelector("#title").value;
        const newAuthor = document.querySelector("#author").value;
        const hasRead = document.querySelector("#has-read").checked;
        //console.log(newTitle, newAuthor, hasRead);

        const newBook = new Book((this.bookCount + 1), newTitle, newAuthor, hasRead);

        const newRow = document.createElement("tr");
        const newTitleCell = document.createElement("td");
        const newAuthorCell = document.createElement("td");
        const newReadCell = document.createElement("input");
        newReadCell.setAttribute("type", "checkbox");

        newTitleCell.textContent = newTitle;
        newAuthorCell.textContent = newAuthor;
        newReadCell.checked = hasRead;
        if (newReadCell.checked) {
            newReadCell.setAttribute("disabled", "true");
        }

        newRow.appendChild(newTitleCell);
        newRow.appendChild(newAuthorCell);
        newRow.appendChild(newReadCell);

        const tableBody = document.querySelector("#tbody");
        tableBody.appendChild(newRow);

        this.bookCount++;
        console.log(this.bookCount);
        console.log(newBook.id);
    }

}

const myLibrary = new Library;

const addBookBtn = document.querySelector("#add-book");
addBookBtn.addEventListener("click", () => {
    myLibrary.addBook();
});


