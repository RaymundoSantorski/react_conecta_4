import { useState } from 'react';

export const useGame = () => {
    const initialBoard = [
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
    ]
    const pathsToLook = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1], 
        [1, -1],
        [1, 0],
        [1, 1],
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
        setIsMoving(false);
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

    function doAMove(col){
        if(isMoving || winner !== 0) return;
        setIsMoving(true);
        let idx = board[col].findIndex(piece => piece === 0);
        if(idx < 0){
            setIsMoving(false);
            return;
        }
        let auxBoard = [...board];
        for(let i=5; i>=idx; i--){
            if(i < 5) auxBoard[col][i+1] = 0;
            auxBoard[col][i] = turn;
            setBoard(auxBoard);
        }
        checkWinner(col, idx);
        setIsMoving(false);
    }

    async function sleep(ms){
        setTimeout(() => {
            return;
        }, ms);
    }

    function checkWinner(col, idx){
        for(let path of pathsToLook){
            let [y, x] = path;
            if(idx+y>=0 && idx+y<=5 && idx+(y*2)>=0 && idx+(y*2)<=5 && idx+(y*3)>=0 && idx+(y*3)<=5
            && col+x>=0 && col+x<=6 && col+(x*2)>=0 && col+(x*2)<=6 && col+(x*3)>=0 && col+(x*3)<=6 
            && board[col][idx] === board[col+x][idx+y] && board[col][idx] === board[col+(x*2)][idx+(y*2)]
            && board[col][idx] === board[col+(x*3)][idx+(y*3)]){
                chooseAWinner(board[col][idx]);
                return;
            }
            toggleTurn();
        }
    }

    return [board, doAMove, turn, winner, wins, restart, clearWins];
}