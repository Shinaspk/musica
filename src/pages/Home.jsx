import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './cover.css'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addfav } from '../redux/favSlice';


function Home() {

  const dispatch=useDispatch()
 
  
  const[search, SetSearch]=useState("")
  const [tracks, setTracks] = useState([])

  const getTracks = async () => {
    let data = await fetch(`
     https://v1.nocodeapi.com/fathimashinas/spotify/pAJkGhKkhahjvvcA/search?q=track||${search}&type=track`)

    let jsondata = await data.json()
    console.log(jsondata.tracks.items);
    setTracks(jsondata.tracks.items)
  }
  useEffect(()=>{
    getTracks()
  },[search])
  return (
    <div className='player '>
      
            <Form className="d-flex w-25 pt-3 pb-3 " style={{marginLeft:'85px'}}>

              <Form.Control
              value={search}
              onChange={event=>(SetSearch(event.target.value))}
              
                type="search"
                placeholder="type your search"
                className="me-2"
                aria-label="Search"
              />
              <Button onClick={getTracks} variant="outline-success">Search</Button>
            </Form>

         
      <div className='container'>

        
        <div className='row'>
        {tracks.map(element => (
          <div  className='col p-2 ' >
            
              <Card style={{ width: '18rem',height:"550px" }}>
                <Card.Img variant="top" src={element.album.images[0].url} />
                <Card.Body>
                  <Card.Title>{element.name.slice(0,20)}...</Card.Title>
                  <Card.Text>
                    <p>Artist:{element.artists[0].name}</p>
                  </Card.Text>
                  <Card.Text>
                    <p>Release date:{element.album.release_date}</p>

                  </Card.Text>
                  <audio style={{width:"100%"}} src={element.preview_url} controls></audio>

                  <Button onClick={()=>dispatch(addfav(element))} className='bg-success mt-2' variant="primary">Add to Favourates</Button>
                </Card.Body>
              </Card>
              </div>
            ))

          }
          </div>
          </div>
       
        </div>
        )
}
export default Home