import React from 'react'
import "./Inquire.css"
export default function Inquire() {
  return (
    <>
   <center>
   <div className='Inquire'>
        <input type="text" placeholder='Enter Destination' />
        <input type="text" placeholder='No of People' />
        <input type="date"  />
        <button className='c_b'>INQUIRE NOW</button>
    </div>
   </center>
    </>
  )
}
