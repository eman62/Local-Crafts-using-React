import AboutInfo from "../Components/aboutInfo";
import Categories from "../Components/categories";
import HomeHeader from "../Components/homeHeader";
import OrderServiceSteps from "../Components/orderServiceSteps";
import Footer from "./../Components/footer";
import Navbar from "../Components/navBar";
import PopularProducts from "./../Components/popularProducts";
import PopularServices from "./../Components/popularServices";
const HomePage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <HomeHeader></HomeHeader>
      <Categories></Categories>
      <OrderServiceSteps></OrderServiceSteps>
      <AboutInfo></AboutInfo>
      <PopularServices />
      <PopularProducts />
      <Footer></Footer>
    </>
  );
};

export default HomePage;
