//zad1
done = () => console.log("Udało się!");
done();

//zad2
function name(param) {
    console.log(param);
}
name("Patryk");

//zad3
function tbl(array) {
    return array;
}
console.log(tbl([1, 2, 3]));

//zad4
function countDown(string) {
    var times = 0
    var counterId = setInterval(function(){
        console.log(string);
        if (times++ >= 4) {
            clearInterval(counterId);
            console.log("Koniec");
        }
    }, 3000);
}
countDown("string");
