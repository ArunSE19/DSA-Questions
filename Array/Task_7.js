function rotate(arr){
    let i=0;
    let arr1=[]
    while(i<arr.length){
        if(i==0)
        {
            arr1[i]=arr[arr.length-1]
        }
        else
        {
            arr1[i]=arr[i-1]
        }
        i++
    }
    
    return arr1
}
function rotate_1(arr){
    let swap=0
    let ln=arr.length-1
    for(let i=0;i<arr.length;i++)
    {
        swap=arr[i]
        arr[i]=arr[ln]
        arr[ln]=swap
    }
}

console.log(rotate([1,2,3,4,5]))


//
reverse(arr.begin(),arr.end());
reverse(arr.begin()+1,arr.end()); 