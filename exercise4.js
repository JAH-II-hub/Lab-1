// Create a book object with properties
const book = {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    year: 2008,
    isbn: '978-0596517748'
};

// Function to display a property value
function displayProperty(obj, propertyName) {
    console.log(obj[propertyName]);
}

// Function to update a property value
function updateProperty(obj, propertyName, newValue) {
    obj[propertyName] = newValue;
}

// Test both functions with different properties
displayProperty(book, 'title');
updateProperty(book, 'year', 2024);
displayProperty(book, 'year');