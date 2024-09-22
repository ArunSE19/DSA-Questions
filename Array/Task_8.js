function maxSum(arr)
{
 let len=arr.length
 let sum=0
 let max=arr[0]
 for(let i=0;i<len;i++)
    {
        sum=sum+arr[i]
        if(sum>=max)
        {
            max=sum
        }
        if(sum<0)
        {
            sum=0
        }
    } 
    return max  
}


console.log(maxSum([-1,2,3,-2,5]))

/*
class Solution:
    ##Complete this function
    #Function to find the sum of contiguous subarray with maximum sum.
    def maxSubArraySum(self,arr):
        max_sum = arr[0]
        curr_sum = arr[0]
        for x in arr[1:]:
            curr_sum = max(x, curr_sum+x)
            max_sum = max(max_sum,curr_sum)
        return max_sum  
*/