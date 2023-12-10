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
import Modal from 'react-bootstrap/Modal';
import { Alert, Col, Row } from 'react-bootstrap';
import { favsong, getfavsong } from '../services/allApi';


function Home({ element }) {
  const [show, setShow] = useState(false);

  const [allfav,setAllfav]=useState([]) //to store category
  const [categoryName, setCategoryName] = useState({})
//modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleadd = async () => {//to add category api ton json

    if (categoryName) {
      let body = {
        categoryName,
        allsong: []
      }
console.log(body);
      //make api call
      const response = await favsong(body)
      console.log(response)
      if (response.status >= 200 && response.status < 300) {

        alert("category added succesfully")
        setCategoryName("")
        handleClose()

      } else {
        alert("something went wrong.Please try again later")
      }

    }
    else {
      alert("please complete the form")

    }
  }

  //function to get category

  const getAllfavsong=async()=>{
    const{data}=await getfavsong()
    console.log(data);
    setAllfav(data)
  }
  console.log(allfav);

  useEffect(()=>{//to get category when page is loaded
    getAllfavsong()
  },[])


  const dispatch = useDispatch()//Redux


  const [search, SetSearch] = useState("") //to get search 
  const [tracks, setTracks] = useState([])//to store  fetchd data


//to fetch data from Api
  console.log(tracks[0]);
  const getTracks = async () => {
    let data = await fetch(
    ` https://v1.nocodeapi.com/mehfil/spotify/EUbmdbbSObVoplhh/search?q=track||${search}&type=track`)

    let jsondata = await data.json()
    console.log(jsondata);
    console.log(jsondata.tracks.items);
    setTracks(jsondata.tracks.items)
  }
  useEffect(() => {//to get data when page is loaded
    getTracks()
  }, [search])

  const dragstarted=(e,id)=>{//to drag
    console.log(`drag started${id}`);
  }
  return (
    <div className='player m-3 '>
{/* search bar */}
      <Form className="d-flex w-25 pt-3 pb-3 " style={{ marginLeft: '85px' }}>

        <Form.Control
          value={search}
          onChange={event => (SetSearch(event.target.value))}

          type="search"
          placeholder="type your search"
          className="me-2"
          aria-label="Search"
        />
        <Button onClick={getTracks} variant="outline-success">Search</Button>
      </Form>


      <div className='row '>
        <div className='col-8'>
          <div className='container'>
    
    {/* fetch data and display as card */}
            <div className='row m-5'>
              {tracks.map(element => (
                <div className='col p-2 ' >
    
                  <Card style={{ width: '18rem', height: "600px" }} draggable onDragStart={(e)=>dragstarted(e.element?.album.id)}>
                    <Card.Img variant="top" src={element.album.images[0].url} />
                    
                    <Card.Body>
                      <Card.Title>{element.name.slice(0, 20)}...</Card.Title>
                      <Card.Text>
                        <p>Artist:{element.artists[0].name}</p>
                        
          
                      </Card.Text>
                      <Card.Text>
                        <p>Release date:{element.album.release_date}</p>
    
                      </Card.Text>
                      <audio style={{ width: "100%" }} src={element.preview_url} controls></audio>
    
                      <Button onClick={() => dispatch(addfav(element))} className='bg-success mt-2' variant="primary">Add to Favourates</Button>
                    </Card.Body>
                  </Card>
                </div>
              ))
          
              }
            </div>
          </div>
        </div>

        {/* category adding */}
        <div className='col-4'><h2>Make your category </h2>
        <br />
        <button onClick={handleShow} className='text-successm btn btn-dark'>Add your music</button>
        
        {allfav?.length > 0 ?
        allfav?.map((item) => (
          <div className='border border-secondary m-5  rounded p-1'>
            <div className="d-flex justify-content-between align-item-center"   >
              <h6>{item.categoryName}</h6>
              <Button className='ms-5' variant="danger"><i class="fa-solid fa-trash fs-2x"></i></Button>
            </div>

            
          </div>)) :
        <p>nothing to display</p>
      }
        
        </div>

      
      
      </div>

      {/* Modal for adding category */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your division</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input onChange={(e) => setCategoryName(e.target.value)} className='w-100 rounded' type="text" name="" id="" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  onClick={handleadd}>
           Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

    
  )
}
export default Home