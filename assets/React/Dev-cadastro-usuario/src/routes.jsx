import {createBrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import ListUsers from './pages/ListUsers/index.jsx'; 


const route = createBrowserRouter([
    {
        path:'/',
        element: < Home/>
    }, 
    {
        path:'/lista-de-usuarios',
        element: < ListUsers/>
    }
])
export default route;