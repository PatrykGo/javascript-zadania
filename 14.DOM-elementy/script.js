//zad1
const divs = document.getElementsByClassName("more-divs");

function getTags(elements) {
    const array = Array.from(elements);
    return array.map((item) => item.tagName);
}

console.log(getTags(divs));

//zad2
function ShortList(shortList) {
    console.log(shortList.innerHTML);
    console.log(shortList.outerHTML);
    console.log(shortList.className);
    console.log(shortList.classList);
    console.log(shortList.dataset);
}
ShortList(document.querySelector('.short-list'));

//zad3
const dataSetCheck = document.getElementById("datasetCheck");

function calculateParameters(element) {
    const data = document.querySelector("#datasetCheck");
    const elmentOne = Number(element.getAttribute("data-numberone"));
    const elmentTwo = Number(element.getAttribute("data-numbertwo"));
    const elmentThree = Number(element.getAttribute("data-number-three"));

    const sum =  elmentOne + elmentTwo + elmentThree;
    const diff = elmentOne - elmentTwo - elmentThree;
    

    console.log("suma: " + sum );
    console.log("roznica: " + diff);
}

//zad4
document.getElementById('spanText').innerHTML = 'any';

//zad5
document.getElementById('spanText').className = 'any1';

//zad6
var classes = document.getElementById("classes");

function manageClasses(classes) {
    classes.classList.forEach(element => console.log(element));
    var divClass = "";
    classes.classList.forEach(element => divClass = divClass + (divClass != "" ? ' + ' : '') + element);
    console.log(divClass);
    classes.classList.remove(...classes.classList);
    console.log("Usunięto wszystkie klasy");
}

manageClasses(classes);

//zad7
const list = document.querySelectorAll('#longList > li')

function addAttributes(elements) {

    elements.forEach( element => {
        if(!element.getAttribute("data-text")){
            element.dataset.text = "text";
        }
    })

}
const result = addAttributes(list);

//zad8
function createObject(name) {
    return {newClass: name}
}

function addClass(object) {
    const newClass = object.newClass;
    document.querySelector("#myDiv").classList.add(newClass);

}

const sampleObject = createObject("string_z_parametru");
addClass(sampleObject);

//zad9
function addClassEvenOrOdd(number){
    const newClass = "";
    if(number % 2 === 0) {
        newClass = "even";
    } else {
        newClass = "odd";
    }
    document.querySelector("#numbers").classList.add(newClass);
}

addClassEvenOrOdd(Math.floor(Math.random() * 10));

//zad10
function readValuesFromLongList(longList){
    let values = [];
    let list = longList.querySelectorAll('li');
    for(let listItem in list){
        values.push(listItem.innerText);
    }
    return values;
}

console.log(readValuesFromLongList(document.querySelector('#longList')));

//zad11
function changeToRndNumb(listItems){
    for(let listItem in listItems){
        listItem.dataset.data = listItem.innerText;
        listItem.innerText = Math.floor(Math.random() * 10);
    }
}

changeToRndNum(document.querySelectorAll("#longList li"));
