import React, { useState } from 'react'
import FrmPersona from './FrmPersona.jsx'
import ListaPersonas from './ListaPersonas.jsx'

let personas = []
export default function Contenedor() {

  const [numPersonas, setNumPersonas] = useState(0)
    
    function addPersona(persona){
        personas.push(persona);
        setNumPersonas(personas.length);
    }
    
    console.log(personas);


  return (

    <>
      {/* Lista de personas (tarea para mañana)
      lo ideal ...componente <ListaPersonas>
      o lo programas aqui directamente */}

    <ListaPersonas personas={personas}/>
    <FrmPersona addPersona={addPersona}/>
    </>
  )
}
