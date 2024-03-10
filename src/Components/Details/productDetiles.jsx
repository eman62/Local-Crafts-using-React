import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import { imgStyle, positionBox, mainBox } from '../../Styles/detailsPageStyle'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import IconButton from "@mui/material/IconButton";
import EngineeringIcon from '@mui/icons-material/Engineering';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Review } from './review';
import OrderModel from '../SharedComponnent/OrderModel';


const ProductDetiles = ({data}) => {
    const [centerIndex, setCenterIndex] = useState(0);
    const [openModal, setOpenModal] = useState(false); 


    const swiperRef = useRef(null);

     const toggleModal = () => {
       setOpenModal(!openModal);
     };
   
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
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };
    return (

        <Box sx={mainBox}  >
            <Box>
                <Box sx={imgStyle}></Box>
            </Box>
            <Box>
                <Box sx={positionBox}>
                    <Box sx={{
                        display: "flex",


                    }}>
                        <Box mt={1}>
                            <svg width="10" height="10" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0H17V17H0V0Z" fill="url(#paint0_linear_29_4096)" />
                                <defs>
                                    <linearGradient id="paint0_linear_29_4096" x1="-29875" y1="87704.3" x2="-29853.6" y2="87705.8" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFB629" />
                                        <stop offset="0.507189" stop-color="#FFDA56" />
                                        <stop offset="1" stop-color="#FFD7A6" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </Box>
                        <Typography variant="h4" sx={{ fontFamily: " 'Rubik', sans-serif" }}>التفاصيل</Typography>
                    </Box>

                    <Grid container mt={10} spacing={3}>
                        <Grid xs={12} lg={6} sx={{
                            position: "relative",

                            // marginRight:"2%"
                        }}>
                            <Box mb={5}>
                                <Swiper
                                    ref={swiperRef}
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    slidesPerView={1}
                                    loop={true}
                                    onSlideChange={handleSlideChange}
                                    navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                                >
                                    <SwiperSlide>
                                        <img style={{ width: "67%", marginRight: "9%" }} src={data?.photos[0]} alt='slide1' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img style={{ width: "67%", marginRight: "9%" }} src={data?.photos[1]} alt='slide2'/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img style={{ width: "67%", marginRight: "9%" }} src={data?.photos[2]} alt='slide3' />
                                    </SwiperSlide>
                                </Swiper>
                            </Box>
                            <IconButton
                                className="swiper-button-prev"
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '15%',
                                    transform: 'translateY(-50%)',
                                    zIndex: 999,
                                    background: 'linear-gradient(90deg, #FFB629 0%, #FFDA56 50%, #FFD7A6 100%)',
                                    color: 'white',
                                    width: '3vw',
                                    height: '5vh',
                                }}
                                onClick={goPrev}>
                            </IconButton>
                            <IconButton
                                className="swiper-button-next"
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: '.09%',
                                    transform: 'translateY(-50%)',
                                    zIndex: 999,
                                    background: '#091242',
                                    color: 'white',
                                    width: '3vw',
                                    height: '5vh',
                                }}
                                onClick={goNext}>
                            </IconButton>
                        </Grid>

                        <Grid xs={12} md={6} >
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography variant='h4' sx={{ fontFamily: " 'Rubik', sans-serif" }}>
                                      {data.name} <PersonIcon fontSize='2.5rem' />
                                </Typography>
                                <Box onClick={toggleFavorite}>
                                    {isFavorite ? <FavoriteIcon sx={{ color: 'red', fontSize: "40px" }} /> : <FavoriteBorderIcon sx={{ fontSize: "40px" }} />}
                                </Box>

                            </Box>
                            <Box mt={3} sx={{ width: "60%", display: "flex", justifyContent: "space-between", color: "#999999;" }}>
                                <Typography variant='p'>  {data.category.main}</Typography>
                                <Typography variant='p'>   {data.category.sub}</Typography>
                            </Box>
                            <Box mt={3} sx={{ maxWidth: "60%" }}>
                                <Typography variant='p' >
                                    {data.description}


                                </Typography>
                            </Box>
                            <Typography mt={3} variant='h5' sx={{ fontFamily: " 'Rubik', sans-serif" }}>السعر : {data.price} ج</Typography>
                        </Grid>
                    </Grid>

                    <Box mt={3} sx={{ display: 'flex', justifyContent: "flex-end" }}>
                        <Box mt={4}>
                        </Box>
                        <Button
                            sx={{
                                background:
                                    "linear-gradient(45deg, #FFB629 0%, #FFDA56 50%, #FFD7A6 100%)",
                                border: 0,
                                color: "black",
                                height: 48,
                                padding: "0 30px",
                                boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                                marginRight: "13vw",
                                marginTop: "2vh",
                                position: "relative",
                                fontFamily: " 'Rubik', sans-serif",
                                // padding: "5%",
                                width: "200px"
                            }}
                            onClick={toggleModal}
                        >

                            تواصل مع البائع
                            <EngineeringIcon sx={{ marginRight: "5%" }} />
                            <Box
                                sx={{
                                    position: "absolute",
                                    background: "#DCE4E7",
                                    width: "10%",
                                    borderRadius: "50% 0 0",
                                    bottom: "0",
                                    height: "40%",
                                    opacity: "70%",
                                    right: "0",
                                }}
                            ></Box>
                        </Button>
                        <OrderModel open={openModal} productId={data._id} handleClose={toggleModal} />

                    </Box>
                </Box>
            </Box>
        </Box>





    )
}

export default ProductDetiles