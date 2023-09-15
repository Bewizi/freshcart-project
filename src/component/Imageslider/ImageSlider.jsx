import "./ImageSlider.css";
import Carousel from 'react-bootstrap/Carousel';
import {IoMdArrowForward} from 'react-icons/io'

function ImageSlider() {
  return (
    <>
      <Carousel data-bs-theme="dark" className='img'>
      <Carousel.Item >
        <img
          className="d-block "
          src="images/eggs-healthy-vegetables.jpg"
          alt="Eggs Healthy Vegetables"
        />
        <Carousel.Caption>
        <div className='img-text-1'>
        <span>Opening Sale Discount 50%</span>
          <h5>SUPERMARKET FOR FRESH GROCERY</h5>
          <p>Introduced a new model for online grocery shopping and convenient home delivery</p>
          <button type="button" className='btn btn-dark'>Shop Now <IoMdArrowForward/>  </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="images/surface-product-meal-food-salad-health.jpg"
          alt="Surface Product Meal Food Salad Health"
        />
        <Carousel.Caption>
        <div className="img-text-2">
        <span>Free Shipping - orders over $100</span>
          <h5>Free Shipping on orders over $100</h5>
          <p>Free Shipping to First-Time Customers Only, After promotions and discounts are applied </p>
          <button type="button" className='btn btn-dark'>Shop Now <IoMdArrowForward/>  </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default ImageSlider
