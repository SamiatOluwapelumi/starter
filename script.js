'use strict';

// let hasDriversLIcense =false;
// const passTest = true;

// if (passTest) hasDriversLIcense = true;
// if (hasDriversLIcense) console.log (' I can drive')


// function logger() {
//     console.log ('My name is Jonas')
// }

// //calling / running / invoking the function
// logger () ;

// function fruitProcessor (apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const applejuice = fruitProcessor (5, 0);
// console.log (applejuice);
// console.log (fruitProcessor (4, 9));

// Function declaration
// function calcAge1 (birthYear) {
//     console.log ( 2037 - birthYear);
// }
// calcAge1 (1991);

// // Function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear; 
// }
// const age2 = calcAge2 (1991);
// console.log (age2);

// // Arrow function

// const calcAge3= birthYear => 2037 - birthYear;
// const Age3 = calcAge3 (1991);
// console.log (Age3); 

// const yearUntilRetirement = (birthYear, firstName) =>{
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log (yearUntilRetirement (1991, 'Jonas'));


// const cutPieces = function (fruits) {
//     return fruits * 4;
// }
// function fruitProcessor (apples, oranges) {
//     const applePieces = cutPieces (apples);
//     const orangePieces = cutPieces (oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//     return juice;
// }
// console.log (fruitProcessor (2,3));


// const calcAveragge = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// function checkWinner (avgDolphins , avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas ) {
//         console.log ( `Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     }
//     else if (avgKoalas >= 2 * avgDolphins ) {
//         console.log ( `Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     }
//     else {
//         console.log ('No team wins...');
//     }    
// }

// // ----------------------------------------------------------

// const scoreDolphins = calcAveragge(85, 54, 41);
// console.log(scoreDolphins);
// const scoreKoalas = calcAveragge(2300, 34, 27);
// console.log(scoreKoalas);

// console.log (checkWinner(scoreDolphins, scoreKoalas))



//Arrays

// const friends = ['Haseenah', 'Kawthar', 'Mercy']; 
// const years = new Array (1991, 1984, 2008, 2020);

// console.log (friends [0]);
// console.log (friends.length);
// console.log (friends [friends.length - 1]);
// console.log (friends)


// friends[2] = 'Tomiwa';
// console.log (friends);

// // friends = ['Bob', 'Alice']  // This will give error because friends is a constant variable

// const firstName ='Samiat';
// const Samiat = [firstName, 'Oshoko', 2025 - 2000, 'Student', friends]
// console.log (Samiat);

// //Exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear; 
// }
// const year = [1990, 1967, 2002, 2010, 2018];

// const age1= calcAge (year[0])
// const age2= calcAge (year[1])
// const age3= calcAge (year[year.length -1])
// console.log (age1, age2, age3);
// const ages = [calcAge (year[0]), calcAge (year[1]), calcAge (year[year.length -1])];
// console.log (ages);

// console.log (new Array (age1, age2, age3))

//array methods
// const friends = ['Haseenah', 'Kawthar', 'Mercy']; 
// friends.push ('Fladi')// add element to the end
// const newLength = friends.push ('Tomiwa');
// console.log (friends);
// console.log (newLength);

// friends.unshift ('FAthia')// add element to the beginning
// console.log (friends);

// friends.pop () // remove last element
// console.log (friends);
// console.log (friends.indexOf ('Tomiwa'))
// console.log (friends.indexOf ('Mercy'))// to find the index of an element
// console.log (friends.includes ('Mercy'))
// console.log (friends.includes ('Tomiwa'))

// function calcTip (bill) {

// if (bill >=50 && bill <=300) {
//     return (15/100) * bill;
// }
// else {
//     return (20/100) * bill;
// }
// }

// const bills =[125, 555, 44];
// const tips = [calcTip (bills[0]), calcTip (bills[1]), calcTip (bills[2])]
// const total =[bills[0] + tips[0],bills[1] + tips[1], bills[2] + tips[2]]

// //-----------------
// console.log(bills);
// console.log(tips);
// console.log(total);

//Objects

// const Samiat = {
//     firstName: 'Samiat',
//     lastName: 'Oshoko',
//     age: 2025-2000,
//     job: 'student',
//     friends: ['Haseenah', 'Kawthar', 'Mercy']
// }
// console.log (Samiat);
// console.log(Samiat.lastName)
// console.log(Samiat['lastName']);

// const nameKey = 'Name';
// console.log (Samiat['first' + nameKey]);
// console.log (Samiat['last' + nameKey]);

// const insterestedIn = prompt ('What do you want to knw about Samiat? Choose between firstName, lastName, age, job, and friends');
//  if (Samiat[insterestedIn]) {
//     console.log (Samiat[insterestedIn]);
//  }
//  else {
//     console.log ('Wrong request! Choose between firstName, lastName, age, job, and friends');
//  }

//  Samiat.location = 'Nigeria';
//  Samiat['twitter'] = '@samiatoshoko';
//  console.log (Samiat);

//  //challenge
//   console.log (`${Samiat.firstName} has ${Samiat.friends.length} friends, and her best friend is called ${Samiat.friends[0]}`);


// const Samiat = {
//     firstName: 'Samiat',
//     lastName: 'Oshoko',
//     birthYear: 2000,
//     job: 'student',
//     friends: ['Haseenah', 'Kawthar', 'Mercy'],
//     hasDriversLicense: true,

// //     calcAge : function (birthYear) {
// //         return 2025 - birthYear;
// //   }
// //     calcAge : function () {
// //         return 2025 - this.birthYear;
// //   }

//     calcAge : function () {
//         this.age = 2025 - this.birthYear;
//         return this.age;
//   },
//     getSummary: function () {
//            return (`${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and she has ${this.hasDriversLicense ? 'a':'no'} driver's License.`);

//     }
// };

// console.log(Samiat.calcAge(Samiat.birthYear));
// console.log(Samiat['calcAge'](Samiat['birthYear']));

    // console.log(Samiat.calcAge());


    //challenge
//    if (Samiat.hasDriversLicense) {
//     console.log (`${Samiat.firstName} is a ${Samiat.calcAge()} -year old ${Samiat.job}, and she has a driver's License`);
//    }
//     else {
//     console.log (`${Samiat.firstName} is a ${Samiat.calcAge()} -year old ${Samiat.job}, and she has no driver's License`);
//     }

    // console.log (Samiat.getSummary());



    // -----------------------------
// const mark = {
//     fullName: 'mark Miller',
//     mass : 78,
//     height : 1.69,
// }
// const john = {
//     fullName: 'John Smith',
//     mass : 92,
//     height : 1.95,
// }
// mark.calcBMI = function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
// } 
// john.calcBMI = function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
// } 
// mark.calcBMI();
// john.calcBMI();
// console.log (mark.bmi, john.bmi);
// console.log (john.bmi > mark.bmi ? `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})` : `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);


// For loop keeps running while condition is True.

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

const Samiat = [
    'Samiat',
    'Oshoko', 
    2025 - 2000, 
    'student', 
    ['Haseenah', 'Kawthar', 'Mercy']
];

// const types =[];


// for ( let i = 0; i <= Samiat.length -1; i++) {
//     console.log (Samiat[i], typeof Samiat[i]);

//     // types[i] = typeof Samiat[i];
//     types.push (typeof Samiat[i]);
// }
// console.log (types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i<= years.length -1; i++) {
//     ages.push (2037 - years[i]);
    
// }
// console.log (ages);

// continue and break
// console.log ('--- ONLY STRINGS ---');
// for ( let i = 0; i <= Samiat.length -1; i++) {
//     if (typeof Samiat [i]!=='string') continue;
//     console.log (Samiat[i], typeof Samiat[i]);
// }

// console.log ('--- BREAK WITH NUMBER ---');
// for ( let i = 0; i <= Samiat.length -1; i++) {
//     if (typeof Samiat [i]==='number') break;
//     console.log (Samiat[i], typeof Samiat[i]);
// }


//looping backwards
// for (let i = Samiat.length-1; i>=0; i--) {
//     console.log (i, Samiat[i]);
// }

//loop inside a loop

// for (let exercise = 1; exercise <4; exercise++) {
//     console.log (`---- Starting exercise ${exercise} ----`);

//     for ( let rep = 1; rep<=5; rep++) {
//         console.log (`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
//     }
// }

// for ( let rep = 1; rep<=10; rep++) {
//         console.log (` Lifting weight repetition ${rep} 🏋️‍♀️`);
//     }
// while loop

// let rep =1;
// while ( rep <=10) {
//     // console.log (` WHILE: Lifting weight repetition ${rep} 🏋️‍♀️`);
//     rep++;
// }

// let dice = Math.trunc (Math.random () * 6) + 1;

// while (dice!==6) {
//     console.log (`You rolled a ${dice}`);
//     dice = Math.trunc (Math.random () * 6) + 1;
//     if (dice===6) console.log ('Loop is about to end...');
// }

// const bills =[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// const tips = [];
// const totals = [];

// function calcTip (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// for ( let i = 0; i<= bills.length -1; i++) {
//     const tip = calcTip (bills[i]);
//     tips.push(tip);
//     totals.push (tip +bills[i])
// }
// console.log (bills, tips, totals);

// function calcAverage(arr) {
//     let sum =0 ;
//     for (let i =0; i<=arr.length-1; i++) {
//         sum = sum + arr[i]
//     }
//     const average = sum / arr.length;
//     return average;
// }
// console.log (calcAverage (totals))