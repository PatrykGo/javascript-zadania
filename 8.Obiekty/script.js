//zad1
var car = {
    name: "BMW",
    age: 12
}

console.log(car.name);
console.log(car.age);

//zad2
console.log(car.name);
car.changeName = (newName) => car.name = newName;
car.changeName("Fiat");
console.log(car.name);

//zad3
var newObject = {
    sum: 0,
    sumValues: function(array) {
        array.forEach(num => this.sum += num);
    }
}

newObject.sumValues([1, 5, 7]);
console.log(newObject.sum);

//zad4
var car = {
    name: "BMW",
    age: 12
}

for(let key in car){
    console.log(key + ": " + car[key]);
}

//zad5
var car = {
    name: "Fiat",
    age: 9,
    color: "red"
}

var carCC = {
    country: "Poland",
    city: "Krakow"
}

car.prod = carCC;
console.log(car.prod.country, car.prod.city)

//zad6//?
var car = {
    name: "BMW",
    age: 12
}

car.hello = () => {
    console.log("Hello");
}

car.hello();
