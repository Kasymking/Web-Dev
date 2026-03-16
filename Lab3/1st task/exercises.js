// //Alert,prompt,confirm
// 'use strict';
//         let name = prompt('What is your name?','Jack');
//         alert(`Hello ${name} 👋`);

// //Arrow functions
// function ask(question,yes,no)
//         {
//             if(confirm(question))
//         {
//             yes();
//         }
//         else
//         {
//             no();
//         }
//         }

//         ask(
//             "Do you agree?",
//             () => alert("You agreed."),
//             () => alert("You canceled the execution.")
//         );

// // Automated testing with Mocha
// describe("Raises x to power n", function() {
//         it("5 in the power of 1 equals 5", function() {
//             assert.equal(pow(5, 1), 5);
//         });

//         // Mocha will run only this block
//         it.only("5 in the power of 2 equals 25", function() {
//             assert.equal(pow(5, 2), 25);
//         });

//         it("5 in the power of 3 equals 125", function() {
//             assert.equal(pow(5, 3), 125);
//         });
//         });
    
// // Basic operators,maths

// // Coding style
//  function pow(x, n) {
//         let result = 1;

//         for (let i = 0; i < n; i++) {
//             result *= x;
//         }

//         return result;
//         }

//         let x = prompt("x?", "");
//         let n = prompt("n?", "");

//         if (n <= 0) {
//         alert(`Power ${n} is not supported,
//             please enter an integer number greater than zero`);
//         } else {
//         alert( pow(x, n) );
//         }

// // Conditional branching
//  let number = prompt("Write a number?",0)
//         if(number > 0){
//             alert(1);
//         }
//         else if(number < 0)
//         {
//             alert(-1)
//         }
//         else
//         {
//             alert(0)
//         }

// let result = (a + b < 4) ? 'below' : 'Over';

// // Date and time
//   function formatDate(date) {
//     let diff = new Date() - date; 
//     if (diff < 1000) { 
//         return 'right now';
//     }

//     let sec = Math.floor(diff / 1000); 

//     if (sec < 60) {
//         return sec + ' sec. ago';
//     }

//     let min = Math.floor(diff / 60000); 
//     if (min < 60) {
//         return min + ' min. ago';
//     }

    
//     let d = date;
//     d = [
//         '0' + d.getDate(),
//         '0' + (d.getMonth() + 1),
//         '' + d.getFullYear(),
//         '0' + d.getHours(),
//         '0' + d.getMinutes()
//     ].map(component => component.slice(-2)); 

    
//     return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
//     }

//     alert( formatDate(new Date(new Date - 1)) ); // "right now"

//     alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

//     alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

//     alert( formatDate(new Date(new Date - 86400 * 1000)) );

// // Destructuring assignment
// let user = {
//         name: "John",
//         years: 30
//         };

//         let {name, years: age, isAdmin = false} = user;

//         alert( name ); // John
//         alert( age ); // 30
//         alert( isAdmin ); // false

// // function checkAge(age)
//         {
//             return (age > 18) ? true  : confirm('Did parents allow you?');
//         }

//         function checckAge(age)
//         {
//             return (age > 18) || confirm("Did parents allow you?");
//         }

//         let age = +prompt("How old are you?",'');
//         if(checkAge(age))
//         {
//             alert("Access granted");
//         }
//         else
//         {
//             alert("Access denied");
//         }

//  function min(a,b)
//         {
//             if(a < b || a === b){
//                 return a;
//             }
//             else 
//             {
//                 return b;
//             }
//         }

//         let number = +prompt("Write the number: ",'');
//         let number2 = +prompt("Write the number: ",'');
//         let result = min(number,number2);
//         alert(result);
//         alert(min);

// // Hello, world!
//   alert( "I'm JavaScript!" );

// // Loops(while and for)
//     kasym: for(let i = 0; i < 3; i++)
//     {
//         for(let j = 0; j < 3; j++)
//     {
//         let input = prompt(`Value at coords (${i},${j}`,'');

//         if(input == null || input == "") break kasym;
//     }
//     }

//     alert("Done!");

//       for(let i = 0; i <= 10; i++)
//     {
//         if( i % 2 == 0)
//     {
//         alert(i);
//     }
//     }

//     let n = prompt("Write the number: ","");
//         nextPrime:
//         for(let i = 2; i < n; i++){
//             for(let j = 2; j < i; j++){
//                 if(i % j == 0) continue nextPrime;
//             }

//             alert(i);
//         }

// //Objects
//  function multiplyNumeric(obj) {
//         for (let key in obj) {
//             if (typeof obj[key] == 'number') {
//             obj[key] *= 2;
//             }
//         }
//         }

// // Switch
// let name_of_browser = prompt('Browser name?','Safari');
//         switch(name_of_browser)
//         {
//             case 'Edge':
//                 alert("You've got the Edge!");
//                 break;
//             case 'Chrome':
//             case 'Firefox':
//             case 'Safari':
//             case 'Opera':
//                 alert('Okay we support these browsers too');
//                 break;
            
//             default:
//                 alert('We hope that this page looks ok!');
//         }

//          let a = +prompt('a?','');

//         switch(a)
//         {
//             case 0:
//                 alert(0);
//                 break;
//             case 1:
//                 alert(1);
//                 break;
//             case 2:
//             case 3:
//                 alert('2,3');
//                 break;
//         }

// // Variables
// let admin,name;
// name = "John";
// admin = name;
// alert(admin);

// let ourPlanetName = "Earth";
// let currentUserName = "John";
// alert(ourPlanetName);
// alert(currentUserName);

// // arrays
// function sumInput() {

//         let numbers = [];

//         while (true) {

//             let value = prompt("A number please?", 0);

//             // should we cancel?
//             if (value === "" || value === null || !isFinite(value)) break;

//             numbers.push(+value);
//         }

//         let sum = 0;
//         for (let number of numbers) {
//             sum += number;
//         }
//         return sum;
//         }

// alert( sumInput() );

// function unique(arr) {
//         let result = [];

//         for (let str of arr) {
//             if (!result.includes(str)) {
//             result.push(str);
//             }
//         }

//         return result;
//         }

//         let strings = ["Hare", "Krishna", "Hare", "Krishna",
//         "Krishna", "Krishna", "Hare", "Hare", ":-O"
//         ];

// alert( unique(strings) ); // Hare, Krishna, :-O
// let messages = [
//         {text: "Hello", from: "John"},
//         {text: "How goes?", from: "John"},
//         {text: "See you soon", from: "Alice"}
//         ];

//         let readMap = new WeakMap();

//         readMap.set(messages[0], new Date(2017, 1, 1));
//     // Date object we'll study later

// //constructor,operator
//  function Accumulator(startingValue) {
//         this.value = startingValue;

//         this.read = function() {
//             this.value += +prompt('How much to add?', 0);
//         };

//         }

//         let accumulator = new Accumulator(1);
//         accumulator.read();
//         accumulator.read();
//         alert(accumulator.value);
        
// // logic operators
// if (age >= 14 && age <= 90);
// if (!(age >= 14 && age <= 90));
// let userName = prompt("Who's there?", '');

//         if (userName === 'Admin') {

//         let pass = prompt('Password?', '');

//         if (pass === 'TheMaster') {
//             alert( 'Welcome!' );
//         } else if (pass === '' || pass === null) {
//             alert( 'Canceled' );
//         } else {
//             alert( 'Wrong password' );
//         }

//         } else if (userName === '' || userName === null) {
//         alert( 'Canceled' );
//         } else {
//         alert( "I don't know you" );
//         }

// // strings
// function extractCurrencyValue(str) {
//         return +str.slice(1);
//         }