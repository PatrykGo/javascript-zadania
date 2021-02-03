//zad1
console.log(document.getElementById('buz').parentElement);
console.log(document.getElementById('baz').previousElementSibling);
console.log(document.getElementById('foo').childNodes);
console.log(document.getElementById('foo').parentElement);
console.log(document.getElementById('foo').firstElementChild);
var foo = document.getElementById('foo');
console.log(foo.children[1]);

//zad2
function zadanie2(ex2) {
    ex2.onclick = function() {
        console.log(this.querySelector('div div div div div:nth-child(2) div div').textContent)
    }
}
zadanie2(document.getElementById('ex2'));

//zad3
const buttons = document.querySelectorAll("#ex3 div button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const span = button.nextElementSibling;
      if (span.style.display === "none") {
        span.style.display = "block";
      } else {
        span.style.display = "none";
      }
    });
  })

//zad4
const e3Div = document.querySelectorAll("#ex3 div button");

e3Div.forEach((button) => {
    button.addEventListener("click", () => {
        var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        button.parentElement.style.backgroundColor = randomColor;
    });
})

//zad5
const divs = document.querySelectorAll("#ex5 div");
const listItems = document.querySelectorAll("#ex5 li");

//5.1

divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        const colors = div.style.backgroundColor;
        listItems[0].style.backgroundColor = colors;
    })
})

//5.2

divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        const colors = div.style.backgroundColor;
        listItems[listItems.length - 1].style.backgroundColor = colors;
    })
})

//5.3

divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        const colors = div.style.backgroundColor;
        for (let i = 0; i < listItems.length; i++) {
            if(i % 2 !== 0){
                listItems[i].style.backgroundColor = colors;
            }
        }        
    })
})

//5.4
divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        const colors = div.style.backgroundColor;
        for (let i = 0; i < listItems.length; i++) {          
                listItems[i].style.backgroundColor = colors;      
        }     
    })
})


//5.5

divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        const colors = div.style.backgroundColor;
        div.parentElement.style.background = colors;
    })
})


//zad6
const mainElement = document.querySelector("#ex6");
console.log(mainElement);

var elementOne = mainElement.firstElementChild.firstElementChild.firstElementChild;
console.log(elementOne);

var elementTwo = mainElement.firstElementChild.parentElement.firstElementChild.firstElementChild.nextSibling.parentElement;
console.log(elementTwo);

var elementThree = mainElement.parentElement.firstElementChild.parentElement.children[1].firstElementChild.firstElementChild.firstElementChild;
console.log(elementThree);
