import AboutInfo from "../Components/aboutInfo";
import Categories from "../Components/categories";
import HomeHeader from "../Components/homeHeader";
import Navbar from "../Components/navBar";

const HomePage = () => {
  return (
    <>
    <Navbar/>
      <HomeHeader></HomeHeader>
      <Categories></Categories>
      <AboutInfo></AboutInfo>
    </>
  );
};

export default HomePage;
