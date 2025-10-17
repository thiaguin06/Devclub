import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' // nesse import aqui ele ta importando uma função só se ele quiser importa mais ai ele teria que colocar assim,ex: import {app,app2} from './App.jsx'. ai se quiser renomear ele só colocar assim app, app2 as nomeqquer.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />  {/* assim ta chamando a função App, mais se quiser chama outra função so trocar o nome */}
  </StrictMode>,
)
