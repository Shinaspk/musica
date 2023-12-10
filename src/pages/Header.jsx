import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './cover.css'

function Header() {
    const favlist=useSelector((state)=>state.favReducer)
    console.log(favlist);
  

  return (
    <div>

<Navbar expand="lg" className="head bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand className=' fw-bolder fs-3 'style={{ color:'grey'}} href="#"><img style={{height:"100px",width:'100px'}} className='me-2 rounded-circle' src="https://cdn.dribbble.com/users/3547568/screenshots/14395014/music_jpeg_4x.jpg" alt="" />MUSICA</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
           
           
             

            <div className='btn  border rounded me-5 '   style={{marginLeft:'850px'}}>
            
        <Link  to={'./Favourates'} style={{textDecoration:"none",color:"white"}} ><i class="fa-sharp fa-solid fa-heart" style={{color:"red"}}></i>  <Badge bg="secondary">{favlist.length}</Badge></Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header