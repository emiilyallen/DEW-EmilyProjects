import React from 'react'; // Importa React para asegurar compatibilidad
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Contenedor from './Contenedor.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contenedor />
  </StrictMode>
);
