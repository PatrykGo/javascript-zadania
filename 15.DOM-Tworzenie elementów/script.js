//zad1
const element = document.createElement("div");
element.innerHTML = "To jest nowy element"
document.body.appendChild(element);

//zad2
const fruits = ["poziomka", "jablko", "truskawka", "borówka", "ananas", "banan"]
const ul = document.createElement("ul")
fruits.forEach( item => {
    const li = document.createElement("li")
    li.innerHTML = item;
    ul.appendChild(li)
})
document.appendChild(ul);

//zad3
ul.addEventListener("click", () => {
    ul.querySelectorAll("li:nth-of-type(odd)").forEach( item => {
        item.remove();
    })
})

//zad4
const newButton = document.createElement("button");
newButton.innerText = "Remove";
newButton.addEventListener("click", () => {
    newButton.remove();
})

document.body.appendChild(newButton);

//zad5
for(var i = 0; i < Math.floor(Math.random() * 10); i++){
    const newDiv = document.createElement("div");
    newDiv.innerText = 'to jest div numer ' + i;
    document.body.appendChild(newDiv);
}

//zad6
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
const span1 = document.createElement("span");
const span2 = document.createElement("span");

div1.textContent = "to jest div";
div3.textContent = "to jest div";
span1.textContent = " to jest span";
span2.textContent = "to jest span";

div2.appendChild(div3);
document.body.appendChild(div1);
document.body.appendChild(span1);
document.body.appendChild(div2);
document.body.appendChild(span2);

//zad7
const sampleArray = ["el", "el1", "el2", "el3", "el4", "el5"];
const list1 = document.createElement("ul");
const list2 = document.createElement("ul");
const button1 = document.createElement("button");
const button2 = document.createElement("button");
const buttonText = "move";
sampleArray.forEach( item => {
    const li = document.createElement("li");
    li.innerText = item;
    list1.appendChild(li);
})

document.body.appendChild(list1);
document.body.appendChild(button1);
button1.textContent = buttonText;
button1.addEventListener("click", () => {
    const lastItemList1 = list1.lastChild;
    const lastItemList2 = list2.lastChild;
    list2.insertBefore(lastItemList1, lastItemList2)
    if(list1.children.length === 0){
        button1.disabled = true;
    }
    else {
        button2.disabled = false;
    }
})

document.body.appendChild(list2);
document.body.appendChild(button2);
button2.textContent = buttonText;
button2.addEventListener("click", () => {
    const lastItemList1 = list1.lastChild;
    const lastItemList2 = list2.lastChild;
    list1.insertBefore(lastItemList2, lastItemList1)
    if(list2.children.length === 0){
        button2.disabled = true;
    } 
    else {
        button1.disabled = false;
    }
})

//zad8
const form = document.createElement("form");
const input = document.createElement("input");
const span = document.createElement("span")
const button = document.createElement("button");
button.setAttribute("type", "submit");

form.appendChild(span);
form.appendChild(input);
form.appendChild(button);
document.body.appendChild(form);

span.textContent = "Wprowadz typ elementu, ilosc elementow, tekst ktory ma zostac powtorzony oraz kolor przedzielone przecinkiem.";
button.textContent = "Utworz";

button.addEventListener("click", (e) => {
    e.preventDefault();

    const input = input.value;
    const values = input.split(',');
    for (var i = 0; i < values[1]; i++) {
        const element = document.createElement(values[0]);
        element.textContent = values[2];
        element.style.color = values[3];
        document.body.appendChild(element);
        
    }
})

//zad9
var formInputs = ["Imie", "Nazwisko", "Wiek", "IloscDzieci"];
var formDiv = document.createElement("div");

createFormFields(formInputs);

document.body.appendChild(formDiv);

var submitButton = document.createElement("button");
submitButton.id = "submit";
submitButton.textContent = "Create";

var showMoreButton = document.createElement("button");
showMoreButton.id = "showMore";
showMoreButton.textContent = "more";

document.body.appendChild(showMoreButton);
document.body.appendChild(submitButton);

showMoreButton.addEventListener("click", (e) => {
    e.preventDefault();

    createFormFields(formInputs);
})


function createFormFields(formInputs) {
    formInputs.forEach((formInput) => {
        var inputDiv = document.createElement("div");
        var input = document.createElement("input");
        input.className = formInput;
        var textDiv = document.createElement("div");
        textDiv.textContent = formInput;
        var breakLine = document.createElement("br");

        inputDiv.appendChild(textDiv);
        inputDiv.appendChild(input);
        inputDiv.appendChild(breakLine);

        formDiv.appendChild(inputDiv);
    })
}

submitButton.addEventListener("click", () => {
    var names = document.querySelectorAll(".Imie")
    var lastNames = document.querySelectorAll(".Nazwisko");
    var ages = document.querySelectorAll(".Wiek");
    var kids = document.querySelectorAll(".IloscDzieci");
    var tableWrapper = document.createElement("div");

    names.forEach((n) => {
        var tableRow = createRow("Imie", n.value)
        tableWrapper.appendChild(tableRow);
    })

    lastNames.forEach((n) => {
        var tableRow = createRow("Nazwisko", n.value)
        tableWrapper.appendChild(tableRow);
    })
    ages.forEach((n) => {
        var tableRow = createRow("Wiek", n.value)
        tableWrapper.appendChild(tableRow);
    })
    kids.forEach((n) => {
        var tableRow = createRow("Ilosc Dzieci", n.value)
        tableWrapper.appendChild(tableRow);
    })

    document.body.appendChild(tableWrapper);
})

function createRow(rowName, val){
    var removeButton = createRemoveButton();
    var rowWrapper = document.createElement("div");
    const fieldDiv = document.createElement("div");
    const fieldValue = document.createElement("div");
    fieldDiv.textContent = rowName + ": ";
    fieldValue.textContent = val;
    fieldValue.classList = "fieldValue";
    rowWrapper.appendChild(fieldDiv);
    rowWrapper.appendChild(fieldValue);
    rowWrapper.appendChild(removeButton);

    return rowWrapper;
}

function createRemoveButton() {
    var button = document.createElement("button");
    button.textContent = "Devare";

    button.addEventListener("click", (e) => {
        const target = e.target;
        target.parentNode.parentNode.removeChild(target.parentNode);
    })

    return button;
}

//zad10
function capitalizeFirstvarter(sentence){
    return sentence[0].toUpperCase() + sentence.substr(1, sentence.length);
}

//zad11
function findNumAndCreateDivs(string){
    var sum = 0;
    var mul = 1;
    for(var i = 0; i < string.length; i++){
        if(!isNaN(string[i])){
            var int = parseInt(string[i]);
            sum += int;
            mul *= int;
        }
    }

    if(mul !== 1 || sum !== 0){
        for(var i = 0; i < mul; i++){
            var newDiv = document.createElement("div");
            newDiv.textContent = string;
            document.body.appendChild(newDiv);
        }
    }
    
    console.log(sum);
}

findNumAndCreateDivs("abcd47");

//zad12
function create(string) {
    return {
        text: string
    }
}

var przemek = create("Przemek ma kota, a kot ma Przemka");
przemek.checkIfContainsAla = function() {
    if(this.text.includes("Ala")){
        this.text = this.text.replaceAll("Ala", "Ola");
        console.log(this.text);
    } else {
        var newDiv = document.createElement("div");
        newDiv.textContent = "Słowo 'Ala' nie występuje w tekście."
        document.body.appendChild(newDiv);
    }
}

przemek.checkIfContainsAla();

//zad13
const exampleArray = ["ajdk1", "sd5kf"];
function sumvartersInString(value){
    var numbers = 0;
    value.forEach(item => {
        const textWithoutNumbers = item.replace(/\d+/g, "");
        numbers += textWithoutNumbers.length;
    })
    console.log(numbers);
}

sumvartersInString(exampleArray);
function sumNumbers(value){
    var sum = 0;
    value.forEach(item => {
        item.match(/[0-9]+/g).forEach( number => {
            sum += (Number(number));
        })
        
    })
    console.log(sum);
}

sumNumbers(exampleArray)
function averageNumbers(value){
    var sum = 0;
    var varters = 0;
    value.forEach(item => {
        item.match(/[0-9]+/g).forEach( number => {
            sum += (Number(number));
            varters = number.length;
        })
        
    })

    const average = sum/varters;
    console.log(average);
    return average;

}

//zad14
var object = {
    name: '',
    surname: '',
    age: ''
}

function changeObject(name, surname, age){
    object.name = name;
    object.surname = surname;
    object.age = age;

    if(name.length > 5 || surname.length > 5 || age.length > 5){
        var newButton = document.createElement("button");
        newButton.textContent = "Resetuj";
        newButton.addEventListener("click", () => {
            object.name = "";
            object.surname = "";
            object.age = "";
        })
        document.body.appendChild(newButton);
    }
}

changeObject("Kuba", "Mazur", "19");
