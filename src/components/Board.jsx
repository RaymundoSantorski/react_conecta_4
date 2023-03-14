import React from 'react';
import { Row } from './Row';

export const Board = ({doAMove, board}) => {
  return (
    <div className="game_board">
    {
      board.map((line, idx) => {
        return <Row
          key={idx}
          idx={idx}
          line={line}
          doAMove={doAMove}
        />
      })
    }
  </div>
  )
}
