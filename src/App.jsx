import "./App.css";
import PopularProducts from "./Components/popularProducts";
import PopularServices from "./Components/popularServices";
import ProductDetiles from "./Components/productDetiles";
import { DetalisPage } from "./Pages/detalisPage";
import HomePage from "./Pages/homePage";
import Login from "./Pages/login";
import UserViewVendor from "./Pages/userViewVendor";
import Register from "./Pages/register";
import LoginPage from "./Pages/loginPage";
import UserRegister from "./Pages/userRegister";
import Vendor from "./Pages/vendor";

function App() {
  return (
    <div className="App">
      {/* <HomePage></HomePage> */}
      {/* <DetalisPage /> */}
      {/* <Login></Login> */}
      {/* <Register></Register> */}
      {/* <LoginPage></LoginPage> */}
      <UserRegister></UserRegister>
    </div>
  );
}

export default App;
