function seggregateElements(arr){
    let len=arr.length
    let temp
    let j=0;
    for(let i=0;i<len;i++)
    {
        if(arr[i]>0)
        {
            temp=arr[i]
            for(let k=i;k>j;k--)
            {
                arr[k]=arr[k-1]
            }
            arr[j]=temp
            j++
        }
    }
}

let arr=[1, -1, 3, 2, -7, -5, 11,6]
seggregateElements(arr)
console.log(arr)
