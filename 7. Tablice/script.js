//zad1
var array = [1, 2, 3, 4];
console.log(array);

//zad2
var array1 = [4, 5, "78", "witaj", true, null];
//pierwszy i drugi
console.log(array1[0] + ' ' + array1[1]);
//ostatni
console.log(array1[array1.length-1]);
//wszystkie
console.log(array1);
//co drugi
console.log(array1.reduce(function(prev, cur, index){
    if (index % 2 === 0) {
        prev.push(cur);
    }
    return prev;
}, []));
//tylko stringi
array1.forEach(str => {
    if (typeof str === 'string') {
        console.log(str);
    }
});
//tylko numbers
array1.forEach(num => {
    if (typeof num === 'number') {
        console.log(num);
    }
});

//zad3
//suma wszystkich elementów
console.log(array.reduce((value, element) => value + element, 0));
//różnica wszystkich elementów
console.log(array.reduce((value, element) => value - element, 0));
//srednia wszystkich elementów
console.log(array.reduce((value, element) => value + element, 0) / arr.length);
//elementy parzyste
console.log(array.filter(value => value%2 === 0));
//elementy nieparzyste
console.log(array.filter(value => value%2 === 1));
//największa liczba
console.log(array.reduce((max, element) => max > element ? max : element));
//najmniejsza liczba
console.log(array.reduce((min, element) => min < element ? min : elelement));
//wypisanie tablicy od tyłu
console.log(array.reverse());

//zad4
function sumArray(array) {
    return array.reduce((sum, element) => sum += element, 0);
}
console.log(sumArray([1, 2, 3, 4]));

//trteść z zad4 jest potrzebna do zad5, zad6 
//zad5
function zad5(array) {
    let avg = sumArray(array) / array.length;
    array.map(value => console.log(value * avg));
}
zad5([1,2,3]);

//zad6
function zad6(array) {
    array = array.filter(value => value % 2 === 0);
    return sumArray(array) / array.length;
}
console.log(zad6([1, 2, 3, 4, 5]));

//zad7
function zad7(array) {
    return array.sort();
}
console.log(zad7([3, 2, 1]));

//zad8
function merge(array1, array2){
    var result = new Array(Math.max(array1.length, array2.length));
    for (let i = 0; i < result.length; i++) {
        result[i] = (array1[i]) + (array2[i]);
    }
    return result;
}
console.log(merge([1, 2, 3], [3, 2, 1]));

//zad9
function zad9(array, elToDel) {
    return array.filter(value => value !== elToDel);
}
console.log(zad9([1, 4, 5, "12", 21.3], 4));

//zad10
function zad10(array) {
    return array.map(value => value *- 1);
}
console.log(zad10([1, -2, 4, -3]));
