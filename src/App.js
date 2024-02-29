
import './App.css';
import Navbar from './Components/navBar';
import Footer from './Components/footer';
import Login from './Pages/login';
import Register from './Pages/register';
import Vendor from './Pages/vendor';
import Products from './Pages/products';
import ProductCards from './Pages/productCards';
import Services from './Pages/Services';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Services></Services>
    </div>
  );
}

export default App;
