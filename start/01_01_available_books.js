class Book{
  constructor(title, author, ISBN, numCopies){
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }
  getAvailablity(){
    if (this.numCopies === 0)
      return "Out of stock";
    else if(this.numCopies < 10)
      return"Low stock";
    else
      return"In stock";
  }
  sell(numSold = 1){
    this.numCopies -= numSold;
    console.log("number of copies sold:",numSold );
  }
  restock(numCopiesStocked = 5){
    this.numCopies += numCopiesStocked;
    console.log("number of copies restocked:",numCopiesStocked );
  }
}
const newBook = new Book("ABC Book", "Author Name",123456,50);
console.log(newBook.getAvailablity());
newBook.sell(50);
console.log(newBook.getAvailablity());
newBook.restock(40);
console.log(newBook.getAvailablity());


