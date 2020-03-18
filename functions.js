//Function

// performing a task
function greet(name) {
    console.log('Hi There!'+ name);
 
}

function display(){
    document.getElementById("demo").innerHTML=greet("Mercy");
}

greet('john');

// calculates value
function square(number) {
    return number * number;
}
console.log(square(4));
