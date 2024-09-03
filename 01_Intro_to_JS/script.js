'use sctrict'
// document.write("We added text from outer script");
// console.log("Info for user");
// console.warn("Some worn message!");
// console.error("Some error message!");

// console.log(3 * 4);
// console.log('34' + 3); //concat
// //interpolaction
// console.log(`Suma 2+3=${2 + 3}`);

// // ====================variable==============
// var a; //рівень функції
// let b; //рівень блоку
// const c = 56;
// console.log(`a=${a}`);
// console.log(`b=${b}`);
// console.log(`c=${c}`);

// a = 4;
// b = 5;
// // c=88; //error

// console.log(`Suma ${a}+${b}=${a + b}`);
// function Suma(a, b) {
//     return a + b;
// }


// let empty; //undefind
// let nullObject = null;//null  
// let number = 44.6 // number -2^53 to 2^35 =>Number convert to int => parseInt(), float=> parseNumber()
// let email = "shrolts@gmail.com";
// let flag = true; //boolean
// let array = [3, 4, "7", "hello", [4, 5, 6]] //Array
// let func = function Suma(a, b) {  //function
//     return a + b;
// }

// let varBigint = 2300000n;
// //invoke function

// console.log(func(3, 4));
// console.log(`Empty=${empty} => Type: ${typeof empty}`)
// console.log(`nullObject=${nullObject} => Type: ${typeof nullObject}`)
// console.log(`number=${number} => Type: ${typeof number}`)
// console.log(`flag=${flag} => Type: ${typeof flag}`)

// //....
// console.log(array);

// //унарні: +,-,++,--
// //бінарні:+,-,*,/,%,**(power)
// // +=, -=, /=,*=,%=, ??=
// //345=1-344

// //NaN
// //isNan("345.5d") => true
// //isNan("345.5") => false
// //тернарний
// let num1 = +prompt("Input n1", 10);
// let num2 = +prompt("Input n2", 12);
// let max = (num1 > num2) ? num1 : num2;
// console.log(`max=${max}`)

// //left operand ?? right operand (default value)
// num1 = 55555;
// let result = num1 ?? "It is null";
// console.log(result);

// num1 = undefined;
// result = num1 ?? "It is undefind";
// console.log(result);

// num1 = null;
// result = num1 ?? "It is null";
// console.log(result);


// //logic operator
// //AND
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);
// //OR
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);
// //NOT
// console.log(!false);
// console.log(!true);

// //equel ==, ===

// console.log("Apple" == "apple");//false
// console.log("45" == 45);//true
// console.log("45" === 45);//false

// /*
// if (condition1) {
//  // ...
// } else if (condition2) {
//  // ...
// } else if (condition3) {
//  //...
// } else {
//  //...
// }
// */


// /*
// switch (expression) {
//     case value1:
//     statement1;
//     break;
//     case value2:
//     statement2;
//     break;
//     case value3:
//     statement3;
//     break;
//     default:
//     statement;
//    }
//    */

// let count = 0;
// while (count < 10) {
//     document.write(count + "<br>");
//     count++;
// }


// for (let count = 0; count < 10; count++) //count+=3
//     document.write(count + "<br>");

let count = 1;
do {
    document.write(count + "<br>");
    count++;
} while(count <= 10);



//Виконати діалог із користувачем
let nameStudent=prompt("Input name");
alert(`Hello, ${nameStudent}`)
let answerStudent=confirm("Are you ready to learn?") //true or false
if (answerStudent===true){ // 
    alert("Cool!!!");
}else{
    alert("not very good :)")
}

// let arr1={
//     name:"Tatiana",
//     age: 40
// }

let arr1=[2,3,5]
for (const i in arr1) {
    console.log(i+" "+arr1[i] );
}


for (const item of arr1) {
    console.log(item);
    
}


//continue, break