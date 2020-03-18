console.log(Math.PI);

let number = [5,23,65,40,8,10];
let decimals = -4.6
let number1 = number.map(myFunction);

function myFunction(value,index){
    return Math.pow(value,2);
}

console.log(number1);
console.log(Math.round(decimals));

console.log(Math.abs(decimals));

let number2 = [4.5,8.9,9.0,3.2,5.6];
let numbers = number2.map(myFunction);

function myFunction(value){
    return Math.floor(value);
}

console.log(numbers);

console.log(Math.sin(360 * Math.PI/180));

//Random Numbers
let r = Math.floor(Math.random()*101)

function display(){
    document.getElementById("demo").innerHTML = r;
}

//proper random function

function getRndInterger(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}