function MagicMatrix(matrix){
    let sumRow = 0;
    let sumCol = 0;
    let isMagical = 0;
    let summation = 0;

    for (let row = 0; row < matrix.length; row++){
        sumRow = matrix[row].reduce((a, b) => a + b, summation);
        for (let col = 0; col < matrix[row].length; col++){
            if (matrix.length == matrix[0].length){
                sumCol += Number(matrix[col][row])
            }else{
                if (col < matrix.length - 1){
                    sumCol += Number(matrix[col][row]);
                }
            }
        }
        if (sumRow === sumCol){
            isMagical += 1;
            sumRow = 0;
            sumCol = 0;
        }

    }
    if (isMagical == matrix.length){
        return true;
    }

    return false;
}
