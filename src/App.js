import HomePage from "./pages/HomePage";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartContext from "./components/context/CartContext";
import { productCategories } from './components/Home/ProductCategories';
import Store from './pages/Store'
import ProductDetails from './pages/ProductDetails'
import ProductContext from "./components/context/ProductContext";
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  return (
    <CartContext>
      <ProductContext>
        <div className="App">
            <Router>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              {productCategories.map((category , index) => (
                <Route path={`/${category.name}`} element={<Store products={category ? category.products : []} />} key={index}></Route>
              ))}
              {productCategories.map((category , index) => (
                <Route path={`/${category.name}/:productName`} element={<ProductDetails products={category ? category.products : []} />} key={index}></Route>
              ))}
              <Route path="/success" element={<OrderSuccess />}></Route>
            </Routes>
          </Router>
        </div>
      </ProductContext>
    </CartContext>
    
  );
}

export default App;
