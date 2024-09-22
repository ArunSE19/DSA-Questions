function minJump(arr){
    let target=arr.length-1
    let current=0
    let jump=0
    while(current<target)
    {
        if(arr[current]==0)
        {
            jump=-1
            break
        }
        if(current+arr[current]<=target)
        {
            current+=arr[current]
            jump++
        }
        else if(current+arr[current]>target)
        {
            jump++
            break
        }
    }
    return jump
}



console.log(minJump([0, 10, 20]))