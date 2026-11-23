// sort the array using selection sort

const unsortedArray = [40,20,30,10,2,3]
function sort_the_array_ascending_order(arr){
    for(let i=0; i<arr.length; i++){
        let smallestElement = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[smallestElement]){
                smallestElement = j;
            }
        }
        // swap the element
        [arr[i], arr[smallestElement]] = [arr[smallestElement], arr[i]]
    }
    return arr;
}

console.log(sort_the_array_ascending_order(unsortedArray));
