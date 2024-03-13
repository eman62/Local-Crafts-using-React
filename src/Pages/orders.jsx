import React, { useEffect, useRef, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import IconButton from "@mui/material/IconButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import {
  deleteOrder,
  getCustomerOrders,
  getProductById,
  getServiceById,
} from "../api/orders";
import OrdersCard from "../Components/orders/ordersCard";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deletedOrderId, setDeletedOrderId] = useState("");
  const swiperRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(0);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCustomerOrders(token);
        console.log("Orders data:", response.data);
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchData();
  }, [token]);

  const handleDeleteOrder = async (orderId) => {
    try {
      await deleteOrder(orderId, token);
      setOrders(orders.filter((order) => order._id !== orderId));
      setDeletedOrderId(orderId);
      setDialogOpen(true);
      console.log("Order deleted successfully!");
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
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
        <Box mb={90}
          sx={{
            position: "absolute",
            width: "70vw",
            backgroundColor: "white",
            borderRadius: "30px",
            top: "20vh",
            left: "50%",
            height: "110vh",
            padding: "3%",
            transform: "translateX(-50%)",
            zIndex: 1,
            //  direction:"rtl",
            // overflow: "auto",


          }}>
          {/* Header */}
          <Container>
            <Box mt={3} sx={{ display: "flex", direction: "rtl", }}>
              <Box mt={2}>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0H17V17H0V0Z" fill="url(#paint0_linear_39_2727)" />
                  <defs>
                    <linearGradient id="paint0_linear_39_2727" x1="-29875" y1="87704.3" x2="-29853.6" y2="87705.8" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FFB629" />
                      <stop offset="0.507189" stop-color="#FFDA56" />
                      <stop offset="1" stop-color="#FFD7A6" />
                    </linearGradient>
                  </defs>
                </svg>
              </Box>
              <Typography variant="h4" component="h2" sx={{ fontFamily: "Rubik", }}>
                الطلبات
              </Typography>

            </Box>

            {/* Card Component Loop */}
            <Box mt={10} ml={5}
              sx={{
                position:"relative",
                display: "flex",
                justifyContent: "center",
                
                
              }}>
              <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                loop={true}
                onSlideChange={handleSlideChange}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  1280: {
                    slidesPerView: 3,
                  }}}
              >
                <Grid container spacing={4}>

                  {orders.map((item, index) => (
                    <SwiperSlide>
                      <Grid item xs={12} sm={6} md={4} key={index}
                     sx={{paddingLeft:{xs:"15%",md:"10%"}}}
                      >

                        <OrdersCard data={item} />
                        <Button
                          onClick={() => handleDeleteOrder(item._id)}
                          sx={{
                            background: "white",
                            border: "1px solid lightGray",
                            color: "black",
                            height: 48,
                            padding: "0 2vw",
                            marginTop: "2vh",
                            position: "relative",
                            borderRadius: 0,
                            textWrap: "nowrap",
                            fontSize: "1.5vw",
                            width: "14.5vw",
                          }}
                        >
                          الغاء الطلب
                          <Box
                            sx={{
                              position: "absolute",
                              background: "#1F2A69",
                              width: "20%",
                              borderRadius: "50% 0 0",
                              bottom: "0",
                              height: "40%",
                              opacity: "70%",
                              right: "0",
                            }}
                          ></Box>
                        </Button>

                      </Grid>
                    </SwiperSlide>
                  ))}

                </Grid>
              </Swiper>

              <IconButton
                sx={{
                  position: "absolute",
                  top: "60%",
                  right: "100%",
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
                &lt;
              </IconButton>
              <IconButton
                sx={{
                  position: "absolute",
                  top: "60%",
                  left: "95%",
                  transform: "translateY(-50%)",
                  zIndex: 999,
                  backgroundColor: "#091242",
                  color: "white",
                  width: "3vw",
                  height: "5vh",
                }}
                onClick={goNext}
              >
                &gt;
              </IconButton>
            </Box>
          </Container>
        </Box>
      </Box>
      {/*box of blue and white box */}
      <Box sx={{ height: "100vh", position: "relative" }}>
        {/*blue box */}
        <Grid container sx={{ height: "100%" }}>
          <Grid item xs={8} sx={{ backgroundColor: "#091242" }}>
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                height: "100%",
              }}
            ></Box>
          </Grid>
        </Grid>
      </Box>

      {/* Dialog to show when order is successfully deleted */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{" حذف الطلب "}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {"تم حذف طلبك بنجاح"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} autoFocus>
            موافق
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Orders;
