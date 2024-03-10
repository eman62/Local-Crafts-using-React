import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import IconButton from "@mui/material/IconButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useRef, useState } from "react";
import { getPopularProduct, getProductList } from "../api/Products";
import ProductCard from "./Product/ProductCard";




const PopularServices = () => {
    const [services, setServices] = useState([]);
    const swiperRef = useRef(null);
    const [centerIndex, setCenterIndex] = useState(0);


    useEffect(() => {
        const fetchServicsList = async () => {
            try {
                const response = await getPopularProduct();
                setServices(response.data.data);

            } catch (error) {
                console.error('Error fetching product list:', error);
            }
        };
        fetchServicsList();
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


    const imgStyle = {
        backgroundImage: "linear-gradient(rgba(9, 18, 66, 0.5), rgba(9, 18, 66, 0.5)), url('https://s3-alpha-sig.figma.com/img/0d66/363b/6f00d7173f94ca7d7ab6bcc39bde6406?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nNS~WGeV-YZqRjq2K8z8Y0ZkboQaagtzO5-~ymUeJIlX60tb1SC55m2oQyBFliP1EiOzkWEURNE9viaL6E0vYTdvH7P~RulSceiaY9gwYFYFMMkyzf5fnmSMUgf~Dxp6rOpk1B~sOm7SqUeKcz~EgBLM94fMIYVCyJFQ1q1lgcJXPGN1h10xJYAmYOOgfmDBnAd3TNVQ6eL7HYzFMmcJZwvOVdsKIp2u4gZMHsNSldRmhVtGMZNtNn6XSah0-OczpBON2Hsv2APcER2QvWhd3Xt6Sph~qZqySsvegLNQP~pGqH9THcGfJmY00y5dSxODa5DHoKMYqZ8ocffq0kdXHg__')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        objectFit: "cover",
        padding: "10%",
    }


    const positionBox = {
        position: "absolute",
        borderRadius: "5%",
        backgroundColor: "white",
        top: "65%",
        right: "5%",
        width: "80%",
        bottom: "10%",
        padding: "5%",
        height: "100vh"

    }

    return (
        <Box sx={{ position: "relative", textAlign: "right", direction: " rtl" }} mb={80}>
            <Box mt={6}>
                <Box sx={imgStyle}></Box>
            </Box>
            <Box>
                <Box sx={positionBox} mb={5}>
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



                        <Typography variant="h4" sx={{ fontFamily: " 'Rubik', sans-serif" }}>الخدمات الأكثر طلبا</Typography>
                    </Box>
                    <Box mt={5}
                        sx={{

                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            // marginRight: "4vw",
                        }}
                    >
                        <Swiper xs={6} md={6} lg={3}
                            ref={swiperRef}
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            slidesPerView={4}
                            loop={true}
                            onSlideChange={handleSlideChange}
                        >

                            <Grid container spacing={5} mt={10} sx={{}}  >

                                {services.map(service =>
                                    <Grid key={service.id} item  >
                                        <SwiperSlide>

                                            <ProductCard data={service} />

                                        </SwiperSlide>
                                    </Grid>
                                )}
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
                                right: "1%",
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

                </Box>
            </Box>
            <Box>

            </Box>
        </Box >
    );
}

export default PopularServices;
