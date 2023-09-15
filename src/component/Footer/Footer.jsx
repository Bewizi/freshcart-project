const svg = [
  {
    id: 1,
    svgImage: 'Svg/amazonpay.svg',
    description:'Amazon Pay'
  },
  {
    id: 2,
    svgImage: 'Svg/american-express.svg',
    description:'American Express'
  },
  {
    id: 3,
    svgImage: 'Svg/mastercard.svg',
    description:'MasterCard'
  },
  {
    id: 4,
    svgImage: 'Svg/paypal.svg',
    description:'Paypal'
  },
  {
    id: 5,
    svgImage: 'Svg/visa.svg',
    description:'Visa'
  },
]

const getDelivery =[
  {
    id: 6,
    svgImage: 'Svg/appstore-btn.svg',
    description:'App Store'
  },
  {
    id: 7,
    svgImage: 'Svg/googleplay-btn.svg',
    description:'Google Play'
  }
]

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <h4 className="hello">Categories</h4>
        <div className="list-categories">
          {/* categories-El-1 */}
          <div className="categories-El-1">
            <ul>
              <li>Vegetables & Fruits </li>
              <li>Breakfast & instant food</li>
              <li>Bakery & Biscuits</li>
              <li>Atta, rice & dal</li>
              <li>Sauces & Spreads</li>
              <li>Organic & gourmet</li>
              <li>Baby care</li>
              <li>Cleaning essentials</li>
              <li>Personal care</li>
            </ul>
          </div>
          {/* end of categories-El-1 */}

          {/* categories-El-2 */}
          <div className="categories-El-2">
            <ul>
              <li>Dairy, bread & eggs</li>
              <li>Cold drinks & juices</li>
              <li>Tea, coffee & drinks</li>
              <li>Masala, oil & more</li>
              <li>Chicken, meat & fish</li>
              <li>Paan corner</li>
              <li>Pharma & wellness</li>
              <li>Home & office</li>
              <li>Pet care</li>
            </ul>
          </div>
          {/* end of categories-El-2 */}

          <div className="get">
            {/* categories-El-3 */}

            <div className="categories-El-3">
              <h4>Get to know us</h4>
              <ul>
                <li>Company</li>
                <li>About</li>
                <li>Blog</li>
                <li>Help Center</li>
                <li>Our Value</li>
              </ul>
            </div>

            {/* end categories-El-3 */}

            {/* categories-El-4 */}

            <div className="categories-El-4">
              <h4>For Consumers</h4>
              <ul>
                <li>Payments</li>
                <li>Shipping</li>
                <li>Products Returns</li>
                <li>FAQ</li>
                <li>Shop Checkout</li>
              </ul>
            </div>

            {/* end categories-El-4 */}

            {/* categories-El-5 */}
            <div className="categories-El-5">
              <h4>Become a Shopper</h4>
              <ul>
                <li>Shop Opportunities</li>
                <li>Become a Shopper</li>
                <li>Earnings</li>
                <li>Ideas & Guides</li>
                <li>New Retailers</li>
              </ul>
            </div>
            {/* end categories-El-2 */}

            {/* categories-El-6 */}
            <div className="categories-El-6">
              <h4>Freshcart programs</h4>
              <ul>
                <li>Freshcart programs</li>
                <li>GIft Cards</li>
                <li>Promos & Coupons</li>
                <li>Freshcart Ads</li>
                <li>Careers</li>
              </ul>
            </div>
            {/*end categories-El-6 */}
          </div>

        </div>

    
        <hr className="hr"/>

        <div className="payment">
        <div className="payment-partners">
      <p>Payment Partners</p>
      {
        svg.map((svgData) => (
          <div key={svgData} className="payment-img">
            <img src={svgData.svgImage} alt={svgData.description} />
          </div>
        ))
      }
      </div>

      <div className="get-delivery">
        <p>Get deliveries with FreshCart</p>
        {
          getDelivery.map((getDeliveryData) =>(
            <div key={getDeliveryData} className="delivery">
            <img src={getDeliveryData.svgImage} alt={getDeliveryData.description} />
            </div>
          ))
        }
      </div>
      </div>

      <hr className="hr-two"/>

      </div>
    </div>
  );
}

export default Footer;
