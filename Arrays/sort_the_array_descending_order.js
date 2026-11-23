// sort the array using selection sort in descending order

const unsortedArray = [40,20,30,10,2,3]
function sort_the_array_descending_order(arr){
    for(let i=0; i<arr.length; i++){
        let largestElement = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] > arr[largestElement]){
                largestElement = j;
            }
        }
        // swap the element
        [arr[i], arr[largestElement]] = [arr[largestElement], arr[i]]
    }
    return arr;
}

console.log(sort_the_array_descending_order(unsortedArray));