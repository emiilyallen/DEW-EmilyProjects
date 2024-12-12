import { useState } from 'react'
import './App.css'
import React from 'react'


//objeto persona
const unaPersona = {
  nombre: "",
  esMyorDeEdad: false,
  ciclo: "medio",
}

export default function FrmPersona({addPersona}) {

  let setNombre, setEsMyorDeEdad, setCiclo

  [unaPersona.nombre, setNombre] = useState(unaPersona.nombre);
  [unaPersona.esMyorDeEdad, setEsMyorDeEdad] = useState(unaPersona.esMyorDeEdad);
  [unaPersona.ciclo, setCiclo] = useState(unaPersona.ciclo);

  //-----------------------------------------------
  // para comprobar por consola si funciona
  //-----------------------------------------------
  // console.log(nombre)
  // console.log(esMyorDeEdad)
  // console.log(ciclo)
  
    // console.log(unaPersona); 
    //esto imprime el objeto persona por consola y cada vez que se cambia se muestran los cambios


  return(
    <form action="" onSubmit={(e)=> {
                                      e.preventDefault();
                                      addPersona(unaPersona) 
                                      }}>


      <label htmlFor="nombre">Nombre Completo: </label>
      <input type="text" name='nombre' value={unaPersona.nombre} id='nombre' onChange={(e)=>{setNombre(e.target.value);
      // console.log(unaPersona.nombre)
        unaPersona.nombre = e.target.value;
      }}/>   {/*cuando cambia el nombre se muestra el cambio con el setNombre*/}

      <br />
      <br />

      <label htmlFor="mayor-edad">Eres mayor de edad?</label>
      <input type="checkbox" name='mayor-edad' checked={unaPersona.esMyorDeEdad} id='nombre' onChange={(e)=>{setEsMyorDeEdad(e.target.checked);
        // console.log(unaPersona.esMyorDeEdad)
            unaPersona.esMyorDeEdad = e.target.checked;
      }}/> 


      <br />
      <br />

      <label htmlFor="medio">Grado medio</label>
      <input type="radio" name='ciclo' id='medio' value="medio" checked={unaPersona.ciclo == "medio"} 
                                                  onChange={(e)=>{setCiclo(e.target.value);
                                                  // console.log(unaPersona.ciclo)
                                                  unaPersona.ciclo = e.target.value;
      }} />
                                                  
      <label htmlFor="superior">Grado superior</label>
      <input type="radio" name='ciclo' id='superior'  value="superior" checked={unaPersona.ciclo == "superior"}
                                                      onChange={(e)=>{setCiclo(e.target.value);
                                                      // console.log(unaPersona.ciclo)
                                                      unaPersona.ciclo = e.target.value;
      }} />

      <br />
      <br />

      <input type="submit" id="Añadir persona" />

     </form> 
  )

}