//zad1
var list = document.getElementsByClassName("list");
console.log(list);

//zad2
function getTag(tag) {
    return document.getElementsByTagName(tag);
}
var li = getTag('div');
console.log(li);

//zad3
const idList = document.querySelector("#list");
console.log(idList);

//zad4
function ShowInConsole(param) {
    param.forEach(element => console.log(element));
}
ShowInConsole(document.querySelectorAll('li'));
ShowInConsole(document.querySelectorAll('ul'));
ShowInConsole(document.querySelectorAll('span'));
ShowInConsole(document.querySelectorAll('div.list > span'));
ShowInConsole(document.querySelectorAll('div#spans > span'));
