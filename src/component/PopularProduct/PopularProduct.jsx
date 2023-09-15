import './PopularProduct.css'
const productData = [
  {
    id:1,
    image:"images/product-img-1.jpg",
    name: "Haldiram's Sev Bhujia",
    category:"Snack & Muchies"
  },
  {
    id:2,
    image:"images/product-img-2.jpg",
    name: "NutriChoice Digestive",
    category:"Bakery & Biscuits"
  },
  {
    id:3,
    image:"images/product-img-3.jpg",
    name: "Cadbury 5 Star Chocolate",
    category:"Bakery & Biscuits"
  },
  {
    id:4,
    image:"images/product-img-4.jpg",
    name: "Onion Flavour Potato",
    category:"Snack & Munchies"
  },
  {
    id:5,
    image:"images/product-img-5.jpg",
    name: "Salted Instant Popcorn",
    category:"Instant Food"
  },
  {
    id:6,
    image:"images/product-img-6.jpg",
    name: "Blueberry Greek Yogurt",
    category:"Dairy, Bread & Eggs"
  },
  {
    id:7,
    image:"images/product-img-7.jpg",
    name: "Britannia Cheese Slices",
    category:"Dairy, Bread & Eggs"
  },
  {
    id:8,
    image:"images/product-img-8.jpg",
    name: "Kellogg's Original Cereals",
    category:"Instant Food"
  },
  {
    id:9,
    image:"images/product-img-9.jpg",
    name: "Slurrp Millet Chocolate",
    category:"Snack & Munchies"
  },
  {
    id:10,
    image:"images/product-img-10.jpg",
    name: "Amul Butter - 500 g",
    category:"Dairy, Bread & Eggs"
  },
];

function PopularProduct() {
  return (
    <div className='product-h4'>
    <h4>Popular Products</h4>
    <div className="product-container">
    {
      productData.map((productobject) =>(
      <div key={productobject.name} className="product-img">
        <img src={productobject.image} alt={productobject.name} />
        <div className="product-category">
        <span>{productobject.category}</span>
        <p>{productobject.name}</p>
        </div>
        <ul>
          <li>$18</li>
          <li><a href="">$24</a></li>
        </ul>
        <button type="btn" className="btn btn-success button">+ Add</button>
      </div>

      ))
    }
      
    </div>
    </div>
  );
}

export default PopularProduct;
