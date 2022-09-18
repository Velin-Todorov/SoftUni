function DiagonalAttack(arr){

    let sumMainDiagonal1 = 0;
    let sumMainDiagonal2 = 0;
    let matrix = [];
    let centerElementRow = 0;
    let centerElementCol = 0;

    for (let n of arr){
        let elements = n.split(" ").map(Number);
        matrix.push(elements);
    }

    for (let row = 0; row <matrix.length; row++){
        sumMainDiagonal1 += Number(matrix[row][row]);
        sumMainDiagonal2 += Number(matrix[row][matrix[row].length - 1 - row]);

        if(matrix[row][row] == matrix[row][matrix[row].length - 1 - row]){
            centerElementRow = row;
            centerElementCol = row;
        }

    }

    
    matrix[centerElementRow + 1][centerElementCol] = sumMainDiagonal1
    matrix[centerElementRow - 1][centerElementCol] = sumMainDiagonal1
    matrix[centerElementRow][centerElementCol + 1] = sumMainDiagonal1
    matrix[centerElementRow][centerElementCol - 1] = sumMainDiagonal1
        

}

DiagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1'])