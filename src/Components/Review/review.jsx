import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";
import { IoIosStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import "./review.css"
export default function Review() {
  return (
    <>
      <section id='reviews' className='bg-cover view'>
        <div className='container'>
          <div className='row'>
            <center>
              <div className='col-12 intro-text'>
                <h1 className='text-white'>Our Client Saying</h1>
                <p className='text-white'>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
              </div>
            </center>
          </div>

          <div id="reviewSlider" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#reviewSlider" data-slide-to="0" class="active"></li>
              <li data-target="#reviewSlider" data-slide-to="1"></li>
              <li data-target="#reviewSlider" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className='row justify-content-center'>
                  <div className='col-lg-8'>
                    <div className='review bg-white p-5 text-center'>
                      <div className='quote-icon'><i><RiDoubleQuotesL /></i></div>
                      <p className='mb-0'> Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                      <div className='person mt-4'>
                        <img src='./Images/agent1.jpg' className='img2' alt='' />
                        <h2 className='mb-0 mt-2'>Charmen Valentina</h2>
                        <div className='icons'>
                          <i > <IoIosStar /> </i>
                          <i> <IoIosStar /></i>
                          <i><IoIosStar /></i>
                          <i><IoIosStar /></i>
                          <i><IoMdStarHalf /></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div className='row justify-content-center'>
                  <div className='col-lg-8'>
                    <div className='review bg-white p-5 text-center'>
                      <div className='quote-icon'><i><RiDoubleQuotesL /></i></div>
                      <p className='mb-0'> Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                      <div className='person mt-4'>
                        <img src='./Images/agent2.jpg' className='img2' alt='' />
                        <h2 className='mb-0 mt-2'>Andew Thomson</h2>
                        <div className='icons'>
                          <i > <IoIosStar /> </i>
                          <i> <IoIosStar /></i>
                          <i><IoIosStar /></i>
                          <i><IoIosStar /></i>
                          <i><IoMdStarHalf /></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div className='row justify-content-center'>
                  <div className='col-lg-8'>
                    <div className='review bg-white p-5 text-center'>
                      <div className='quote-icon'><i><RiDoubleQuotesL /></i></div>
                      <p className='mb-0'> Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                      <div className='person mt-4'>
                        <img src='./Images/agent3.jpg' className='img2' alt='' />
                        <h2 className='mb-0 mt-2'>Luna Star</h2>
                        <div className='icons'>
                          <i > <IoIosStar /> </i>
                          <i> <IoIosStar /></i>
                          <i><IoIosStar /></i>
                          <i><IoIosStar /></i>
                          <i><IoMdStarHalf /></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-target="#reviewSlider" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-target="#reviewSlider" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
