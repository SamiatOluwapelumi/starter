'use strict';

// let hasDriversLIcense =false;
// const passTest = true;

// if (passTest) hasDriversLIcense = true;
// if (hasDriversLIcense) console.log (' I can drive')


function logger() {
    console.log ('My name is Jonas')
}

//calling / running / invoking the function
logger () ;

function fruitProcessor (apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const applejuice = fruitProcessor (5, 0);
console.log (applejuice);
console.log (fruitProcessor (4, 9));