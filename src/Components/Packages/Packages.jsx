import React from 'react'
import "./Packages.css"
import { FaArrowAltCircleRight } from "react-icons/fa";
export default function Packages() {
  return (
    <>
  
    <div className='packages'>
    <center> <h1>POPULAR PACKEGES</h1></center>
    <div class="row row-cols-1 row-cols-md-2 g-4">
 <center>
 <div class="col">
    <div class="card c_c">
      <img src="./Images/pp1.jpeg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title h_p">Sunset view of beautiful lakeside </h5>
      
        <button className='h_b'>Book Now</button>
        <FaArrowAltCircleRight />
      </div>
    </div>
  </div>
 </center>
  <center>
  <div class="col">
    <div class="card c_c">
      <img src="./Images/pp2.jpeg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title h_p">Experience the natural beauty of island</h5>
        <button className='h_b'>Book Now</button>
        <FaArrowAltCircleRight />
      </div>
    </div>
  </div>
  </center>
  <center>
  <div class="col">
    <div class="card c_c">
      <img src="./Images/pp3.jpeg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title h_p">Peacefull side of the World</h5>
        <button className='h_b'>Book Now</button>
        <FaArrowAltCircleRight />
      </div>
    </div>
  </div>
  </center>
  <center>
  <div class="col">
    <div class="card c_c">
      <img src="./Images/pp4.jpeg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title h_p">Vacation to the water city</h5>
        <button className='h_b'>Book Now</button>
        <FaArrowAltCircleRight />
      </div>
    </div>
  </div>
  </center>
</div>
    </div>
    </>
  )
}
