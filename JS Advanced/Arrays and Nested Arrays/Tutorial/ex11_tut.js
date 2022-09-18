function DiagonalAttack(arr){
    let sumMainDiagonal = 0;
    let sumSecondaryDiagonal = 0;
    let DiagonalIndeces = [];
    let match;
    let matrix = [];


    for (let n of arr){
       let data = n.split(' ')
        let array = []
        for (let n of data){
            array.push(parseInt(n));
        }
        matrix.push(array);
    }
    let n = matrix.length;

    for (let i = 0; i < matrix.length; i++){
        sumMainDiagonal += matrix[i][i];
        sumSecondaryDiagonal += matrix[i][n - i - 1];
        DiagonalIndeces.push([i, i]);
        DiagonalIndeces.push([i, n - i - 1]);
        
    }

    if (sumMainDiagonal == sumSecondaryDiagonal){
        for (let row = 0; row < matrix.length; row++){
            for (let col = 0; col < matrix[row].length; col++){
                match = false;

                for (let n of DiagonalIndeces){
                    let i = n[0];
                    let j = n[1];

                    if (i == row && j == col){
                        match = true;
                        break
                    }
                }
                if (match){
                    continue;
                }else{
                    matrix[row][col] = sumMainDiagonal;           
                }

            }
        }
        for (let n of matrix){
            console.log(n.join(' '));
        }

    }else{
        for (let n of matrix){
            console.log(n.join(' '));
        }
    }
}
DiagonalAttack(['1 1 1',
'1 1 1',
'1 1 0'])
