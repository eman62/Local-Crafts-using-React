
import './App.css';
import PopularProducts from './Components/popularProducts';
import PopularServices from './Components/popularServices';
// import HomePage from './Pages/homePage';



function App() {
  return (
    <div className="App">
      <PopularServices/>
      <PopularProducts/>
      
      
      {/* <HomePage></HomePage> */}
     
    </div>
  );
}

export default App;
