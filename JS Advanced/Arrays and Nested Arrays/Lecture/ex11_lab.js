// function EqualNeighbors(matrix){
//     let pairs = 0;
//     let checked = [];

//     for (let i = 0; i < matrix.length; i++){
//         for (let j = 0; j < matrix[i].length; j++){
            
//             let current_position = matrix[i][j];
            
//             if (i < matrix.length - 1){
//                 if (matrix[i + 1][j] == current_position){
//                     pairs++
//                 }
//             }
//             if (j < matrix[i].length){
//                 if (matrix[i][j + 1] == current_position){
//                     pairs++
//                 }
//             }
//         }
//     }
//     return pairs;
// }

// function equalNeighborsCount(matrix) {
//     let neighbors = 0;
//     for (let row = 0; row < matrix.length; row++) {
//         for (let col = 0; col < matrix[row].length; col++) {
//             if (row < matrix.length-1) {
//                 if (matrix[row][col] == matrix[row + 1][col]) {
//                     neighbors++;
//                 }
//             }
//             if(col<matrix[row].length) {
//                 if (matrix[row][col] == matrix[row][col + 1]) {
//                     neighbors++;
//                 }
//             }
//         }
//     }
//     return neighbors;
// }

function EqualNeighbors(matrix){
    let pairs = 0;

    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            
            if (matrix[i][j] == matrix[i + 1][j]){
                pairs += 1;
            }
            if (matrix[i][j] == matrix[i][j + 1]){
                pairs++;
            }
        }
    }
    return pairs;
}
console.log(EqualNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]))