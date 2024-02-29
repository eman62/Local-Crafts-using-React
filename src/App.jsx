import "./App.css";
import PopularProducts from "./Components/popularProducts";
import PopularServices from "./Components/popularServices";
import ProductDetiles from "./Components/productDetiles";
import HomePage from "./Pages/homePage";

function App() {
  return (
    <div className="App">
      {/* <HomePage></HomePage> */}
      <ProductDetiles />
    </div>
  );
}

export default App;
