function nextPermutation(num){
    let ind1=-1
    let ind2=-1

    for(let i=num.length-2;i>=0;i--){
        if(num[i]<[num[i+1]]){
            ind1=i
            break
        }
    }
    if(ind1==-1){
        reverseArray(num,0)
    }
    else{
        for(let i=num.length-1;i>=0;i--){
            if(num[i]>num[ind1]){
                ind2=i
                swap(num,ind1,ind2)
                reverseArray(num,ind1+1)
                break
            }
        }
    }
}
function swap(num,i,j)
{
    let temp=num[i]
    num[i]=num[j]
    num[j]=temp
}
function reverseArray(num,len){
    let i=len
    let j=num.length-1
    while(i<j)
    {
        swap(num,i,j)
        i++
        j--
    }
}

let num=[1,2,3]
nextPermutation(num)
console.log(num)