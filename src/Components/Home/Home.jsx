import React from "react";
import "./Home.css";
import Review from "../Review/review";
import Review_main from "../Review/review_main";
import ImageSwiper from "../Places/Places";
import Travell_guides from "../Places/Places";
import Client from "../Clients/Client";
import Inquire from "../Inquire/Inquire";
import Packages from "../Packages/Packages";
export default function Home() {
  return (
    <>
      <div className="body">
        {/* <h1 className="check">Check</h1> */}
        {/* <div className="banner1 ">
          <div className="heading backImage">
            <h1>
              TIME TO TRAVEL <i class="fa-solid fa-face-grin-hearts"></i>
            </h1>
            <center>
              {" "}
              <p class="new_p">
                {" "}

                “The best journeys in life are those that answer questions you
                never thought to ask.”
              </p>
            </center>
            <br />
            <br />
            <center>
              {" "}
              <p class="new_p">- Rich Ridgeway</p>
            </center>
          </div>
        </div>
        <br />
        <br /> */}
        <div className="h_carousal">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner ">
              <div className="carousel-item active">
                <img
                  src="./Images/HomeImages/goa.jpg"
                  className="d-block w-100 carousal_i"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="c_h5">TRAVELLING AROUND THE WORLD</h5>
                  <p className="c_p">
                    Some representative placeholder content for the first slide.
                  </p>
                  <button className="c_b">CONTINUE READING</button>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="./Images/HomeImages/Darjeeling.jpg"
                  className="d-block w-100 carousal_i"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5  className="c_h5">EXPERINCE THE NATURE BUEAUTY</h5>
                  <p className="c_p">
                    Some representative placeholder content for the second slide.
                  </p>
                  <button className="c_b">CONTINUE READING</button>
                </div>
              </div>
              <div className="carousel-item ">
                <img
                  src="./Images/HomeImages/himalaya.jpg"
                  className="d-block w-100 carousal_i"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5  className="c_h5">TRAVELLING AROUND THE WORLD</h5>
                  <p className="c_p">
                    Some representative placeholder content for the third slide.
                  </p>
                  <button className="c_b">CONTINUE READING</button>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* <Inquire/> */}
        <br />

        <section className="card_section">
        <div class="heading2">
          <h5>TOP NOTCH DESTINATION</h5>
          <p>Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.[1] Travel can also include relatively short stays between successive movements, as in the case of tourism.

          </p>
        </div>
        <br />
        <div className="customcard_main">
          <div class="card-group">
            <div class="card custom_card mb-4 me-3 col-md-4 c_c">
              <img
                src="./Images/HomeImages/darjelling_card.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <center><h5 class="card-title">Darjelling</h5></center>
                <p class="card-text">
                  Darjeeling's culture is highly cosmopolitan—a result of diverse ethnic groups intermixing and evolving away from their historical roots. The region's indigenous cuisine is rich in fermented foods and beverages. Tourists have flocked to Darjeeling since the mid-19th century.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div class="card custom_card col-md-4 me-3 mb-4 c_c">
              <img
                src="./Images/HomeImages/goa_card.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <center><h5 class="card-title">Goa</h5></center>
                <p class="card-text">
                  Tourism is generally focused on the coastal areas of Goa, with lower tourist activity inland. In 2010, there were more than 2 million tourists reported to have visited Goa, about 1.2  million of whom were from abroad.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div class="card custom_card col-md-4 me-3 mb-4 c_c">
              <img
                src="./Images/HomeImages/himalaya_card.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <center><h5 class="card-title">Himalaya</h5></center>
                <p class="card-text">
                  The Himalayas have a profound effect on the climate of the Indian subcontinent and the Tibetan Plateau. They prevent frigid, dry winds from blowing south into the subcontinent, which keeps South Asia much warmer than corresponding temperate regions in the other continents.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        </section>
        <div> 
        
        <Client/>
        </div>
        <div>
          {/* <Packages/> */}
        </div>
        {/* <Travell_guides/> */}
        {/* video */}
        
        <div class="Entertainmentbody">
          <div class="heading4">
            <h5>Entertainment</h5>
            <p>
              We’re committed to inspiring you to experience travel in a whole new
              way – whether you’re interested in exploring a new city, taking a
              cruise, or cooking something new. Among Lonely Planet’s 825+
              guidebooks and travel guides, there is sure to be one to inspire the
              traveler within.
            </p>
          </div>
        </div>
        <center>
          <div>
            <div className="video">
              <video
                muted
                autoPlay
                controls
                loop
                width="30%"
                src="Images/video1.mp4"
              ></video>
              <video
                muted
                autoPlay
                controls
                loop
                width="50%"
                src="Images/video2.mp4"
              ></video>
            </div>
            <div className="video">
              <video
                muted
                autoPlay
                controls
                loop
                width="50%"
                src="Images/video3.mp4"
              ></video>
              <video
                muted
                autoPlay
                controls
                loop
                width="30%"
                src="Images/video4.mp4"
              ></video>
            </div>
          </div>
        </center>
      </div>
      {/* <Review/> */}
      <Review_main />
    </>
  );
}
