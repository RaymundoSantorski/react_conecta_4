import { useState } from 'react';

export const useGame = () => {
    const initialBoard = [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
    ]
    const pathsToLook = [
        // [-1, 0],
        [-1, 1],
        [0, 1], 
        [1, 1],
        [1, 0],
    ]

    const [board, setBoard] = useState(initialBoard);
    const [turn, setTurn] = useState(1);
    const [winner, setWinner] = useState(0);
    const [isMoving, setIsMoving] = useState(false);
    const [wins, setWins] = useState(
        {
            1: 0,
            2: 0
        }
    );

    function chooseAWinner(win){
        setWins((val) => {
            return {
                ...val,
                [win]: val[win] + 1
            };
        });
        setWinner(win);
        setTurn(0);
    }

    function restart(){
        setBoard(initialBoard);
        setTurn(1);
        setWinner(0);
    }

    function clearWins(){
        setWins({
            1: 0,
            2: 0
        });
    }

    function toggleTurn(){
        if(turn === 1) setTurn(2);
        else setTurn(1);
    }

    // function doAMove(col, idx = 0){
    //     setIsMoving(true);
    //     if(!isMoving){
    //         if(idx > 5 || winner !== 0) {
    //             setIsMoving(false);
    //             return;
    //         }
    //         if(idx === 0 && board[idx][col] !== 0) {
    //             setIsMoving(false);
    //             return;
    //         }
    //         if(board[idx][col] === 0 && winner === 0){
    //             let auxBoard = [...board];
    //             auxBoard[idx][col] = turn;
    //             if(idx > 0) auxBoard[idx - 1][col] = 0;
    //             setBoard(auxBoard);
    //             setTimeout(() => {
    //                 doAMove(col, idx + 1);
    //             }, 200);
    //         }
    //         if((idx < 5 && board[idx+1][col] !== 0) || idx===5){
    //             console.log(idx, col);
    //             checkWinner();
    //             setIsMoving(false);
    //         }
    //     }
    // }

    function doAMove(col){
        setIsMoving(true);
        if(!isMoving){
            for(let idx=0; idx<6; idx++){
                let auxBoard = [...board];
                if(auxBoard[idx][col] !== 0){
                    checkWinner();
                    setIsMoving(false);
                    return;
                }
                setTimeout(() => {
                    auxBoard[idx][col] = turn;
                    if(idx>0) auxBoard[idx-1][col] = 0;
                    setBoard(auxBoard);
                }, 200);
            }
            checkWinner();
            setIsMoving(false);
            return;
        }
    }

    function checkWinner(){
        let win = 0;
        for(let i=0; i<pathsToLook.length; i++){
            const path = pathsToLook[i];
            let [yDif, xDif] = path;
            let y = 0;
            let x = 0;
            while(y<=5 && x<=6){
                if((yDif+y>=0 && yDif+y<=5) && (xDif+x>=0 && xDif+x<=6)
                    && ((yDif*2)+y>=0 && (yDif*2)+y<=5) && ((xDif*2)+x>=0 && (xDif*2)+x<=6)
                    && ((yDif*3)+y>=0 && (yDif*3)+y<=5) && ((xDif*3)+x>=0 && (xDif*3)+x<=6)
                ){
                    if(board[y][x] !== 0 
                        && board[y+yDif][x+xDif] === board[y][x]
                        && board[y+(yDif*2)][x+(xDif*2)] === board[y][x]
                        && board[y+(yDif*3)][x+(xDif*3)] === board[y][x]
                    ) {
                        win = board[y][x];
                        chooseAWinner(win);
                        y=6;
                        x=7;
                        return;
                    }
                }
                if(x<6) {
                    x++;
                }else if(y<5){
                    x=0;
                    y++;
                }
                if(x===6 && y===5) break;
            }
            if(win !== 0) {
                return;
            }
        }
        if(win === 0) toggleTurn();
    }

    return [board, doAMove, turn, winner, wins, restart, clearWins];
}