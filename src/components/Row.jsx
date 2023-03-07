import React from 'react'
import { Piece } from './Piece'

export const Row = ({idx, line, doAMove}) => {
    return (
        <div className='game_board_line'>
          {
            line.map((piece, i) => {
              return <Piece 
                    key={`${idx}${i}`}  
                    piece={piece} 
                    doAMove={doAMove} 
                    i={i} 
                />
            })
          }
        </div>
      )
}
