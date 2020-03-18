let number = [1,2,4,3,5,1,6,4,7,5,8];

if(number[0]== number[5]){
    console.log('Correct');
}

//if, else
if(number[3]==number[1]){
    console.log('Correct')
}
else{
    console.log('Wrong, Try Again!!')
}

//while(its true) loop
let i=0;

while(i<5){
    console.log('the number is '+ i);
    i++;
}

//do while loop
do{
    console.log('the number is '+i);
    i++;
}
while(i<5);

//for loop
for(i=0; i<5; i++){
    console.log("The numbers is "+ i);
}

for(i=0; i<=50; i++){
    console.log(i+"I'm Sorry :(")
}
//Statement 1
let cars = ["Volvo","BMW","Lexus","Bentely"];
let y = 0;
let len = cars.length;
let text = "";

for(;y < len; y++){
    
    text += cars[y] + " " ;
}

console.log(text);

//Statement 3
let x = 0;
for(; i < len ;){
    text += cars[x] + " ";
    i++;
}

console.log(text);

//For/In Loop
let person = {
    fname: "John",
    lname: "Doe",
    age: 25
};

let txt ="";
let p;
for( p in person){
    txt += person[p] + " ";
}

console.log(txt)

// FOR/Of loop
let c;

for (c of cars){
    document.write(c + "<br >")
}

