
import './App.scss'
import NavbarLanus from './components/NavbarLanus'
import Footer from './components/Footer'
import { Outlet } from "react-router-dom";

function App() {


  return (

    <div className='contenedor-general'>

      <NavbarLanus />
      <p></p>

      <Outlet />


      <Footer />


    </div>

  )
}

export default App
