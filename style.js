// Java Script calling other Function: 
//const calculateAge = function (birthYear) {
//    return 2023 - birthYear;
// } 

//const jobLeft = function (birthYear){
//    const age = calculateAge(birthYear);
//    return 65 - age;
// }

//const aAge = calculateAge(1993);
//console.log(aAge);
//const ajobLeft = jobLeft(1993);
//console.log(ajobLeft);

//Java Scripts Events
//function displayText() {
//    console.log("This is console Text");
// }
//displayText();

//Example 2
//function alertText() {
//    alert("This is Alert Text");
// }

// JavaScript String:
// const firstName = "Asif";
// const lastName = "Akbar";
// console.log(firstName);
// console.log(lastName);

//Example:
// const text = 'I love "Bangladesh!"';
// console.log(text);

//Example: 2
// const text2 = "I love 'Bangladesh!'";
// console.log(text2);

//Example: 3 (scapeing character) using blackslash:
//  const text3 = "I love \"Bangladesh!\"";
//  console.log(text3);

//Example: 4
// const text4 = "I love \\ Bangladesh!";
// console.log(text4);

//Java Script String Methods:
// const text = "Amrita Deb";
// console.log(text.length);

// // String slice (left to right or positive slice)

// const fruits = "Apple, Banana, Mango";
// console.log(fruits);

// const fruit1 = fruits.slice(0, 5);
// console.log(fruit1);

// const fruit2 = fruits.slice(7, 13);
// console.log(fruit2);

// const fruit3 = fruits.slice(15, 20);
// console.log(fruit3);

// console.log(fruit1, fruit2, fruit3);

// String slice (right to left or negetive slice):

// const fruits = "Apple, Banana, Mango";

// const fruit1 = fruits.slice(-5);
// console.log(fruit1);

// const fruit2 = fruits.slice(-13, -7);
// console.log(fruit2);

// const fruit3 = fruits.slice(-20, -15);
// console.log(fruit3);

//Sub String: works as like slice string:

// const fruits = "Apple, Banana, Mango";
// const fruit1 = fruits.slice(0, 5);
// console.log(fruits);

//Replace String:
// const text = "I love Dhaka!";
// console.log(text);
// const text2 = text.replace("Dhaka", "Sylhet");
// console.log(text2);

// String toUpperCase
// const text = "Hello World!";
// console.log(text);
// console.log(text.toUpperCase());

//String toLowerCase
// const text = "Hello World!";
// console.log(text);
// console.log(text.toLowerCase());

//String trim
//  const text = "     Hello World!    ";
//  console.log(text);
//  console.log(text.trim());

//  //String trim End
//  const text1 = "     Hello World!    ";
//  console.log(text1);
//  console.log(text1.trimEnd());

//  //String trim Start
//  const text2 = "     Hello World!    ";
//  console.log(text2);
//  console.log(text2.trimStart());

//String Search:
// const text = "Rahim Karim Sakib Rahim";

// console.log(text.indexOf("Sakib"));
// console.log(text.indexOf("Karim"));

// console.log(text.lastIndexOf("Rahim"));
// // Search and Indexof works like same. But have some difference also. 
// console.log(text.search("Karim"));
