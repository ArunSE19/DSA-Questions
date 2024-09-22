function maxProfit(prices){
    let profit=0
    let buy=0
    for(let i=0;i<prices.length;i++)
    {
        buy=prices[i]
        for(let j=i+1;j<prices.length;j++){
            if(buy<prices[j]){
                profit=Math.max(profit,prices[j]-buy)
            }
        }
    }


    return profit
}




console.log(maxProfit([7,1,5,3,6,4]))