import "./App.css";
import PopularProducts from "./Components/popularProducts";
import PopularServices from "./Components/popularServices";
import ProductDetiles from "./Components/productDetiles";
import ServiceCard from "./Components/serviceCard";
import { DetalisPage } from "./Pages/detalisPage";
import HomePage from "./Pages/homePage";
import Login from "./Pages/login";
import UserViewVendor from "./Pages/userViewVendor";
import Register from "./Pages/register";
import LoginPage from "./Pages/loginPage";
import UserRegister from "./Pages/userRegister";
import Vendor from "./Pages/vendor";
import Products from "./Pages/products";
import FavouritePage from "./Pages/favouritePage";
import VendorOrdersPage from "./Pages/venorOrdersPage";

function App() {
  return (
    <div className="App">
      {/* <HomePage></HomePage> */}
      <FavouritePage></FavouritePage>
      {/* <VendorOrdersPage></VendorOrdersPage> */}
    </div>
  );
}

export default App;
