//1zad
function Person(firstname, lastname, age, country, city, language) {
    this.firstname = firstname,
    this.lastname = lastname,
    this.age = age,
    this.country = country,
    this.city = city,
    this.language = language
    this.changeAge = (newAge) => this.age = newAge;
    this.changeCity = (newCity) => this.city = newCity;
}

const user1 = new Person("Arek", "Kowal", 45, "Polska", "Krakow", "polski");
const user2 = new Person("Irena", "Kies", 22, "Polska", "Wrocław", "polski");
const user3 = new Person("Kuba", "Lent", 28, "Polska", "Gdynia", "polski");
const user4 = new Person("Karol", "Sasin", 70, "Polska", "Warszawa", "polski");
const user5 = new Person("Kasia", "Malarz", 12, "Polska", "Krakow", "polski");
// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);
// console.log(user5);

console.log(user1.city);
user1.changeCity("Katowice");
console.log(user1.city);

console.log(user3.age);
user3.changeAge(32);
console.log(user3.age);

//zad2
function Calculator(){
    this.memory = [],
    this.sum = function(a, b) {
        this.memory.push("Dodawanie");
        console.log(a + b);
    },
    this.sub = function(c, d) {
        this.memory.push("Odejmowanie");
        console.log(c - d);
    },
    this.mul = function(e, f) {
        this.memory.push("Mnożenie");
        console.log(e * f);
    },
    this.div = function(g, h) {
        this.memory.push("Dzielenie");
        console.log(g / h);
    },
    this.clearMemory = function() {
        this.memory = [];
    },
    this.showMemory = function() {
        console.log(this.memory);
    }
}

const calc1 = new Calculator();
calc1.sum(2,2);
calc1.sub(2,3);
calc1.mul(4,8);
calc1.div(1,5);
calc1.showMemory();

//zad3
function Game1(){
    this.number = 0;
    this.generator = null;

    this.startGenerator = () => {
        this.generator = setInterval(() => {
            this.number = Math.floor((Math.random() * 10) + 1);
            console.log(this.number);

            this.winConCheck();
        }, 1000)
    }

    this.winConCheck = () => {
        if(this.number > 5){
            console.log("wygrałeś");
            clearInterval(this.generator);
        }
    }
}

let game1 = new Game1();
game1.startGenerator();
