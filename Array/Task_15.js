//Optimal Solution-mergeSort

function inversionCount(num){
    let count=0
    for(let i=0;i<num.length;i++){
        for(let j=i+1;j<num.length;j++){
            if(num[i]>num[j])
            {
                count++
            }
        }
    }
    return count
}


console.log(inversionCount([7,72,90,21,60]))


