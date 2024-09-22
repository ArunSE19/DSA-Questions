function searchmatrix(matrix,target){
    let row=matrix.length
    let column=matrix[0].length
    for(let i=0;i<row;i++){
        for(let j=0;j<column;j++){
            if(matrix[i][j]==target){
                return true
            }
            else if(matrix[i][j]>target){
                return false
            }
        }
    }
    return false
}


console.log(searchmatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3))