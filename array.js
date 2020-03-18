//Arrays
let selectedColors = ['red','blue'];
selectedColors[2] = 1;
console.log(selectedColors[0])
console.log(selectedColors.length);

let cars = ["volvo","BMW","lexus"];
document.getElementById("demo").innerHTML=cars;

function myFunction(){
  cars[cars.length]="Range";
  document.getElementById("demo").innerHTML=cars;
}



let fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
    }
text += "</ul>";
document.getElementById("demo").innerHTML=text;

let points = new Array(40,100);
console.log(points)

