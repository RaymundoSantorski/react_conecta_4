import React from 'react'

export const Piece = ({piece, doAMove, i}) => {
    if(piece === 0) {
        return (
          <div 
            className='empty_piece'
            onClick={() => doAMove(i)}
          ></div>
        )
    }else return (
        <div 
            className={`piece_${piece}`}
            onClick={() => doAMove(i)}
        ></div>
    )
}
