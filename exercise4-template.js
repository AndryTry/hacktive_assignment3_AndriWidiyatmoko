/**
Diberikan satu buah input berupa array a.
Dari semua kemungkinan subarray yang berasal dari a, subarray manakah yang akan memberikan jumlah/sum terbesar apabila semua anggota subarray tersebut dijumlahkan?

Input:
a = [-2, -3, 4, -1, -2, 1, 5, -3]

Expected Output:
[[ 4, -1, -2, 1, 5] , 7]

Explanation:
Diantara semua kemungkinan subarray, [ 4, -1, -2, 1, 5]  merupakan subarray yang akan memberikan jumlah terbesar

Nilai 7  merupakan jumlah atau sum dari subarray  [ 4, -1, -2, 1, 5]
 */

function subArray(a) {
    // your code here
    let max = 0;
    let result = [];
    for (let i = 0; i < a.length; i++) {
        let sum = 0;
        for (let j = i; j < a.length; j++) {
            sum += a[j];
            //console.log(sum);
            //console.log('max:', max);
            if (sum > max) {
                max = sum;
                result = a.slice(i, j + 1);
            }
        }
    }
    return [result, max];      
}

let input = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log(subArray(input)) // output:[ [ 4, -1, -2, 1, 5 ], 7 ]
