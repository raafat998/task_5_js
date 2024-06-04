// 1-Write a function to find the largest element in an array.
// var arr = [10, 5, 20, 8];

// var largest = arr[0]; 

// for (var i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         largest = arr[i];
//     }
// }

// console.log("The largest element is: " + largest);


// 2-Write a function to find the smallest element in an array.

// var smallest = arr[0]; 

// for (var i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//         smallest = arr[i];
//     }
// }

// console.log("The largest element is: " + smallest);

// 3-Write a function to find the sum of all elements in an array.



// var arr = [10, 5, 20, 8];
// var sum = 0;

// for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// console.log(sum);



// 4-Write a function to find the average of all elements in an array.
// var arr = [10, 5, 20, 8];
// var sum = 0;

// for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     arrLength=arr.length;
    
// }
// avg=sum/arrLength;
// console.log(avg);

// 5-Write a function to find the median of all elements in an array.
//function to find the median of the given array

    // function findMedian(arr) {
    //     arr.sort((a, b) => a - b);
        
    //     let length = arr.length;
    //     let middle = Math.floor(length / 2);
    
    //     if (length % 2 === 1) {
    //         return arr[middle];
    //     } else {
    //         return (arr[middle - 1] + arr[middle]) / 2;
    //     }
    // }
    
    
    // const arr = [11, 12, 13, 14, 15, 16, 17, 18, 19];
    // console.log(findMedian(arr)); 



// 6-Write a function to remove all duplicates from an array.
// let arr = [1, 2, 3, 2, 4, 5, 2];
// let uniqueArr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) === i) {
//         uniqueArr.push(arr[i]);
//     }
// }

// console.log(uniqueArr); 
// 7-Write a function to sort an array in ascending order.
// function sortAscending(arr) {
//     let len = arr.length;
//     for (let i = 0; i < len - 1; i++) {
//         let minIndex = i;
        
//         for (let j = i + 1; j < len; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }

//         if (minIndex !== i) {
//             let temp = arr[i];
//             arr[i] = arr[minIndex];
//             arr[minIndex] = temp;
//         }
//     }
//     return arr;
// }

// let arr = [3, 1, 5, 2, 4];
// let sortedArr = sortAscending(arr);

// console.log(sortedArr);
// 8-Write a function to sort an array in descending order.

// function sortDescending(arr) {
//     let len = arr.length;
//     for (let i = 0; i < len - 1; i++) {
//         let maxIndex = i;
//         for (let j = i + 1; j < len; j++) {
//             if (arr[j] > arr[maxIndex]) {
//                 maxIndex = j;
//             }
//         }
//         if (maxIndex !== i) {
//             let temp = arr[i];
//             arr[i] = arr[maxIndex];
//             arr[maxIndex] = temp;
//         }
//     }
//     return arr;
// }

// let arr = [3, 1, 5, 2, 4];
// let sortedArr = sortDescending(arr);

// console.log(sortedArr);

// 9-Write a function to shuffle the elements of an array randomly.
function shuffleArray(arr) {
    let shuffledArr = arr.slice(); 
    for (let i = shuffledArr.length - 1; i > 0; i--) {
        
        let randomIndex = Math.floor(Math.random() * (i + 1));

      
        let temp = shuffledArr[i];
        shuffledArr[i] = shuffledArr[randomIndex];
        shuffledArr[randomIndex] = temp;
    }

    return shuffledArr;
}

let arr = [1, 2, 3, 4, 5];
let shuffledArr = shuffleArray(arr);

console.log(shuffledArr);

