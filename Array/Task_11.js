function findDuplicate(arr){
   let s1=new Set()
   for(let i of arr){
      if(s1.has(i))
      {
         return i
      }
      s1.add(i)
   }
   return -1
}



console.log(findDuplicate([1,3,4,2,2]))