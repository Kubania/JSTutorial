//Date Object
let a = new Date();

let now = a.toString();
console.log(now);

//ISO Date Formats
let b = new Date("2020-02Z");

//Get Date Methods
console.log(a.getFullYear());

let months = ["January", "February", "March", "April", "May", "June", "July", 
"August", "September", "October", "November", "December"]

let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Sartuday"]

console.log(months[a.getMonth()])

console.log(a.getDate())

console.log(days[a.getDay()])

//Set Date Method
let c = new Date();
c.setUTCFullYear(2021);
console.log(c)

c.setMonth(3)
console.log(c)

//Comparing Dates

let today, someday,text;
today = new Date();
someday = new Date();
someday.setFullYear(2100,1,18);

if (someday > today){
    text = "Today is before February 18, 2100.";
} else {
    text = "Today is after February 18, 2100."
}

console.log(text);


