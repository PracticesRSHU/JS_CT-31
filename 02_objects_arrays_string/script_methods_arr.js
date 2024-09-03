let array1 = new Array(2, 3, 7, 9, 3, 7, 9);
console.log(array1);

let array2 = Array.from("JavaScript!");
console.log(array2);

let array3 = Array.from(array1);
console.log(array3);

// // Array.of  - method init array

let array4 = Array.of("Apple", "Ananas", "Cherry");
console.log(array4);

// let array5=array4;
// array5[2]="Plum";
// console.log(array4);
// console.log(array5);
let array6 = Array.from(array4);
// array6.length=2;
// console.log(array4);
console.log(array6);


// find element and return indexOf is => index ,  is not => -1
console.log(array6.indexOf("Ananas"));
array6[2] = "Ananas";
array6[3] = "Cherry";
console.log(array6);
console.log(array6.indexOf("Ananas", 2));
console.log(array6.indexOf("Banane"));

// /// Порахувати скільки разів деяке шукане значення зустрічається в масиві
let arr1 = [34, 45, -14, 24, 45, 65, 34, 45];
console.log(arr1);
let count = 0;
let index = arr1.indexOf(45);//index=1
while (index != -1) {
    count++;
    console.log(index);
    index = arr1.indexOf(45, index + 1);
}

console.log("count=", count);
// //lastIndexOf

// count=0;
// index=arr1.lastIndexOf(45);//index=7
// while(index!=-1){
//     count++;
//     console.log(index);
//     index=arr1.lastIndexOf(45,index-1);
// }
// console.log("count=",count);


function findItem2(newArr, array) {
    for (let i = newArr.length, j = 0; j < array.length; j++) {
        count = 0;
        let index = newArr.indexOf(array[j]);
        while (index != -1) {
            count++;
            index = newArr.indexOf(array[j], index + 1);
        }
        if (count == 0) {
            newArr[i] = array[j];
            i++;
        }
    }
}

let resArr = []
findItem2(resArr, [2, 3, 5, 5, 7, 8, 8, 5])
console.log(resArr);
//============sorting=======
// //  arr.sort([compareFunc])

let arr2 = [3, 76, 45, 33, 23, 89, 88, 14, 4];

console.log(arr2);
arr2.sort();
console.log(arr2);
let ruleFunc = function (n1, n2) {
    if (n1 > n2) return 1;
    else if (n1 < n2) return -1;
    return 0;
}
// arr2.sort((a, b) => a - b);
arr2.sort(ruleFunc);
console.log(arr2);


let arr3 = ["Node", "Java", "React", "JavaScript"]
console.log(arr3);
arr3.sort();
console.log(arr3);

// // // в порядку зростання
// // // n1>n2 => 1
// // // n1<n2 => -1
// // // n1==n2 => 0

// function compareFunc(n1, n2) {
//     if (n1 > n2) 
//         return 1;
//     else if (n1 < n2) 
//         return -1;
//     else 
//         return 0;
// }

// function compareNumber(n1, n2) {
//     return n1-n2;
// }
// console.log(arr2);
// // arr2.sort(compareFunc);
// arr2.sort(compareNumber);
// console.log(arr2);

// // //Нехай в нас є рядок. Конвертувати рядок в масив, 
// // //розбивши на елементи масиву, на основі якогось роздільника.
let str1 = "Нехай в нас є рядок. Конвертувати рядок в масив, розбивши на елементи масиву, на основі якогось роздільника.";
let arr4 = str1.split(" ");

console.log(arr4);
console.log("count word=", arr4.length);

let newstr = arr4.join(";");
console.log(newstr);
let array = [3, -5, 123, 44];

// for (let i = 0; i < array.length; i++) {
//     console.log(`Element[${i}]: ${array[i]}`);
// }
// // /*
// array.forEach((elem, ind) => {
//     console.log(`Element[${ind}]: ${elem}`);
// })

// // */
// // console.log("for in");
// // // 0, 1, 2, 3, 4...
// for (const key in array) {
//     console.log(key);
// }

// // console.log("for of");
// // // 3, -5, 123, 44...
// for (const value of array) {
//     console.log(value);
// }

// // -=-=-=-=-=-=- Array Methods -=-=-=-=-=-=-

console.log("Original Array: ", array);

// array.push(777); // add element to the end
// console.log("Array:", array);

// array.pop(); // remove the last element
// console.log("Array:", array);

// array.shift(); // remove the first element
// console.log("Array:", array);

// array.unshift(555); // add to the beginning
// console.log("Array:", array);

// console.log("Index of first 123:", array.indexOf(123));  // if not found = -1
// console.log("Index of last 123:", array.lastIndexOf(123));

// console.log("Found:", array.find((elem) => elem < 0));

// array.sort();
// console.log("Sorted by default:", array);

// // compare result:
// // 0 - items are equals
// // <0 - less
// // >0 - bigger
// array.sort((a, b) => a - b);
// console.log("Sorted with custom func:", array);

array.splice(2, 1); // 1 element from index 2
console.log("After remove:", array);

const copy = array.slice(1, array.length - 1); // [ )
console.log("Copied array:", copy);

array = [4, 6, 8, 1, 13, 16, -4, 0, 99];

const filtered = array.filter((el) => el % 2 == 0);
const filtered2 = array.filter((el) =>{ 
    console.log(el);
    return el % 2 == 0;});
const filtered1 = array.filter(function (el) {
     return el % 2 == 0; 
    });
console.log("Filtered array:", filtered);

// const colors = ['red', 'brown', 'green', 'gold', 'silver'];

// const str = colors.join(" - ");
// console.log("Str after join: ", str);

// console.log("Elements after split: ", str.split(' - ').length);

arr1=["Andriy","Bogdan", "Marta"];
let newArr1=arr1.slice();
console.log("arr1:",arr1);
console.log("newArr1:",newArr1);
newArr1[3]="Volodimir";
console.log("arr1:",arr1);
console.log("newArr1:",newArr1);

// //spread-оператор
// // ...array
let arr11=[...arr1]
console.log(arr11);
let arr12=new Array(...arr1); //"Andriy","Bogdan", "Marta"
console.log(arr12);
let arr13=[...arr11,"third arr",...arr12]
console.log(arr13);

let arr14=[arr11,"third arr",arr12];
console.log(arr14)

// console.log("=====================");
// arr3=[3,4,6];
// console.log(arr3);
// arr3[3]=55; // [3,4,6,55]
// console.log(arr3);
// arr3.push(77); // [3,4,6,55,77]
// console.log(arr3);
// //delete last item
// arr3.length=arr3.length-1; // arr3.length=5-1=4
// console.log(arr3);
// console.log(arr3.pop())
// console.log(arr3);
// console.log(arr3.shift())
// console.log(arr3);
// arr3.unshift(33);
// console.log(arr3);
// let arr5=arr3.splice(-1);
// console.log(arr5);
// console.log(arr3);
// arr3=[3,4,6,55,77];
// console.log(arr3.splice(1,3));
// console.log(arr3); //[3,77]

// let arr6=arr3.concat([88,99]);
// console.log(arr6);
// arr6.reverse()
// console.log(arr6);
// 