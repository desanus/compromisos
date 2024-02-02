
import './App.scss'
import Navbar from './components/Navbar'

import { Col, Row, Container } from 'react-bootstrap'
import Compromisos from './components/Compromisos'

function App() {


  return (
    <div className='App'>
      <Container>

        <Navbar></Navbar>
        <p></p>
        <Compromisos />

      </Container>


    </div >
  )
}

export default App
