function Orbit(arr){

    let n = arr[0];
    let m = arr[1];
    let row = arr[2];
    let col = arr[3];

    let matrix = [];

    for (let i = 0; i < n; i++){
        matrix[i] = [];
    }

    for (let i = 0; i < n; i++){
        for (let j = 0; j < m; j++){
            matrix[i][j] = Math.max(Math.abs(i - row), Math.abs(j - col)) + 1;
        }
    }

    matrix.forEach(row => console.log(row.join(" ")));
}