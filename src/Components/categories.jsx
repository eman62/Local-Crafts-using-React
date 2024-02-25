import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import IconButton from "@mui/material/IconButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React, { useRef, useState } from "react";
import {
  Card,
  CardMedia,
  makeStyles,
  Box,
  Typography,
  Grid,
} from "@mui/material";

const Categories = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const swiperRef = useRef(null);

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
    <Box
      sx={{
        margin: "20vh 0",
        backgroundColor: "lightgray",
        direction: "rtl",
        position: "relative", // Added position relative to handle absolute positioning of buttons
      }}
    >
      <Box sx={{ display: "flex" }}>
        <svg
          style={{ margin: "5vh 7vw 0 0" }}
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
          sx={{ display: "block", margin: "3vh 1vw 0 0", fontSize: "2em" }}
        >
          التصنيفات
        </Typography>
      </Box>
      <Box
        sx={{
          height: "30vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "4vw",
        }}
      >
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={5}
          loop={true}
          onSlideChange={handleSlideChange}
        >
          {/* Swiper slides go here */}
          <SwiperSlide>
            <Grid container>
              <Grid item xs={2}>
                <Card
                  sx={{
                    height: "22vh",
                    width: "15vw",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      color: "white",
                      textAlign: "center",
                      height: "100%",
                      backgroundColor: "rgb(50,50,50,.3)",
                    }}
                  >
                    <Typography sx={{ fontSize: "3vw", marginTop: "5vh" }}>
                      نجاره
                    </Typography>
                  </Box>
                  <CardMedia
                    component="img"
                    height="100%"
                    width="100%"
                    image="https://s3-alpha-sig.figma.com/img/6ddc/9d59/22feb3c659b120afd82706a6314557cd?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HZco2CzaarrS3FBl3a~DsxPEsQY13sxInPKzvAZa3YVVvEMpo4RJwH8ued~VoqjGp7oymIsXDwlbOdu7GDgPw1vOhG3YVWEBDkahZUZPqsbspPoN7QgS-3RTF~v7IqQMnLx0g1JYC4MbK1C1A2uk77CtKFf~D5ZuOr0aDbiMG7LhjgzK2PLhjs3CSomt9Z-nAs3-UUr3kGUkvup3vLv8teZ-iItE8K5cJ0CEhR4~QYBdAGvpWity9yD2VzfKIgIEKuMTYF31T6NUDyqvQ7hejfU9vXhAnh2UETJt3-kIt6CXLCzpTEjXRJ2Y9-bhAVjWjN6efX7I8xKTYTEnZj7tLw__"
                    title="Image Title"
                  />
                </Card>
              </Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid container>
              <Grid item xs={2}>
                <Card
                  sx={{
                    height: "22vh",
                    width: "15vw",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      color: "white",
                      textAlign: "center",
                      height: "100%",
                      backgroundColor: "rgb(50,50,50,.3)",
                    }}
                  >
                    <Typography sx={{ fontSize: "3vw", marginTop: "5vh" }}>
                      نجاره
                    </Typography>
                  </Box>
                  <CardMedia
                    component="img"
                    height="100%"
                    width="100%"
                    image="https://s3-alpha-sig.figma.com/img/6ddc/9d59/22feb3c659b120afd82706a6314557cd?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HZco2CzaarrS3FBl3a~DsxPEsQY13sxInPKzvAZa3YVVvEMpo4RJwH8ued~VoqjGp7oymIsXDwlbOdu7GDgPw1vOhG3YVWEBDkahZUZPqsbspPoN7QgS-3RTF~v7IqQMnLx0g1JYC4MbK1C1A2uk77CtKFf~D5ZuOr0aDbiMG7LhjgzK2PLhjs3CSomt9Z-nAs3-UUr3kGUkvup3vLv8teZ-iItE8K5cJ0CEhR4~QYBdAGvpWity9yD2VzfKIgIEKuMTYF31T6NUDyqvQ7hejfU9vXhAnh2UETJt3-kIt6CXLCzpTEjXRJ2Y9-bhAVjWjN6efX7I8xKTYTEnZj7tLw__"
                    title="Image Title"
                  />
                </Card>
              </Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid container>
              <Grid item xs={2}>
                <Card
                  sx={{
                    height: "22vh",
                    width: "15vw",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      color: "white",
                      textAlign: "center",
                      height: "100%",
                      backgroundColor: "rgb(50,50,50,.3)",
                    }}
                  >
                    <Typography sx={{ fontSize: "3vw", marginTop: "5vh" }}>
                      نجاره
                    </Typography>
                  </Box>
                  <CardMedia
                    component="img"
                    height="100%"
                    width="100%"
                    image="https://s3-alpha-sig.figma.com/img/6ddc/9d59/22feb3c659b120afd82706a6314557cd?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HZco2CzaarrS3FBl3a~DsxPEsQY13sxInPKzvAZa3YVVvEMpo4RJwH8ued~VoqjGp7oymIsXDwlbOdu7GDgPw1vOhG3YVWEBDkahZUZPqsbspPoN7QgS-3RTF~v7IqQMnLx0g1JYC4MbK1C1A2uk77CtKFf~D5ZuOr0aDbiMG7LhjgzK2PLhjs3CSomt9Z-nAs3-UUr3kGUkvup3vLv8teZ-iItE8K5cJ0CEhR4~QYBdAGvpWity9yD2VzfKIgIEKuMTYF31T6NUDyqvQ7hejfU9vXhAnh2UETJt3-kIt6CXLCzpTEjXRJ2Y9-bhAVjWjN6efX7I8xKTYTEnZj7tLw__"
                    title="Image Title"
                  />
                </Card>
              </Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid container>
              <Grid item xs={2}>
                <Card
                  sx={{
                    height: "22vh",
                    width: "15vw",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      color: "white",
                      textAlign: "center",
                      height: "100%",
                      backgroundColor: "rgb(50,50,50,.3)",
                    }}
                  >
                    <Typography sx={{ fontSize: "3vw", marginTop: "5vh" }}>
                      نجاره
                    </Typography>
                  </Box>
                  <CardMedia
                    component="img"
                    height="100%"
                    width="100%"
                    image="https://s3-alpha-sig.figma.com/img/6ddc/9d59/22feb3c659b120afd82706a6314557cd?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HZco2CzaarrS3FBl3a~DsxPEsQY13sxInPKzvAZa3YVVvEMpo4RJwH8ued~VoqjGp7oymIsXDwlbOdu7GDgPw1vOhG3YVWEBDkahZUZPqsbspPoN7QgS-3RTF~v7IqQMnLx0g1JYC4MbK1C1A2uk77CtKFf~D5ZuOr0aDbiMG7LhjgzK2PLhjs3CSomt9Z-nAs3-UUr3kGUkvup3vLv8teZ-iItE8K5cJ0CEhR4~QYBdAGvpWity9yD2VzfKIgIEKuMTYF31T6NUDyqvQ7hejfU9vXhAnh2UETJt3-kIt6CXLCzpTEjXRJ2Y9-bhAVjWjN6efX7I8xKTYTEnZj7tLw__"
                    title="Image Title"
                  />
                </Card>
              </Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid container>
              <Grid item xs={2}>
                <Card
                  sx={{
                    height: "22vh",
                    width: "15vw",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      color: "white",
                      textAlign: "center",
                      height: "100%",
                      backgroundColor: "rgb(50,50,50,.3)",
                    }}
                  >
                    <Typography sx={{ fontSize: "3vw", marginTop: "5vh" }}>
                      نجاره
                    </Typography>
                  </Box>
                  <CardMedia
                    component="img"
                    height="100%"
                    width="100%"
                    image="https://s3-alpha-sig.figma.com/img/6ddc/9d59/22feb3c659b120afd82706a6314557cd?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HZco2CzaarrS3FBl3a~DsxPEsQY13sxInPKzvAZa3YVVvEMpo4RJwH8ued~VoqjGp7oymIsXDwlbOdu7GDgPw1vOhG3YVWEBDkahZUZPqsbspPoN7QgS-3RTF~v7IqQMnLx0g1JYC4MbK1C1A2uk77CtKFf~D5ZuOr0aDbiMG7LhjgzK2PLhjs3CSomt9Z-nAs3-UUr3kGUkvup3vLv8teZ-iItE8K5cJ0CEhR4~QYBdAGvpWity9yD2VzfKIgIEKuMTYF31T6NUDyqvQ7hejfU9vXhAnh2UETJt3-kIt6CXLCzpTEjXRJ2Y9-bhAVjWjN6efX7I8xKTYTEnZj7tLw__"
                    title="Image Title"
                  />
                </Card>
              </Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid container>
              <Grid item xs={2}>
                <Card
                  sx={{
                    height: "22vh",
                    width: "15vw",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      color: "white",
                      textAlign: "center",
                      height: "100%",
                      backgroundColor: "rgb(50,50,50,.3)",
                    }}
                  >
                    <Typography sx={{ fontSize: "3vw", marginTop: "5vh" }}>
                      نجاره
                    </Typography>
                  </Box>
                  <CardMedia
                    component="img"
                    height="100%"
                    width="100%"
                    image="https://s3-alpha-sig.figma.com/img/6ddc/9d59/22feb3c659b120afd82706a6314557cd?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HZco2CzaarrS3FBl3a~DsxPEsQY13sxInPKzvAZa3YVVvEMpo4RJwH8ued~VoqjGp7oymIsXDwlbOdu7GDgPw1vOhG3YVWEBDkahZUZPqsbspPoN7QgS-3RTF~v7IqQMnLx0g1JYC4MbK1C1A2uk77CtKFf~D5ZuOr0aDbiMG7LhjgzK2PLhjs3CSomt9Z-nAs3-UUr3kGUkvup3vLv8teZ-iItE8K5cJ0CEhR4~QYBdAGvpWity9yD2VzfKIgIEKuMTYF31T6NUDyqvQ7hejfU9vXhAnh2UETJt3-kIt6CXLCzpTEjXRJ2Y9-bhAVjWjN6efX7I8xKTYTEnZj7tLw__"
                    title="Image Title"
                  />
                </Card>
              </Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid container>
              <Grid item xs={2}>
                <Card
                  sx={{
                    height: "22vh",
                    width: "15vw",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      color: "white",
                      textAlign: "center",
                      height: "100%",
                      backgroundColor: "rgb(50,50,50,.3)",
                    }}
                  >
                    <Typography sx={{ fontSize: "3vw", marginTop: "5vh" }}>
                      نجاره
                    </Typography>
                  </Box>
                  <CardMedia
                    component="img"
                    height="100%"
                    width="100%"
                    image="https://s3-alpha-sig.figma.com/img/6ddc/9d59/22feb3c659b120afd82706a6314557cd?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HZco2CzaarrS3FBl3a~DsxPEsQY13sxInPKzvAZa3YVVvEMpo4RJwH8ued~VoqjGp7oymIsXDwlbOdu7GDgPw1vOhG3YVWEBDkahZUZPqsbspPoN7QgS-3RTF~v7IqQMnLx0g1JYC4MbK1C1A2uk77CtKFf~D5ZuOr0aDbiMG7LhjgzK2PLhjs3CSomt9Z-nAs3-UUr3kGUkvup3vLv8teZ-iItE8K5cJ0CEhR4~QYBdAGvpWity9yD2VzfKIgIEKuMTYF31T6NUDyqvQ7hejfU9vXhAnh2UETJt3-kIt6CXLCzpTEjXRJ2Y9-bhAVjWjN6efX7I8xKTYTEnZj7tLw__"
                    title="Image Title"
                  />
                </Card>
              </Grid>
            </Grid>
          </SwiperSlide>
        </Swiper>
      </Box>
      <IconButton
        sx={{
          position: "absolute",
          top: "60%",
          left: "5px",
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
          top: "60%",
          right: "5px",
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
  );
};

export default Categories;
