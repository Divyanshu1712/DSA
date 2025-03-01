// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.
// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

let coins = [1,2,5], amount = 11

function coinAmount(coins, amount){
    let combination = coins[0]
    // if(combination !== amount) return -1
    for(let i=1;i<coins.length;i++){
        combination = coins[i] + combination
        
    }
    return combination
}

console.log(coinAmount(coins, amount));
