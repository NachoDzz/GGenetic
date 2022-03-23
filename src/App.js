import './App.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import {Contador} from './contador';

function onAdd(contar) {
  alert("el producto fue agregado")

}

const PRODUCTOS = [
  {
    nombre: "planta", 
    stock: 15,
    initial: 1,
    onAdd: onAdd
  }
]  

function App() {
  return (
    <div>
    <header>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <FontAwesomeIcon icon={faCartShopping} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>

    <div className='app'>
      {PRODUCTOS.map((producto) => (
        <Contador 
        initial={producto.initial}
        stock={producto.stock}
        nombre={producto.nombre}
        onAdd={producto.onAdd}/>
      ))}
    </div>

    

    </div>
    
  );
}

export default App;
