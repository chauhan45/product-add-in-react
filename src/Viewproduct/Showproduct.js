
import { useContext, useState } from "react";
import Dash from '../Component/Dash'
import { BACKEND_URI } from '../config/constants';
import Rating from '../ComponentProduct/Rating';
import CartContext from '../Context/Cart/CartContext';
import product1 from '../images/product1.jpg';
import product2 from '../images/product2.jpg';
import product3 from '../images/product3.jpg';

const Showproduct = ({ medias }) => {
  const { addToCart } = useContext(CartContext);
   

  return (
    <>
      <div>
        <Dash />
        <h1 className='text-center mb-5 product mb-4' > All Products</h1>
       

        {/* carousel */}

        <div id="carouselExampleIndicators" class="carousel slide mb-5" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner shadow-lg bg-white rounded">
            <div class="carousel-item active shadow-lg bg-white rounded">
              <img class="d-block w-100 blur" src={product1} alt="First slide" />
              <div class="carousel-caption d-none d-md-block">
                <h2 className="text-light">.....FENTA PRODUCT..... </h2>
                <h2 className="textt">Showing results for product image </h2>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100 blur shadow-lg bg-white rounded" src={product2} alt="Second slide" />
              <div class="carousel-caption d-none d-md-block">
                <h2 className="text-light">......FENTA PRODUCT.......</h2>
                <h2 className="textt">Showing results for product image </h2>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100 blur" src={product3} alt="Third slide" />
              <div class="carousel-caption d-none d-md-block">
                <h2 className="textt">......FENTA PRODUCT....... </h2>
                <h2 className="textt">Showing results for product image </h2>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>


        {/* carousel */}


        <div className="row ms-0 ">
          {medias && medias.map((pro) => {
            return (
              <>
                <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv">
                  {pro.videos.map((video) => {
                    return (
                      <img className='productCard__img shadow-lg' src={`${BACKEND_URI}${video}`} alt=''>

                      </img>
                    );
                  })}
                  <h6><span className="title">Name</span>: {pro.name}</h6>

                  <h6 className='ProductCard__price'>price  : ₹ {pro.price}</h6>
                  <div className='ProductCard__Rateing'>
                    <Rating
                      value={pro.rating}
                      text={`${pro.numReviews} reviews`}
                    />
                  </div>
                  <button
                    className='ProductCard__button mb-4'
                    onClick={() => addToCart(pro)}
                  >
                    Add to basket
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>

    </>
  )
}

export default Showproduct;