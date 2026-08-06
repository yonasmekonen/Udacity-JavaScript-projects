
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}
emotions("happy", function(num) {
    let result = "";
    for (let i = 0; i < num; i++) {
        result += "ha";
    }
    return result + "!";
});

let x = 1;
sum = 0;
for(let x=1; x<=100; x++){
    sum += x;
}
console.log(sum);

