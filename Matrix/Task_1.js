function spirallyTraverse(matrix){
   let top=0
   let row=matrix.length-1
   let left=0
   let column=matrix[0].length-1
    let arr=[]
    let count=0
   while(top<=row && left<=column){
        for(let i=left;i<=column;i++){
            arr[count]=matrix[top][i]
            count++
        }
        top++
        for(let i=top;i<=row;i++){
            arr[count]=matrix[i][column]
            count++
        }
        column--
        if(top<=row){
            for(let i=column;i>=left;i--){
                arr[count]=matrix[row][i]
                count++
            }
            row--
        }
        if(left<=column){
            for(let i=row;i>=top;i--){
                arr[count]=matrix[i][left]
                count++
            }
            left++
        }
   }
   return arr

}



console.log(spirallyTraverse([[1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15,16]]))

/*
 1  2  3  4
 5  6  7  8
 9 10 11 12
13 14 15 16
*/