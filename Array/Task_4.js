function sortArray(arr){
    let zeros=0;
    let ones=0;
    let twos=0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==0)
        {
            zeros++
        }
        else if(arr[i]==1)
        {
            ones++
        }
        else
        {
            twos++
        }
    }
    //console.log(zeros,ones,twos)
    let currIndex=0
    for(let i=0;i<zeros;i++)
    {
        arr[currIndex]=0
        currIndex++
    }
    for(let i=0;i<ones;i++)
        {
            arr[currIndex]=1
            currIndex++
        }
    for(let i=0;i<twos;i++)
    {
        arr[currIndex]=2
        currIndex++
    }
    return arr
}


let arr=[0,2,1,2,0]
console.log(sortArray(arr))
