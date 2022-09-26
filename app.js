console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

const tableBody = document.querySelector("#tbody");

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
        books = [];
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
        newRow.setAttribute("id", `row-${this.bookCount + 1}`)
        newReadCell.setAttribute("type", "checkbox");
        newReadCell.setAttribute("id", `check-${this.bookCount + 1}`)
        newReadCell.setAttribute("class", "checkbox");

        newTitleCell.textContent = newTitle;
        newAuthorCell.textContent = newAuthor;
        newReadCell.checked = hasRead;
        if (newReadCell.checked) {
            newReadCell.setAttribute("disabled", "true");
        }

        newRow.appendChild(newTitleCell);
        newRow.appendChild(newAuthorCell);
        newRow.appendChild(newReadCell);

        tableBody.appendChild(newRow);

        this.bookCount++;
        this.books.push(newBook);

        //add remove book button
        const newRemoveCell = document.createElement("td");
        const newBtn = document.createElement("button");
        newBtn.setAttribute("id", `btn-${this.bookCount}`)
        newBtn.textContent = "Remove Book";
        newRemoveCell.appendChild(newBtn);
        newRow.appendChild(newRemoveCell);

        const checkboxes = document.querySelectorAll(".checkbox");

        for (let checkbox of checkboxes) {
            checkbox.addEventListener("click", () => {
                checkbox.setAttribute("disabled", "true");
                newBook.read = true;
                //console.log(newBook.read); should return true
            })
        }


        //make remove book button work
        let regEx = /\d+/;
        newBtn.addEventListener("click", () => {
            this.removeBook(parseInt((newBtn.id.match(regEx))[0]));
            newBtn.parentElement.parentElement.remove();
        });

        //mark as read

        //console.log(newBook.read); should return false (before the checkbox is clicked)

        clearValues();

    }

    removeBook (idParam) {
        for (let book of this.books) {
            if (idParam == book.id) {
                // console.log(book);
                let index = this.books.indexOf(book);
                this.books.splice(index, 1);
                // console.log(`removed ${book.title}`);
                //this will show the rest of the books remaining in the library and their info
                console.log(this.books);
            }
        }
       
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


