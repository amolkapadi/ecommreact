 
import './App.css';
import Home from './comp/Home';
import Navbar from './comp/Navbar';
import {Routes,Route} from "react-router-dom";
import Products from './comp/Products';
import Product from './comp/Product';
import About from './comp/About';
import Blog from './comp/Blog';
import TopNav from './comp/TopNav';
import Footer from './comp/Footer';

function App(props) {
  return (
  <>
          <TopNav />
           <Navbar/>
      <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/products" element={<Products />} />
           <Route path="/products/:id" element={<Product />} />
           <Route path="/about" element={<About />} />
           <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
      
  </>
  );
}

export default App;
