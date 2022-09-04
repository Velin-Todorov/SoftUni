function DiagonalSum(matrix){

    let MainDiagonalSum = 0;
    let SecondaryDiagonalSum = 0;


    for (let i = 0; i < matrix.length; i++){
        MainDiagonalSum += Number(matrix[i][i]);
        SecondaryDiagonalSum += Number(matrix[i][matrix[i].length- 1 - i]);
    }

    console.log(MainDiagonalSum +" "+SecondaryDiagonalSum);
}
