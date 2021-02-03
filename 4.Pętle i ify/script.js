//zad1
var a = 2, b = 6;

if(a > b) {
    console.log("a > b");
} else {
    console.log("a <= b");
}

//zad2
var a = 4, b = 6, c = 1;

if(a > b && a > c) {
    console.log("a jest największe");
}else if(b > a && b > c) {
    console.log("b jest największe");
} else {
    console.log("c jest największe");
}

//zad3
for (let i = 0; i < 10; i++) {
    console.log("Lubię JavaScript");
}

//zad4
var result = 0;

for (let i = 1; i <= 10; i++) {
    result += i;
}

console.log(result);

//zad5
var num = 12;

for(let i = 0; i <= num; i++) {
    console.log(`${i} - ${i%2 === 0 ? 'parzysta' : 'nieparzysta'}`);
}
//warunek ? true : false

//zad6
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log("i=" + i + ", j=" + j);
    }
}

//zad7
for (i = 1; i < 101; i++) {
    if(i%5 === 0 && i%3 === 0) {
        console.log("FizzBuzz");
    } else if(i%5 === 0) {
        console.log("Buzz");
    } else if(i%3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}

//zad8
//a
for (let i = 0; i < 5; i++) {
    console.log('*'.repeat(i + 1));
}

//b
for (let i = 0; i < 5; i++) {
    console.log(' '.repeat(5 - i) + '* '.repeat(i + 1));
}

//c
for (let i = 0; i < 5; i++) {
    console.log(' '.repeat(5-i) + '*'.repeat((i+1)*2-1));
}

//d
for (let i = 0; i < 5; i++) {
    let sum = '*'.repeat(i + 1);
    for (let j = i + 1; j < 5; j++) {
        sum += j;
    }
    console.log(sum);
}

console.log('-----');

for (let i = 4; i >= 0; i--) {
    let sum = '*'.repeat(i + 1);
    for (let j = i + 1; j < 5; j++) {
        sum += j;
    }
    console.log(sum);
}

//e
for (let i = 0; i < 5; i++) {
    console.log(' '.repeat(5 - i) + '* '.repeat(i + 1));
}

for (let i = 0; i < 3; i++) {
    console.log(' '.repeat(5) + '* ');
}
