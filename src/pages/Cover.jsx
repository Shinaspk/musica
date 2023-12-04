import React from 'react'
import './cover.css'
import { Link } from 'react-router-dom'
import Home from './Home'

function Cover() {
  return (
   
        <div style={{height:"742px" }} className='music' >
            <div className='container pt-5 '>
                <h1 style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif",fontSize:'100px',color:"grey"}} className=''>
                 MUSICA
                </h1>

               <Link to={'/Home'} > <button  className='px-3 rounded'>Get started <i class="fa-solid fa-arrow-right"></i></button></Link>
            </div>
        </div>
  
  )
}

export default Cover