import React from 'react'

export const Navbar = ({wins, turn, winner}) => {
  return (
    <div className="navbar">
        <p className='turn_1'>&#9673; <span>{wins[1]}</span></p>
        <h2 
            className={turn !== 0 
                ? `turn_${turn}`
                : `turn_${winner}`
            }
        >
        {
            winner !== 0
            ? `Gana el jugador ${winner}`
            : `Turno del jugador ${turn}`
        }
        </h2>          
        <p className='turn_2'>&#9673; <span>{wins[2]}</span></p>
    </div>
  )
}
