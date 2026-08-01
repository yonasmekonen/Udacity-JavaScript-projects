
const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
for(let index=0; index< prices.length; index++){
    if(index===0){
        prices [index] = prices [index] * 2;
    }
    else if(index===2){
        prices [index] = prices [index] * 2;
    }
    else if(index===6){
        prices [index] = prices [index]  * 2;
    }

}
console.log(prices);