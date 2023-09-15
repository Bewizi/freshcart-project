import { BsClock, BsBox2 } from "react-icons/bs";
import { AiOutlineGift } from "react-icons/ai";
import { FiRefreshCw } from "react-icons/fi";

const messageData = [
  {
    id: <BsClock/>,
    header: "10 minute grocery now",
    paragraphs: "Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.",
  },
  {
    id: <AiOutlineGift/>,
    header: "Best Prices & Offers",
    paragraphs: "Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.",
  },
  {
    id: <BsBox2/>,
    header: "Wide Assortment",
    paragraphs: "Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.",
  },
  {
    id: <FiRefreshCw/>,
    header: "Easy Returns",
    paragraphs: "Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy.",
  },
]

function Message() {
  return (
    <div className="message">
      <div className="message-El">
      {
        messageData.map((messageObj) => (
          <div key={messageObj.id}>
            <i className="message-icons">{messageObj.id}</i>
            <h4>{messageObj.header}</h4>
            <p>{messageObj.paragraphs}</p>
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default Message;
