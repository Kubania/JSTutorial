let fruits = ["banana","orange","apple","mango"];
document.getElementById("demo").innerHTML = fruits.join("*");

fruits[0] = "kiwi";
console.log(fruits);
fruits[fruits.length] = "banana";
console.log(fruits);

delete fruits[0]
console.log(fruits);

fruits.splice(0,1);
console.log(fruits)

let myGirls = ["lilian","sofia","emily"];
let myBoys = ["samuel","elliot","sam"];
let myChildren = myGirls.concat(myBoys);
console.log(myChildren);

myGirls.slice(2);
console.log(myGirls);

//SORTING ARRAYS METHODS
//myChildren.sort()
myChildren.reverse();
console.log(myChildren);

//Min/Max

let points = [40,100,1,5,25,10];
points.sort(function(a,b){return a-b});// i don't understand this function
console.log(points)

function myArrayMin(arr){
   let len = arr.length;
   let max = -Infinity;
   while(len--){
       if (arr[len]> max){
           max = arr[len];
       }
   }
   return max;
}

console.log(myArrayMin(points));

//ARRAY ITERATION METHODS
let numbers1 = [45,4,9,16,25];
let numbers2 = numbers1.map(myFunction);

function myFunction(value,index,array){
    return value *2;
}

console.log(numbers2);
//Array.reduce()
let sum = numbers1.reduceRight(myFunction)

function myFunction(total,value){
    return total + value;
}

console.log(sum)
//Array.every()
let right = numbers1.every(myFunction)

function myFunction(value,index,array){
    return value > 18;
}

console.log(right)

//Array.filter()
let list = [45,89,7,3,14,22,7]
let list1 = list.filter(myFunction)

function myFunction(value){
    return value >18;
}

console.log(list1)

//Array.some()
let list2 = list.some(mySome)

function mySome(value,index,array){
    return value >18;
}
console.log(list2)

//Array.find()
let list3 = list.indexOf(7,-1)

console.log(list3)

//Array.find()
let list4 = list.find(myFind)

function myFind(value,index,array){

    return value < 18;
}

console.log(list4)