function merge(arr,arr1,n,m){
    for (let i = 0; i < n; i++) {
        if (arr[i] > arr1[0]) {
            // Swap the elements
            let temp = arr1[0];
            arr1[0] = arr[i];
            arr[i] = temp;

            // Place arr1[0] at its correct position to keep arr1 sorted
            let first = arr1[0];
            let j = 1;
            
            // Shift elements in arr1 if necessary
            while (j < m && arr1[j] < first) {
                arr1[j - 1] = arr1[j];
                j++;
            }
            arr1[j - 1] = first;
        }
    }

}




let arr=[1,3,5,7]
let arr1=[0,2,6,8,9]
merge(arr,arr1,4,5)
console.log(arr)
console.log(arr1)
//0 3 5 7
//1 2 6 8 9

//0 1 5 7
//3 2 6 8 9
