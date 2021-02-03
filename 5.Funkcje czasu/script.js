//zad1
var time = 0;
var myInterval;

function intervalFunc() {
    console.log("Cześć po raz " + ++time);
    if (time >= 15) {
        clearInterval(myInterval);
    }
}

myInterval = setInterval(intervalFunc, 3000);

//zad2
var tbl=[6,3,7,2,16,32,22,5,64]

setTimeout(()=>{
for(let i = 0; i < tbl.length; i++){
    console.log(tbl[i]);
}
let i = 0;
    var inter = setInterval(() => {
    
        console.log(tbl[i]);
    i++
        if (i >= tbl.length) {
            clearInterval(inter);
        }},3000)
},2000)
