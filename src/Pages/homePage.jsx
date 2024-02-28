import AboutInfo from "../Components/aboutInfo";
import Categories from "../Components/categories";
import HomeHeader from "../Components/homeHeader";
import OrderServiceSteps from "../Components/orderServiceSteps";
import Footer from "./../Components/footer";
import Navbar from "../Components/navBar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HomeHeader></HomeHeader>
      <Categories></Categories>
      <OrderServiceSteps></OrderServiceSteps>
      <AboutInfo></AboutInfo>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
