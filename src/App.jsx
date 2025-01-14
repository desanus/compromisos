
import './App.scss'
import NavbarLanus from './components/NavbarLanus'
import Footer from './components/Footer'
import { Outlet } from "react-router-dom";
import ScrollToTopButton from './components/ScrollToTopButton';


function App() {

  if (import.meta.env.MODE === 'development') {
    console.log('Estamos en desarrollo');
    // Ejemplo de uso
    console.log('API URL:', import.meta.env.VITE_API_URL);
    
  }
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
