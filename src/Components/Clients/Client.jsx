import React from 'react'
import "./Client.css"
export default function Client() {
  return (
    <>
     <section id="about">
          <div className="container lolo">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-5">
                <img src="../images/80.jpg" alt="" />
              </div>
              <div className="col-lg-5">
                <h1>Know More About Us</h1>
                <div className="oplo my-4"></div>
                <p>
                  Music, art concerned with combining vocal or instrumental
                  sounds for beauty of form or emotional expression, usually
                  according to cultural standards of rhythm, melody, and, in
                  most Western music, harmony. Both the simple folk song and the
                  complex electronic composition belong to the same activity,
                  music. Both are humanly engineered; both are conceptual and
                  auditory, and these factors have been present in music of all
                  styles and in all periods of history, throughout the world.
                </p>
                <a href="#" className="btn btn-brand">
                  View More
                </a>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
