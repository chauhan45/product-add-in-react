import React from 'react'
import { Link } from 'react-router-dom';
import image from '../images/image1.jpeg'
import image1 from '../images/image6.jpg'
import image2 from '../images/image2.jpeg'
import logo from '../images/logo.png'
import { Footer } from './Footer';
import { BACKEND_URI } from "../config/constants";
import Contact from './Contact';

const Home = ({ medias }) => {

  return (
    <>
      {/* carosel */}

      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={image2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h3>FENTA VIDEO</h3>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={image} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h3>FENTA VIDEO</h3>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={image1} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h3>FENTA VIDEO</h3>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* Grid system */}
     
      <div className="row ms-0 video_loop">
      <h3 className='text-center mt-4'>VIDEOS</h3>
        {medias &&
          medias.map((media) => {
            return (
              <>
                <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv ">
                  {media.videos.map((video) => {
                    return (
                      <video 
                        preload="metadata"
                        // loop autoPlay
                        preload="auto"
                        // autoPlay="autoplay"
                        playing={true}
                        loop={true}
                        width="300"
                        height="300"
                        controls
                      >
                        <source src={`${BACKEND_URI}${video}`} />
                        ;Your browser does not support the video tag.
                      </video>

                    );
                  })}
                  <h6><span className="title">Title</span>: {media.name}</h6>
                  <details>
                    <summary>  Description more </summary>
                    <h6>Description  :{media.description}</h6>
                  </details>
                </div>

              </>


            );
          })}
      </div>






      <div class="container mt-5">
        <div class="row">
          <div class="col-sm">
            <div class="card">
              <img class="card-img-top" src={logo} alt="Card image cap" />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card" >
              <img class="card-img-top" src={logo} alt="Card image cap" />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card" >
              <img class="card-img-top" src={logo} alt="Card image cap" />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-5">
        <div class="row">
          <div class="col-sm">
            <div class="card">
              <img class="card-img-top" src={logo} alt="Card image cap" />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card" >
              <img class="card-img-top" src={logo} alt="Card image cap" />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card" >
              <img class="card-img-top" src={logo} alt="Card image cap" />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Grid system */}
      {/* video */}
      <footer class="text-center text-white youtube" >

        <div class="container p-4">

          <section class="">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-6">
                <div class="ratio ratio-16x9">
                  <iframe
                    class="shadow-1-strong rounded"
                    src="https://www.youtube.com/embed/vlDzYIIOYmM"
                    title="YouTube video"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>

        </div>
      
      </footer>
      <Contact />
      {/* video */}

    </>
  )
}

export default Home;