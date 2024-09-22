function goUnion(arr1,arr2)
{
    let s1=new Set()
    for(let i=0;i<arr1.length;i++)
    {
        s1.add(arr1[i])
    }
    for(let i=0;i<arr2.length;i++)
    {
        s1.add(arr2[i])
    }
    return s1.size
}


console.log(goUnion([1,2,3,4,5],[3,4,5,6,7]))