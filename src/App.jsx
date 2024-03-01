import "./App.css";
import PopularProducts from "./Components/popularProducts";
import PopularServices from "./Components/popularServices";
import ProductDetiles from "./Components/productDetiles";
import ServiceCard from "./Components/serviceCard";
import { DetalisPage } from "./Pages/detalisPage";
import HomePage from "./Pages/homePage";
import UserViewVendor from "./Pages/userViewVendor";

function App() {
  return (
    <div className="App">
      {/* <HomePage></HomePage> */}
      <ServiceCard />
    </div>
  );
}

export default App;
