import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Footer from "./../Components/footer";
import VendorOrderCard from "../Components/vendorOrderCard";
import { axiosInstance } from "../api/config";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import IconButton from "@mui/material/IconButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const VendorOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");
  const swiperRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {
    const fetchVendorOrders = async () => {
      try {
        const response = await axiosInstance.get("/orders", {
          headers: {
            token,
          },
        });
        setOrders(response.data);
        console.log(orders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchVendorOrders();
  }, []);
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleSlideChange = (swiper) => {
    setCenterIndex(swiper.realIndex + 1);
  };

  return (
    <Box>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(rgba(9, 18, 66, 0.5), rgba(9, 18, 66, 0.5)), url('https://s3-alpha-sig.figma.com/img/0d66/363b/6f00d7173f94ca7d7ab6bcc39bde6406?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nNS~WGeV-YZqRjq2K8z8Y0ZkboQaagtzO5-~ymUeJIlX60tb1SC55m2oQyBFliP1EiOzkWEURNE9viaL6E0vYTdvH7P~RulSceiaY9gwYFYFMMkyzf5fnmSMUgf~Dxp6rOpk1B~sOm7SqUeKcz~EgBLM94fMIYVCyJFQ1q1lgcJXPGN1h10xJYAmYOOgfmDBnAd3TNVQ6eL7HYzFMmcJZwvOVdsKIp2u4gZMHsNSldRmhVtGMZNtNn6XSah0-OczpBON2Hsv2APcER2QvWhd3Xt6Sph~qZqySsvegLNQP~pGqH9THcGfJmY00y5dSxODa5DHoKMYqZ8ocffq0kdXHg__')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          objectFit: "cover",
          padding: "10%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "80vw",
            backgroundColor: "white",
            borderRadius: "30px",
            top: "35vh",
            left: "50%",
            height: "200vh",
            transform: "translateX(-50%)",
            zIndex: 1,
            direction: "rtl",
          }}
        >
          {/* عنوان الصفحه الشخصيه */}
          <Box sx={{ display: "flex", direction: "rtl" }}>
            <svg
              style={{ margin: "5vh 2vw 0 0" }}
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0H17V17H0V0Z" fill="url(#paint0_linear_29_4153)" />
              <defs>
                <linearGradient
                  id="paint0_linear_29_4153"
                  x1="-29875"
                  y1="87704.3"
                  x2="-29853.6"
                  y2="87705.8"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFB629" />
                  <stop offset="0.507189" stopColor="#FFDA56" />
                  <stop offset="1" stopColor="#FFD7A6" />
                </linearGradient>
              </defs>
            </svg>
            <Typography
              sx={{
                display: "block",
                margin: "3vh 1vw 0 0",
                fontSize: "1.8em",
                fontFamily: "Rubik",
                fontWeight: "700",
              }}
            >
              الطلبات
            </Typography>
          </Box>



          <Box>{orders &&
            <Box mt={20} >
              <Swiper xs={6} md={6} lg={3}
                ref={swiperRef}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                loop={true}
                onSlideChange={handleSlideChange}
              >
                <Grid container >
                  {orders.map(order => (
                    <Grid item key={order.id} xs={12} mb={5}>
                      <SwiperSlide>
                        <VendorOrderCard data={order} />
                      </SwiperSlide>
                    </Grid>
                  ))}

                </Grid>
              </Swiper>
              <IconButton
                sx={{
                  position: "absolute",
                  top: "30%",
                  left: "5%",
                  transform: "translateY(-50%)",
                  zIndex: 999,
                  background:
                    "linear-gradient(90deg, #FFB629 0%, #FFDA56 50%, #FFD7A6 100%)",
                  color: "white",
                  width: "3vw",
                  height: "5vh",
                }}
                onClick={goPrev}
              >
                &gt;
              </IconButton>
              <IconButton
                sx={{
                  position: "absolute",
                  top: "30%",
                  right: "2%",
                  transform: "translateY(-50%)",
                  zIndex: 999,
                  backgroundColor: "#091242",
                  color: "white",
                  width: "3vw",
                  height: "5vh",
                }}
                onClick={goNext}
              >
                &lt;
              </IconButton>
            </Box>


          }</Box>
        </Box>
      </Box>
      {/*box of blue and white box */}
      <Box sx={{ height: "200vh", position: "relative" }}>
        {/*blue box */}
        <Grid container sx={{ height: "100%" }}>
          <Grid item xs={6} sx={{ backgroundColor: "#091242" }}>
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                height: "100%",
              }}
            ></Box>
          </Grid>
        </Grid>
      </Box>

      <Footer></Footer>
    </Box >
  );
};
export default VendorOrdersPage;
