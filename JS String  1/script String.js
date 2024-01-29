//JavaScript strings are for storing and manipulating text.

//A JavaScript sting is zero or more characters written inside quotes.

//Example 1
let text = "John Doe"; //String writeen inside quotes

document.getElementById("ex1").innerHTML = text;

// Example 2
// You can use single or double quotes:

let carName1 = "Volvo XC60"; // Double quotes
let carName2 = 'Volvo XC60'; // Single quotes

document.getElementById("ex2").innerHTML = carName1 + " " + carName2;

//Example 3 
    //You can use quotes inside a string, as long they don't match the quotes surrounding the string:

let answer1 = "It's alright"; 
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is Called "Johnny"';

document.getElementById("ex3").innerHTML = answer1 + "<br>" + answer2 + "<br>" + answer3;

//Example 4
    //To find the length of a string, use the built-in length property:

 let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("ex4").innerHTML = alphabet.length;

//Example 5 
    //The sequence /" inserts a double quote in a string:
    let viking = "We are the so-called \"Vikings\" from the north.";
    document.getElementById("ex5").innerHTML = viking;

//Example 6
    //The sequence \\ inserts a backslash in a string:

    let backslash = "The character \\ is called backslash.";

    document.getElementById("ex6").innerHTML = backslash;

//Example 7
    //IF a JavaScript statemnet  does not fit on noe line, the best plce to break it is after an operator:

    document.getElementById("ex7").innerHTML = "Hello Dolly!";

//Example 8
    //You can also break up a code line within a text string with a single backslash:
    document.getElementById("ex8").innerHTML = "Hello \
    Dolly!";

//Example 9
    //A safer way to break up a string, is to use string additon:
    document.getElementById("ex9").innerHTML = "Hello " +  
    "Dolly! ";

//Example 10
    //You cannot break up a code line with a backslash
    // document.getElementById("ex10").innerHTML = \
    // "Hello Dolly!";

//Example 11
    //Normally, JavaScript strings are primitive values, created from literals:
                //let x = "John";

    //But strings can also be defined as objects with the keyword new:
                //let y = new String("John");

   // a is a string
   let a = "John";
   // b is a object
   let b = new String("John");

   document.getElementById("ex11").innerHTML = typeof a + "<br>" + typeof b;        //Do not create Strings objects. The new keyword complicates the code and slows down execution speed. String objects can produce enexpectd results:

//Example 12
    //When using the == operator, x and y are equal:
    let c = "John"; // c is a string
    let d = new String("John"); // d is an object
    document.getElementById("ex12").innerHTML = (c==d);

//Example 13
    // When using th === operator, x and y are not equal:
    let e = "John"; // e is a string
    let f = new String("John"); //f is a object

    document.getElementById("ex13").innerHTML = (e===f);



