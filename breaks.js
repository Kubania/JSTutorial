let text =" ";

for (i=0;i<10;i++){
    if(i===3){
        continue;
    }
    text += "The number is "+ i + "<br>"
}

console.log(text);
document.getElementById("demo").innerHTML = text;

// JS Labels
let cars = ["Volvo","Mercedes","Toyota","Ferrari","Mini-Cooper"];
let state = "";

cars : {
    state += cars[0]+"<br>";
    state += cars[1]+"<br>";
    state += cars[2]+"<br>";
    break cars;
    state += cars[3]+"<br>";
}

document.getElementById("demo").innerHTML = state;