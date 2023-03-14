import React from 'react'

export const Footer = ({clearWins, restart}) => {
  return (
    <div className="footer">
        <button 
            className='button button_start'
            onClick={restart}
        >Comenzar de nuevo</button>
        <button 
            className='button button_clear'
            onClick={clearWins}
        >Limpiar marcador</button>
    </div>
  )
}
