import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
const Navbarfront = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-purple-600">
        <Container fluid>
          <Navbar.Brand className='text-white' href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className='text-white font-bold' href="#action1">Home</Nav.Link>
              <Nav.Link className='text-white font-bold' href="#action2">Privacy Policy</Nav.Link>
              <Nav.Link className='text-white font-bold' href="#action1">Blog</Nav.Link>
              <Nav.Link className='text-white font-bold' href="#action2">Chat</Nav.Link>


            </Nav>
            <Form className="d-flex ">

              <Button className=' font-bold text-white bg-transparent border-2 cursor-pointer border-white shadow-xl  hover:bg-white ' >Login</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navbarfront
