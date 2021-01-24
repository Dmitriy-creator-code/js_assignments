class Course {
    constructor(title, length, price) {
        this.title = title
        this.length = length
        this.price = price
    }

}

let practice = new Course ("Практическое занятие", "3 часа", "цена 1 млн");
console.log (practice);

let Theory = new Course ("JavaScript", "5 часов", "1 bil$");
console.log(Theory);