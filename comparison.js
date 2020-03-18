function myFunction(){

    let age, voteable;
    age = document.getElementById("age").value;
    voteable = (age < 18) ? "Too young ":"Old Enough ";
    document.getElementById("demo1").innerHTML= voteable + "to vote.";
}

let ages = Number("the");
let voteables ;

if(isNaN(ages)){
    voteables  = "Input is not a number";
} else {
    voteables  = (ages < 18)? "Too young ":"Old Enough";
}

console.log(voteables  + " to vote");