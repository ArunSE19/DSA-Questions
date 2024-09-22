let num=[1,2,3,4,5,6]
let iteration=num.length/2
for(let i=1;i<=iteration;i++)
{
    let temp=num[i-1]
    num[i-1]=num[num.length-i]
    num[num.length-i]=temp
    console.log(`Iteration:${i}=${num}`)
}


//

let reverseArray=num.slice().reverse()
console.log(reverseArray)

