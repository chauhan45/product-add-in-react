import React from 'react'
import Dash from '../Component/Dash';
import { BACKEND_URI } from '../config/constants';
import Rating from '../ComponentProduct/Rating';
import CartContext from '../Context/Cart/CartContext';
import { useContext } from "react";
const Watches = ({medias3}) => {
    const { addToCart } = useContext(CartContext);
    return (
        <>
        <div>
        <Dash />
        <h1 className='text-center mb-5 product mb-4' > Watches</h1>
        <div className="row ms-0 ">        
          {medias3 && medias3.map((pro) => {                         
            return (
              <>
                <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv ">
                  {pro.videos.map((video) => {
                    return (
                      <img className='productCard__img' src={`${BACKEND_URI}${video}`} alt=''>

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
           
          })};
        
        </div>
      </div>
        </>
    )
}

export default Watches
