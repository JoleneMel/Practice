//how to get frequency
let prices = [7, 1, 5, 3, 6, 4]//Highest profit would be to buy on day 2(index 1) and sell on day 5(index 4) profit is 5

let prices2 = [7, 1, 5, 3, 6, 4, 8] //output 7

let prices3 = [7, 3, 5, 3, 6, 4] //Output 3

//Logic behind the question 

//you cannot sell before you buy

//or buyDay < sellDay

//You do not want to buy the stock at a higher profit 

//highStock == sellStock

//You want to buy when low to try to max profit as much as possible 
//recursion is annoying 
function rangeOfNumbers(startNum, endNum) {
    var results = [];
    if (startNum == endNum) {
      return [startNum];
    }else{
    results = rangeOfNumbers(startNum, endNum - 1)
    results.push(endNum)
    return results;
    }
  };

//I enjoy using ES6


const maxProfit = (prices) => {

    //Using a for loop like I did prevously BUT with the knowledge and logic that you cannot sell before you buy

    //So for that reason the for loop will start with 1, assuming we buy on day 0 

    //We also let buy price be below 

    let minStockPrice = prices[0];//cause you cannot sell before you buy

    let dailySale = 0;//Startin with 0, you cannot sell and buy on the same day 

    let maxSale = 0;//Same logic for the above for why this is 0

    //start with 1 to make the need for a nested for loop not needed(therefore it can run faster)

    //think of i as the day

    for(let i = 1; i < prices.length; i++) {

        //below is the current price of stock

        let currentStockPrice = prices[i];
        console.log(currentStockPrice + " is the current Stock");

        //Where we update our dailySale, or if we sold today what would that value be

        dailySale = (currentStockPrice-minStockPrice);
        console.log("the daily sale is " + dailySale);
        //this will constantly adjust the maxSale amount and store it accordingly

        if(dailySale > maxSale){

            maxSale = dailySale;

        }
        console.log("maxSale is " +  maxSale);
        //Using the above logic we want to buy when stock is low and sell when high

        //This is where we update our minStockPrice, 

        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min

        //using the spread op it can find the lowest stock price out of the array, doing this with 

        //max however could make this not work well, it will give the wrong answer, because the spread op

        //gathers all the contents thus if the max stock price is on a day that you can only buy and not sell 

        //(like in the above example) it will not be the right answer. 

        minStockPrice = Math.min(...prices);

        


    }

    return maxSale;


}

console.log(maxProfit(prices));

console.log(maxProfit(prices2));

console.log(maxProfit(prices3));


let words = ["cat", "cat", "cat", "zap","zap","zap","zap","zap", "apple", "apple", "band", "band", "aye"];
//
// function solve(arr) {
//     const frequency = {};
//     arr.forEach(element => {
//         frequency[element] = frequency[element] + 1 || 1;
//     });
//     //Spreads the array, then doing it by lowest to highest 
//     [...arr].sort((a,b)=> frequency[b] - frequency[a] || a - b);
//     let arr2 = [];
//     arr2.forEach(element) => element !== element
// }

//I like this way 
const MANY_WORDS = (array) => {
    //This turns it into an object 
    const frequency = {};
    array.forEach(word => {
        //need this because frequency needs to have a value and due to the above line it doesnt come w/ one 
        frequency[word] = frequency[word] + 1 || 1;
    });
    //Spreads the array, then doing it by lowest to highest 
    return [...array].sort((a,b)=> frequency[b] - frequency[a] || a - b);
}

// function solve2(arr) {
//     solve(arr); {
//         let arr2 = [];
//        arr.forEach(element => {element !== element}{ arr2.push(element)})

//             }
//         }
//     }
// }
// function solve(arr) {
//     const frequency = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (element[i] == elemet[i]) {
//             frequency += 1
//         }

//     }
// }
console.log(solve2(words));
