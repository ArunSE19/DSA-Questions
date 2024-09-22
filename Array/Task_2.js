function minMax(){
    let arr=[7,8,3,1,13,16,17]
    let min=arr[0]
    let max=arr[0]
    for(let i=1;i<arr.length;i++)
    {
        if(arr[i]<min)
        {
            min=arr[i]
        }
        if(arr[i]>max)
        {
            max=arr[i]
        }
    }
    return {min,max}
}




console.log(minMax())
