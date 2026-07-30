const laugh = function(max){
    let result = " ";
    for(let i=1; i<=max; i++){
        result += "ha";
    }
    return result += "!";
}
const emotion = function(midPar){
    let result = "i am "+ midPar +laugh(2);
    return result;

}


console.log(emotion("Happy"));