
import './App.scss'
import NavbarLanus from './components/NavbarLanus'
import Footer from './components/Footer'
import { Outlet } from "react-router-dom";
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {


  return (

    <div className='contenedor-general'>

      <NavbarLanus />
    

      <Outlet />


      <Footer />
      <ScrollToTopButton/>

    </div>

  )
}

export default App
