function sumTower(Arr,n,k){
    arr.sort((a, b) => a - b);

    // Initialize the difference
    let diff = arr[n - 1] - arr[0];
    let smallest = arr[0] + k;
    let largest = arr[n - 1] - k;

    // Step 2: Calculate possible minimum difference after modifying the array
    for (let i = 0; i < arr.length - 1; i++) {
        let mini = Math.min(smallest, arr[i + 1] - k);
        let maxi = Math.max(largest, arr[i] + k);
        if (mini < 0) continue;
        diff = Math.min(diff, maxi - mini);
    }
    return diff;
}


console.log(sumTower([1,5,8,10],4,2))