import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { Home } from './pages/Home/Home';
import { Products } from './pages/Products/Products';
import Product from './pages/Product/Product.Jsx';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import "./main.scss"
 
const Layout = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
};

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/products/:id",
        element:<Products/>
      },{
        path:"/product/:id",
        element:<Product/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>,
)
