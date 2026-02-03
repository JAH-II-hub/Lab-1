const library = {
    name: 'City Library',
    books: [],
    
    addBook(title, author, isbn) {
        const book = { title, author, isbn };
        this.books.push(book);
    },
    
    findBookByTitle(title) {
        return this.books.find(book => book.title === title) || null;
    },
    
    listAllBooks() {
        this.books.forEach(book => console.log(book.title));
    }
};

const universityLibrary = Object.create(library);
universityLibrary.courses = [];

universityLibrary.addCourseBook = function(courseName, title, author, isbn) {
    this.courses.push(courseName);
    this.addBook(title, author, isbn);
};

universityLibrary.findBooksByAuthor = (author) => {
    return universityLibrary.books.filter(book => book.author === author);
};

// Testing the methods
library.addBook('1984', 'George Orwell', '123456789');
library.addBook('To Kill a Mockingbird', 'Harper Lee', '987654321');
library.addBook('The Great Gatsby', 'F. Scott Fitzgerald', '456789123');

console.log(library.findBookByTitle('1984'));
library.listAllBooks();

universityLibrary.addCourseBook('Literature 101', 'Brave New World', 'Aldous Huxley', '321654987');
console.log(universityLibrary.courses);
console.log(universityLibrary.findBooksByAuthor('Harper Lee'));