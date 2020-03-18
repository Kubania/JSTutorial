let str = "Visit W3schools";

// returns the position 
let n = str.search("W3schools");
console.log(n)

//search using a regular expression
let m = str.search(/W3schools/i)
console.log(m)

let res = str.replace(/w3schools/i,"microsoft");
console.log(res);

// regular expressions modifiers
let str1 = "\nIs th\nis it?";
let patt = /^is/m;      
let results = str1.match(patt);
console.log(results);

//regular expressions patterns
let str2 = "Is this all there is?";
let patt1 = /[h]/g;
let results1 = str2.match(patt1);
console.log(results1);

let str3 = " re,green,red,green,gren,gr,blue,yellow";
let patt2 = /(red|green)/g;
let results2 = str3.match(patt2);
console.log(results2);

//regular expressions metacharacter
let str4 = "visit W3schools visit now";
let patt3 = /\bv/g;// case sensitive
let results3 = str4.match(patt3);
console.log(results3);

// regular expressions quantifiers
let str5 = "beach holidays flash rates";
let patt4 = /ac?/g;
let results4 = str5.match(patt4);
console.log(results4);


// regular expression methods
let patt5 = /e/;
let results5 = patt5.test("The best things in life are free");
console.log(results5);// searches for the string e in the string and returns true or false
console.log(patt5.exec("The best things in life are free"));

