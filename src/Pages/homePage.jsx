import AboutInfo from "../Components/aboutInfo";
import Categories from "../Components/categories";
import HomeHeader from "../Components/homeHeader";
import OrderServiceSteps from "../Components/orderServiceSteps";
import Footer from "../Components/footer";
import Navbar from "../Components/navBar";
import PopularServices from "../Components/popularServices";
import PopularProducts from "../Components/popularProducts";

const HomePage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <HomeHeader />
      <Categories />
      <OrderServiceSteps />
      <PopularServices />
      <PopularProducts />
      <AboutInfo />
      <Footer />
    </>
  );
};

export default HomePage;
