function Student(name, age){
  this.name = name;
  this.age = age;

  this.studentReadBook = function(book){
    console.log(`${this.name} читає книгу ${book.name}`);
  };

  this.studentInfo = function(){
      console.log(`Звуть: ${this.name} вік: ${this.age}`);
  };
};

function Book(name, year){
  this.name = name;
  this.year = year;
  this.price;
  this.bookInfo = function(){
      console.log(`Книга: ${this.name} Рік видавництва: ${this.year} Вартість: ${this.price}`);
  };
};

const pol = new Student("Павло", 20);
const spartak = new Book("Спартак", 1960);

console.log(pol.name);
pol.studentInfo();
spartak.price = 2000;
spartak.bookInfo();
Object.freeze(spartak);
spartak.price = 1000;
pol.studentReadBook(spartak);
spartak.bookInfo();