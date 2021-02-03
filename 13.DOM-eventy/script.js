//zad1
document.querySelector("#test-event").addEventListener("click", element => {
    console.log(element);
});

//1.2
document.addEventListener("mousemove", element => {
    console.log(element);
});

//1.3
document.querySelector("#test-event").addEventListener("mouseover", element => {
    console.log(element);
});

//1.4
document.addEventListener("keypress", element => {
    console.log(element);
});
  
//1.5
document.addEventListener("scroll", element => {
console.log(element);
});
  
//1.6
document.querySelector("#input-test").addEventListener("input", element => {
console.log(element);
});

//zad2
const span = document.querySelector("#span-ex2")

document.querySelector("#ex2").addEventListener("click", element => {
    span.innerHTML = element.target.getAttribute("data-text");
});

//zad3
const redElement = document.querySelector("#ex3");

redElement.addEventListener("mouseover", element => {
    element.target.style.backgroundColor = "blue"; 
});

redElement.addEventListener("mouseout", element => {
    element.target.style.backgroundColor = "red";
});

//zad4
const errorSpan = document.querySelector("#ex3-err");

document.querySelector("#input-test").addEventListener("input", element => {
    const input = element.target.value;
    var regex = /[0-9]/
    var text = "";


    if(regex.test(input)){
        text = "Nie mozna wpisywac liczb";
    } else {
        text = "";
    }

    errorSpan.innerHTML = text;
});

//zad5
var element = document.querySelector("#ex5");
var button = document.querySelector("#ex5-button");
var counter = 0;

button.addEventListener("click", () => {
    counter++;
    element.innerHTML = counter;

    if(counter === 10 ){
        counter = 0;
        element.innerHTML = 0;
    }
});

//zad6
window.addEventListener("scroll", () => {
    if(window.scrollY > 200) {
        document.body.style.backgroundColor = "red";
    } else {
        document.body.style.backgroundColor = "white";
    }
});

//zad7
const buttons = document.querySelectorAll("#calculator button");
const input = document.querySelector("#calculator input");

var calculation = "";

buttons.forEach( item => {
    item.addEventListener("click", () => {
        calculation += item.textContent;
        console.log(calculation);
        input.value = calculation;
    })
});

window.addEventListener("keydown", element => {
    if(element.key === "Enter"){
        input.value = eval(calculation);
    }
});
