import React from 'react'

export const Row = ({idx, line, doAMove}) => {
    return (
        <div className='game_board_line'>
          {
            line.map((piece, i) => {
              if(piece === 0) {
                return (
                  <div 
                    key={`${idx}${i}`} 
                    className='empty_piece'
                    onClick={() => doAMove(i)}
                  ></div>
                )
              }else return (
                  <div 
                    key={`${idx}${i}`} 
                    className={`piece_${piece}`}
                    onClick={() => doAMove(i)}
                  ></div>
                )
            })
          }
        </div>
      )
}
