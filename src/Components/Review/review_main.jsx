import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";
import { IoIosStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import "./review.css"
export default function Review_main() {
    return (
        <>
            <section id='reviews' className='bg-cover view'>
                <div className='container main_review'>
                    <div className='row'>
                        <center>
                            <div className='col-12 intro-text'>
                                <h1 className='text-white'>Our Client Saying</h1>

                            </div>
                        </center>
                    </div>
                    <div id="carouselExampleDark" className="carousel carousel-dark slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <center>
                                    <div className='quote-icon'><i><RiDoubleQuotesL /></i></div>
                                    <p className='mb-0'> Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>

                                    <img src="./Images/agent1.jpg" className="d-block target" alt="..." />
                                    <h2 className='mb-0 mt-2 client_name'>Charmen Valentina</h2>
                                    <div className='icons'>
                                        <i > <IoIosStar /> </i>
                                        <i> <IoIosStar /></i>
                                        <i><IoIosStar /></i>
                                        <i><IoIosStar /></i>
                                        <i><IoMdStarHalf /></i>
                                    </div></center>

                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <center>
                                    <div className='quote-icon'><i><RiDoubleQuotesL /></i></div>
                                    <p className='mb-0'> Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                                    <img src="/Images/agent2.jpg" className="d-block target" alt="..." />
                                    <h2 className='mb-0 mt-2 client_name'>Andew Thomson</h2>
                                    <div className='icons'>
                                        <i > <IoIosStar /> </i>
                                        <i> <IoIosStar /></i>
                                        <i><IoIosStar /></i>
                                        <i><IoIosStar /></i>
                                        <i><IoMdStarHalf /></i>
                                    </div></center>

                            </div>
                            <div className="carousel-item">
                                <center>
                                    <div className='quote-icon'><i><RiDoubleQuotesL /></i></div>
                                    <p className='mb-0'> Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                                    <img src="./Images/agent3.jpg" className="d-block target" alt="..." />

                                    <h2 className='mb-0 mt-2 client_name'>Luna Star</h2>
                                    <div className='icons'>
                                        <i > <IoIosStar /> </i>
                                        <i> <IoIosStar /></i>
                                        <i><IoIosStar /></i>
                                        <i><IoIosStar /></i>
                                        <i><IoMdStarHalf /></i>
                                    </div>
                                </center>

                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
