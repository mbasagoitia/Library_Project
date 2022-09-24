console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

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
        newReadCell.setAttribute("id", `check-${this.bookCount + 1}`)
        newReadCell.setAttribute("class", "checkbox");

        console.log(newReadCell.id);

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

        const checkboxes = document.querySelectorAll(".checkbox");
        for (let checkbox of checkboxes) {
            checkbox.addEventListener("click", () => {
                checkbox.setAttribute("disabled", "true");
                newBook.read = true;
                //console.log(newBook.read); should return true
            })
        }
        //console.log(newBook.read); should return false (before the checkbox is clicked)

        clearValues();

    }

}

const myLibrary = new Library;

const addBookBtn = document.querySelector("#add-book");
addBookBtn.addEventListener("click", () => {
    myLibrary.addBook();
});

function clearValues () {
    let newTitleBox = document.querySelector("#title");
    let newAuthorBox = document.querySelector("#author");
    let hasReadBox = document.querySelector("#has-read");
    newTitleBox.value = "";
    newAuthorBox.value = "";
    hasReadBox.checked = false;
}

