// 2 : Array : Two-pointer/min-max Best Time to Buy and Sell Stock Easy https://leetcoInput:sell.de.com/problems/best-time-to-buy-and-sell-stock/

// prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you 
let prices = [7, 1, 5, 3, 6, 4]

function buySellStock(prices) {
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        // console.log(`Day ${i} of stock price is ${prices[i]}`) // show the the i'th day of stock 
        for (let j = i+1; j < prices.length; j++) {
           let profit = prices[j] - prices[i]
           if(profit > max){
                max = profit
           }
        }
    }
    return max

}
// console.log(buySellStock(prices))

// two pointer method 

function twoPointer(a){
    let min = a[0]
    let max =0 
    for(let i=0;i<a.length;i++){
        min = Math.min(min, a[i])
        let profits= a[i] - min
        max = Math.max(profits, max)
    }
    return max


}
console.log(twoPointer(prices))