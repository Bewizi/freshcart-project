import './BestSells.css';
import { IoMdArrowForward } from "react-icons/io";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";

const bestSellsData = [
  {
    id: 11,
    image: "images/product-img-11.jpg",
    name: "Roast Ground Coffee",
    category: "Tea, Coffee & Drinks",
  },
  {
    id: 12,
    image: "images/product-img-12.jpg",
    name: "Crushed Tomatoes",
    category: "Fruits & Vegetables",
  },
  {
    id: 13,
    image: "images/product-img-13.jpg",
    name: "Golden Pineapple",
    category: "Fruits & Vegetables",
  },
];

const timeData = [
  {
    id: 1,
    daysRemain: 1860,
    day: "Days",
    hoursRemain: 19,
    hours: "Hours",
    minsRemain: 17,
    mins: "Mins",
    secondsRemain: "00",
    seconds: "Sec",
  },
];

function BestSells() {
  return (
    <div className="bestsells">
      <h5>Daily Best Sells</h5>
      <div className="coffee-img">
        <h3>100% Organic Coffee Beans.</h3>
        <p>Get the best deal before close.</p>
        <button type="button" className="btn btn-success">
          Shop Now <IoMdArrowForward />{" "}
        </button>

        <div className="bestSellEl">
          {bestSellsData.map((bestSellsObj) => (
            <div key={bestSellsObj} className="bestselldata">
              <img src={bestSellsObj.image} alt="" />
              <div className="bestsell-category">
                <span>{bestSellsObj.category}</span>
                <p>{bestSellsObj.name}</p>
                <ul>
                  <li>$13</li>
                  <li>
                    <a href="">$18</a>
                  </li>
                  <li className="bsstar">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                    <span>4.5</span>
                  </li>
                </ul>
                <button type="btn" className="btn btn-success cart-btn">
                  + Add to cart
                </button>
              </div>
              <div>
                {timeData.map((timeDataObj) => (
                  <div key={timeDataObj} className="time-data">
                    <p>
                      {timeDataObj.daysRemain}
                      <span>{timeDataObj.day}</span>
                    </p>
                    <p>
                      {timeDataObj.hoursRemain}
                      <span>{timeDataObj.hours}</span>
                    </p>
                    <p>
                      {timeDataObj.minsRemain}
                      <span>{timeDataObj.mins}</span>
                    </p>
                    <p>
                      {timeDataObj.secondsRemain}
                      <span>{timeDataObj.seconds}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestSells;
