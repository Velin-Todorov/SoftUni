function TicTacToe(moves){
    
    let player1 = 'X';
    let currentPlayer = player1;
    let turns = 0;

    let win = false;
    let board = [
                [false, false, false],
                [false, false, false],
                [false, false, false]
                ];

    function checkForWinHorizontal(board){
        let HorizontalWinSet0 = new Set([
                            board[0][0],
                            board[0][1],
                            board[0][2]
                        ]);          
        let HorizontalWinSet1 = new Set([
                            board[1][0],
                            board[1][1], 
                            board[1][2],

                        ]);
                            
        let HorizontalWinSet2 = new Set([
                            board[2][0],
                            board[2][1],
                            board[2][2]
                        ]);                    
                            
        if (HorizontalWinSet0.size == 1){
            if ([...HorizontalWinSet0][0] == 'X' || [...HorizontalWinSet0][0] == 'O'){
                return true;
            }
        }else if (HorizontalWinSet1.size == 1){
            if ([...HorizontalWinSet1][0] == 'X' || [...HorizontalWinSet1][0] == 'O'){
                return true;
            }
        }else if (HorizontalWinSet2.size == 1){
            if ([...HorizontalWinSet2][0] == 'X' || [...HorizontalWinSet2][0] == 'O' ){
                return true;
            }
        }
        else{
            HorizontalWinSet0.clear();
            HorizontalWinSet1.clear();
            HorizontalWinSet2.clear();
        }

    }
    function checForWinVertically(board){
       let VerticalWinSet0 = new Set([
                            board[0][0],
                            board[1][0],
                            board[2][0]
                        ])

        let VerticalWinSet1 = new Set ([
                            board[1][0],
                            board[2][0],
                            board[1][1]
                        ])
        let VerticalWinSet2 = new Set ([
                            
                            board[1][2],
                            board[2][1],
                            board[2][2]
                        ]);
        if (VerticalWinSet0.size == 1){
            if ([...VerticalWinSet0][0] == 'X' || [...VerticalWinSet0][0] == 'O'){
                return true;
            }
        }else if (VerticalWinSet1.size == 1){
            if ([...VerticalWinSet1][0] == 'X' || [...VerticalWinSet1][0] == 'O'){
                return true;
            }        
        }else if (VerticalWinSet2.size == 1){
            if ([...VerticalWinSet2][0] == 'X' || [...VerticalWinSet2][0] == 'O'){
                return true;
            }
        }else{
            VerticalWinSet0.clear();
            VerticalWinSet1.clear();
            VerticalWinSet2.clear();
        }

    }

    function checkForWinMainDiagonally(board){
        let DiagoanalWinSet = new Set([
                              board[0][0],
                              board[1][1],
                              board[2][2],
                            ]);
            
        if (DiagoanalWinSet.size == 1){
            if ([...DiagoanalWinSet][0] == 'X' || [...DiagoanalWinSet][0] == 'O'){
                return true;
            }
        }else{
            DiagoanalWinSet.clear();
        }

    }

    function checkForWinSecDiagonall(board){
        let SecDiagonalSet = new Set([
                             board[0][2],
                             board[1][1],
                             board[2][0]
                            ]);

        if (SecDiagonalSet.size == 1){
            if ([...SecDiagonalSet][0] == 'X' || [...SecDiagonalSet][0] == 'O'){
                return true;
            }   
        }else{
            SecDiagonalSet.clear();
        }

    }

    function checkIfPlaceIsNotFalse(board, row, col){
        if (board[row][col] != false){
            return true;
        }
    }

    function changeTurn(){
        currentPlayer = currentPlayer == 'X' ? 'O' : 'X'
    }

    for (let n of moves){
        let data = n.split(' ');
        let row = parseInt(data[0]);
        let col = parseInt(data[1]);
        
        
        if (checkIfPlaceIsNotFalse(board, row, col)){
            console.log("This place is already taken. Please choose another!");
            continue;
        }
        board[row][col] = currentPlayer;

        if (checForWinVertically(board) || checkForWinMainDiagonally(board) || checkForWinHorizontal(board) || checkForWinSecDiagonall(board)){
            win = true;
            console.log(`Player ${currentPlayer} wins!`);
            break;
        }

        changeTurn();
        turns+=1;

        if (turns == 9 && !win){
            break;
        }
        
    }
    if (!win){
        console.log('The game ended! Nobody wins :(')
    }


    for (let n of board){
        console.log(n.join('\t'));
    }

}


TicTacToe(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"])
