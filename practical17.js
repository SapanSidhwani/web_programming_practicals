// Define an array of 5 numbers
const numbers = [2, 4, 6, 8, 10];

// Define a function to calculate the sum of array elements
function sumArrayElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Call the function and pass the numbers array as an argument
const result = sumArrayElements(numbers);

// Output the result to the console
console.log("The sum of array elements is: " + result);
