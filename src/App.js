import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./component/admin/Home/Home";
import Cart from "./component/Cart/Cart";
import Nav from "./component/Navbar/Nav";
import Product from "./component/products/Product";
import Login from "./component/login/Login";
import { Route, Routes } from "react-router-dom";
import Detail from "./component/detail/Detail";
import Loginn from "./component/admin/Login";
import Products from "./component/admin/Product/Products";
import Orders from "./component/admin/orders/Orders";
import Customer from "./component/admin/Customer/Customer";
import About from "./component/about/About";
import Update from "./component/products/Update";
import store from "./Redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <div className="nav sticky z-50 top-0 shadow-md shadow-gray-300">
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/update" element={<Update />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Home />} />
        <Route path="/logina" element={<Loginn />} />
        <Route path="/product" element={<Products />} />
        <Route path="/order" element={<Orders />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Provider>
  );
}

export default App;
