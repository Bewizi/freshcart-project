import "./FruitsAndBakey.css";
// import Image from "react-bootstrap/Image";

function FruitsAndBakey() {
  return (
    <div className="fruitsandbakey">
      <div className="fruits">
        <img src='images/slider-image-1.jpeg' alt=""/>
        <div className="description">
          <h3>Fruits & Vegetables</h3>
          <p>
            Get Upto <strong>30%</strong> off
          </p>
          <button type="button" className="btn btn-dark">
            Shop Now
          </button>
        </div>
      </div>

      <div className="vegetables">
        <img src='images/black-coffee-whole-wheat-bread-breakfast.jpg' alt=""/>
        <div className="vegetables-description">
          <h3>Freshly Baked Buns</h3>
          <p>
            Get Upto<strong>25%</strong>
            off
          </p>
          <button type="button" className="btn btn-dark">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default FruitsAndBakey;
