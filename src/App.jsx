import Header from "./component/Header/Header";
import Navbar from "./component/Navbar";
import ImageSlider from "./component/Imageslider/ImageSlider";
import Featuredcart from "./component/Featuredcart/Featuredcart";
import FruitsAndBakey from "./component/FruitsAndBakery/FruitsAndBakey";
import PopularProduct from "./component/PopularProduct/PopularProduct";
import Message from "./component/Message";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./App.css";
import BestSells from "./component/BestSells/BestSells";
import Footer from "./component/Footer/Footer";


function App() {
  return (
    <>
      <header>
        <Header />
        <Navbar />
      </header>

      <main>
        <ImageSlider />
        <Featuredcart />
        <FruitsAndBakey />
        <PopularProduct />
        <BestSells />
        <Message />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
