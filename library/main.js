const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return(`${title} by ${author}, ${pages} pages, ${read ? "read":"not read yet"}`) 
    };
}

theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);

function addBookToLibrary() {
    document.
}