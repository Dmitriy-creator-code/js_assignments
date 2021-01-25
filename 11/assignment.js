class Course {
    constructor(title, length, price) {
        this.title = title
        this.length = length
        this.price = price
    }
    Price1Min() {
        let price = this.price;
        let length = this.length;
        let end = price/length;
        return console.log(end + "$ " + " стоимость за одну минуту обучения");
    }
    aboutOfCourse () {
        console.log ("Курс:" + this.title + ": " + "продолжительностью " + this.length + " минут, цена - " + this.price);
    }
}

let practice = new Course ("Практическое занятие", 30, 1000);
console.log (practice);
practice.Price1Min();
practice.aboutOfCourse();

let Theory = new Course ("JavaScript", 50, 1000);
console.log(Theory);
Theory.Price1Min();
Theory.aboutOfCourse();


class PracticalCourse extends Course {
    constructor (title, length, price, numOfExercises) {
         super(title, length, price);
         this.numOfExercises = numOfExercises;
    }
}

 class TheoreticalCourse extends Course {
    publish () {
        console.log ("Состыковка состоялась");
    }
} 

const Practical = new PracticalCourse ("JavaScript", 50, 1000, 1);
console.log (Practical);


const Theoretical = new TheoreticalCourse ("JavaScript", 50, 1000);
Theoretical.publish();
Theoretical.aboutOfCourse();


