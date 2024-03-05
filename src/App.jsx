import "./App.css";
import PopularProducts from "./Components/popularProducts";
import PopularServices from "./Components/popularServices";
import ProductDetiles from "./Components/Details/productDetiles";
import ServiceCard from "./Components/serviceCard";
import { DetalisPage } from "./Pages/detalisPage";
import HomePage from "./Pages/homePage";

import UserViewVendor from "./Pages/userViewVendor";
import LoginPage from "./Pages/loginPage";
import UserRegister from "./Pages/userRegister";
import VendorOrdersPage from "./Pages/venorOrdersPage";
import ProductsPage from "./Pages/productsPage";
import FavouritePage from "./Pages/favouritePage";
import ServicesProducts from "./Pages/servicesProduct";
import Navbar from "./Components/navBar";
import { BrowserRouter } from "react-router-dom";
import RouterPages from "./Router/Router";
import VendorRegister from "./Pages/vendorRegister";

function App() {
  return (

    <BrowserRouter >
    <Navbar/>
    <VendorRegister/>
    <RouterPages/>
   
    
    </BrowserRouter>
       
  );
}

export default App;
