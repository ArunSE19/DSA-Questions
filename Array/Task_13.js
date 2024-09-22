function maxSubarraySum(arr){
    let sum=arr[0]
    let max=sum
    for(let i=1;i<arr.length;i++){
        sum+=arr[i]
        if(sum>max){
            max=sum
        }
        if(sum<0){
            sum=0
        }
    }

    return max
}


console.log(maxSubarraySum([1,2,3,-2,5]))