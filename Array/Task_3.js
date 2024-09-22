function kthsmallest(arr,k)
{
    for(let i=0;i<arr.length;i++)
    {
        let minIndex=i
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[j]<arr[minIndex])
            {
                minIndex=j
            }
        }
        if(minIndex!=i)
        {
            arr[i]=arr[minIndex]+arr[i]
            arr[minIndex]=arr[i]-arr[minIndex]
            arr[i]=arr[i]-arr[minIndex]
        }
    }

    return arr[k-1]
}

let arr=[1,5,3,9,10,12,16]
console.log(kthsmallest(arr,4))