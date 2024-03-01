import "./App.css";
import PopularProducts from "./Components/popularProducts";
import PopularServices from "./Components/popularServices";
import ProductDetiles from "./Components/productDetiles";
import VendorProfile from "./Pages/vendorProfile";
import HomePage from "./Pages/homePage";
import UserViewVendor from "./Pages/userViewVendor";

function App() {
  return (
    <div className="App">
      {/* <HomePage></HomePage> */}
      {/* <ProductDetiles /> */}
      <VendorProfile></VendorProfile>
      {/* <UserViewVendor></UserViewVendor> */}
    </div>
  );
}

export default App;
