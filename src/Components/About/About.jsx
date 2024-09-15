import React from 'react'
import './about.css';

export default function About() {
  return (
    <>
    <section id='about'>
        <div className='container'>
            <div className='row gy-4 align-items-center'>
                <div  className='col-lg-5'>
                    <img src='./Images/about.jpg' alt='' />
                </div>
                <div className='col-lg-5'>
                    <h1 className='About_h1'>About Us</h1>
                    <div className='divider my-4'></div>
                    <p className='About_h1'>Time to travel is one of the World's largest Travelling company in the world.We are here from last 20 years.We took care of our clients like our family member.If you want adventure in your life then definately contact us.We have the largest collection of places in all over the world.</p>
                                 <a href='#' className='btn btn-brand'>View More</a>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
