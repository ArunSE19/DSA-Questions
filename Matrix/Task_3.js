function median(matrix,R,C)
{
    // let total=R*C
    // for(let i=0;i<R;i++)
    // {
    //   matrix[i]=matrix[i].sort(function(a, b){return a - b})
    // }

    // let mid=Math.ceil(total/2)
    let arr=[]
    let count=0
    for(let i=0;i<R;i++){
        for(let j=0;j<C;j++){
            arr[count]=matrix[i][j]
            count++
        }
    }
    arr.sort(function(a,b){return a-b})
    
    let mid=Math.ceil((R*C)/2)

    return arr[mid-1]


}



console.log(median([[1, 3, 5], 
    [2, 6, 9], 
    [3, 6, 9]],3,3))