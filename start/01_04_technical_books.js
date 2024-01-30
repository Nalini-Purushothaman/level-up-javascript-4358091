class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  // Getter
  get availability() {
    return this.getAvailability();
  }

  // Method
  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    }
    return "In stock";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }
  
  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

// Write your code here
class TechnicalBook extends Book{
  constructor(title, author, ISBN, numCopies, edition){
    super(title,author,ISBN,numCopies);
    //super(author);
    // super(ISBN);
    // super(numCopies);
    this.edition = edition;
  }
  getEdition(){
    return `The current version of this ${this.title} book is ${this.edition}`;
  }
}

const newTechnicalBook = new TechnicalBook("Learning Javascript","Author name",123456,50,2024);
console.log(newTechnicalBook.getAvailability());
console.log(newTechnicalBook.getEdition());