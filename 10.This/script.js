//zad1
function Person(name, lastname, age, country, city) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.country = country;
    this.city = city;

    this.showDetails = () => {
        console.log(`Person: ${this.name} ${this.lastname}, age: ${this.age}, country: ${this.country}, ${this.city}`);
    }

    this.addOneYear = () => {
        this.age++;
    }
}

const person = new Person("Michał", "Puchacki", 21, "Poland", "Krakow");
const person2 = new Person("Joanna", "Pawlik", 19, "Poland", "Gdynia");

person.showDetails();
person.addOneYear();
person.showDetails();//+1, age: 22
person.addOneYear();
person.addOneYear();
person.addOneYear();
person.showDetails();//+3, age: 25

//zad2
function PersonAdvanced(name, lastname, age, country, city, dishes) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.dishes = dishes;

    this.logInfo = () => {
        console.log(`Person: ${this.name} ${this.lastname}, age: ${this.age}, country: ${this.country}, ${this.city} dishes: ${this.dishes}`);
    }

    this.addDish = (dish) => {
        this.dishes.push(dish);
    }
}

const personAdv = new PersonAdvanced("Joanna", "Pawlik", 19, "Poland", "Gdynia", ["pierogi", "pomidorowa", "kluski"]);

personAdv.logInfo();
personAdv.addDish("ogórkowa");
personAdv.logInfo();

//zad3
function Calculator(a, b) {
    this.a = a;
    this.b = b;

    this.sum = () => {
        return (this.a + this.b);
    }

    this.sub = () => {
        return (this.a - this.b);
    }

    this.mul = () => {
        return (this.a * this.b);
    }

    this.div = () => {
        if(b === 0){
            console.log("nie można przez 0");
        } else {
            return (this.a / this.b);
        }
    }
}

const calc = new Calculator(3, 8);
const calc1 = new Calculator(5, 0);

console.log(calc.sum());
console.log(calc.sub());
console.log(calc.mul());
console.log(calc.div());

console.log(calc1.div());

//zad4
function Ladder() {
    this.rung = 0;
    this.up = () => {
        this.rung++;
    }

    this.down = () => {
        if(this.rung > 0){
            this.rung--;
        } else {
            console.log("jesteś na ziemi");
        }
    }

    this.showLv = () => {
        console.log(this.rung);
    }
}

var ladder = new Ladder();
ladder.showLv();//0
ladder.up();
ladder.up();
ladder.showLv();//2
ladder.down();
ladder.showLv();//1
ladder.down();
ladder.down();
ladder.showLv();//0, jesteś na ziemi
