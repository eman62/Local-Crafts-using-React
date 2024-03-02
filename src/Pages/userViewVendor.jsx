import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Footer from "../Components/footer";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import ServiceCard from "../Components/serviceCard";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React, { useRef, useState } from "react";

const UserViewVendor = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setCenterIndex(swiper.realIndex + 1);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/0d66/363b/6f00d7173f94ca7d7ab6bcc39bde6406?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y-dGzk1BZ7AzXsytxPi6tPDQGedhQNe-fnxuhUubZEHGmJGV3Mv7ViyEdH~h1mEoLCLZ8bGvOMHOac9P10gmWkZUvNbdtKWNZFPEeVUDFqS~ZRZfxiSZ-Bfn0ETk6BhRY67QaLL7ERh4Tt5XNHQJoa9j6TeSL6C5SuJc79nQ37shNjVlPVaXOzUxa5SY6cvUscKDALerDU7CDku6S5EHwZ1hlb2sUHyC6a71TKY~D00y8~YzvGecVrgd3XjbDRMF1mhq5Tgo~TxSxoDkjuf3ZxQ-wlKLEi1C30bdkPyA9ezOh37aeshkILVrPjvVBKeJKsfNXN5CUsrMZj7KM5BWoQ__')",
          height: "35vh",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "rgb(6,0,66,.7)",
            height: "100%",
            top: "0",
            right: "0",
            left: "0",
          }}
        ></Box>
        {/* Red Box */}
        <Box
          sx={{
            position: "absolute",
            width: "70vw",
            backgroundColor: "white",
            borderRadius: "30px",
            top: "10vh",
            left: "50%",
            height: "205vh",
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
                fontSize: "2em",
              }}
            >
              الصفحة الشخصية
            </Typography>
          </Box>
          <IconButton>
            <PersonIcon
              sx={{
                fontSize: "5vw",
                color: "black",
                marginRight: "4vw",
                mt: "4vh",
              }}
            ></PersonIcon>
          </IconButton>
          <Typography sx={{ mr: "5vw", fontWeight: "bold" }}>
            اسم الأول
          </Typography>
          <Grid container spacing={5}>
            <Grid item>
              <Typography sx={{ mr: "5vw", ml: "3vw" }}>
                نوع المستخدم
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ fontWeight: "bold", ml: "1vw" }}>
                الأسم:{" "}
              </Typography>
              <Typography sx={{ fontWeight: "bold" }}>البريد: </Typography>
              <Typography sx={{ fontWeight: "bold" }}>مدينه:</Typography>
            </Grid>
            <Grid item>
              <Typography>أسم المستخدم كامل </Typography>
              <Typography>أسم المستخدم كامل </Typography>
              <Typography>أسم المستخدم كامل </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ fontWeight: "bold" }}>المهنه: </Typography>
              <Typography sx={{ fontWeight: "bold" }}>المحافظه: </Typography>
              <Typography sx={{ fontWeight: "bold" }}>العنوان:</Typography>
            </Grid>
            <Grid item>
              <Typography>أسم المستخدم كامل </Typography>
              <Typography>أسم المستخدم كامل </Typography>
              <Typography>أسم المستخدم كامل </Typography>
            </Grid>
            <Grid item sx={{ mr: "16vw" }}>
              <Typography sx={{ fontWeight: "bold" }}>نبذة: </Typography>
              <Typography sx={{ width: "40vw" }}>
                سم المستخدم كامل سم المستخدم كامل سم المستخدم كامل سم المستخدم
                كامل سم المستخدم كامل سم المستخدم كامل سم المستخدم كامل سم
                المستخدم كامل سم المستخدم كامل سم المستخدم كامل سم المستخدم كامل
                اسم المستخدم كامل
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ backgroundColor: "#F4F4F4", height: "110vh", mt: "8vh" }}>
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
                  margin: "3vh 1vw 0 0",
                  fontSize: "2em",
                }}
              >
                الخدمات والمنتجات المنشورة
              </Typography>
              <Typography sx={{ margin: "6vh 25vw 0 0" }}>
                <span style={{ fontWeight: "bold" }}>العدد</span>:4 خدمه ومنتج
              </Typography>
            </Box>
            {/*Cards swiper*/}
            <Swiper
              style={{ margin: "7vh 4vw" }}
              ref={swiperRef}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              slidesPerView={3}
              loop={true}
              onSlideChange={handleSlideChange}
            >
              {/* Swiper slides go here */}
              <Grid container spacing={3} sx={{ mr: "3vw", mt: "3vh" }}>
                <SwiperSlide>
                  <Grid item>
                    <ServiceCard></ServiceCard>
                  </Grid>
                </SwiperSlide>
                <SwiperSlide>
                  <Grid item>
                    <ServiceCard></ServiceCard>
                  </Grid>
                </SwiperSlide>
                <SwiperSlide>
                  <Grid item>
                    <ServiceCard></ServiceCard>
                  </Grid>
                </SwiperSlide>
                <SwiperSlide>
                  <Grid item>
                    <ServiceCard></ServiceCard>
                  </Grid>
                </SwiperSlide>
              </Grid>
            </Swiper>
          </Box>
        </Box>
      </Box>
      {/*box of blue and white box */}
      <Box sx={{ height: "180vh", position: "relative" }}>
        {/*blue box */}
        <Grid container sx={{ height: "180vh" }}>
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
    </Box>
  );
};

export default UserViewVendor;
