let str = "Apple, Banana, Peaches";
let res = str.slice(5)

let res1 = str.substr(15,5);

let res2 = str.substring(13)

console.log(res)
console.log(res1)
console.log(res2)

console.log([1,2,3,4].constructor)

//Convert Decimal to Binary
function dec2bin (dec){
    return (dec >>> 0).toString(2);
}

console.log(dec2bin(5))

let x = 5 << 1;
console.log(x);