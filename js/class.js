class StudentClass{
  constructor(nameOut, ageOut){
    this.name = nameOut;
    this.age = ageOut;
  };

  studentInfo(){
    console.log(`Имя: ${this.name} вік: ${this.age}`);
  };

  readBook(bookOut){
    console.log(`${this.name} читає книгу ${bookOut.name}`);
  };
}

class BookClass{
  constructor(nameOut, yearOut){
    this.name = nameOut;
    this.year = yearOut;
    this.price = 2000;
  };

  getPrice () {
    return this.price;
  };

  setPrice (value) {
    this.price = value;
  };

  bookInfo(){
    console.log(`Назва: ${this.name} Рік випуску: ${this.year} Ціна: ${this.getPrice()}`);
  };

}
const icebreaker = new BookClass("Ледокол", 1984);
const ivan = new StudentClass("Іван", 20);

icebreaker.setPrice(1000);

console.log(ivan.studentInfo());
console.log(icebreaker.bookInfo());
console.log(icebreaker.getPrice());
console.log(ivan.readBook(icebreaker));
