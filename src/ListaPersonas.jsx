import React from 'react'

export default function ListaPersonas({personas}) {
  return (
    <ul>
        {personas.map((persona, i)=>
        
        <li key={i}>
            
            {`${persona.nombre}`}
            
            
        </li>)}


    </ul>
  )
}
