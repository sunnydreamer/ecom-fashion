import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./scenes/home/Home";
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import Navbar from "./scenes/global/Navbar";
import "./App.scss";
import CartMenu from "./scenes/global/CartMenu";
import CategoryPage from "./scenes/category/CategoryPage";
import Footer from "./scenes/global/Footer";
import AboutPage from "./scenes/about/About";
import Success from "./scenes/checkout/Success";
import Cancel from "./scenes/checkout/Cancel";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/checkout" element={<Checkout />} /> */}
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />

          <Route path="/:category" element={<CategoryPage />} />

          <Route path="checkout/success" element={<Confirmation />} />
          <Route path="/:category/:itemId" element={<ItemDetails />} />
        </Routes>
        <CartMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
