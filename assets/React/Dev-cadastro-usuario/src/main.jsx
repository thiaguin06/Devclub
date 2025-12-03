import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle} from'./styles/Globalstyles.js'
import { RouterProvider} from 'react-router-dom'
import router from './routes.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    < RouterProvider router={router}/>   {/* assim ta chamando a função App, mais se quiser chama outra função so trocar o nome, import Home from './pages/Home/index.jsx'  */}
  </StrictMode>,
)


