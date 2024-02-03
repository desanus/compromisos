
import './App.scss'
import NavbarLanus from './components/NavbarLanus'

import { Col, Row, Container } from 'react-bootstrap'
import Compromisos from './components/Compromisos'
import Footer from './components/Footer'

function App() {


  return (
    
      <div className='contenedor-general'>
    
          <NavbarLanus />
        

        <p></p>
        
          <Compromisos />
      
        <p></p>
        <Footer />

      </div>
    
  )
}

export default App
