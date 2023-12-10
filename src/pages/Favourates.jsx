import React, { useEffect } from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { favsong } from '../services/allApi';




function Favourates() {

  const favlistarray=useSelector((state)=>state.favReducer)
 

 
  return (
    <div className='favourates'>
<Row>
  <h4 className='mt-3 text-success ms-2'>Favourate List</h4>
   {favlistarray?.length>0?
  favlistarray.map((item)=>(
    
  
 <Col lg={3} md={6} sm={12}>
   <Card className='m-2' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.album.images[0].url}  />
        
          <Card.Body>
            
            <Card.Title>({item.name.slice(0,20)})...</Card.Title>
            
            <Card.Text>
                    <p>Artist:{item.artists[0].name}</p>
                  </Card.Text>
                  <Card.Text>
                    <p>Release date:{item.album.release_date}</p>

                  </Card.Text>
                  <audio style={{width:"100%"}} src={item.preview_url} controls></audio>
          </Card.Body>
        </Card>)
 </Col>)
 ): 
 <div>
<p>No favaourates added</p>
 </div>
 } 
</Row>
    </div>
  )
}

export default Favourates