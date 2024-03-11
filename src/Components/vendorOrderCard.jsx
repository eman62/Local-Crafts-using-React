import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ServiceCard from "./serviceCard";
import { useEffect, useState } from "react";
import { axiosInstance } from "../api/config";

<<<<<<< HEAD
const VendorOrderCard = ({ data }) => {
=======
const VendorOrderCard = ({data}) => {
  const [productData,setProductData]=useState()
  

  // useEffect(() => {
  //   const getProductdata = () => {
  //     return axiosInstance.get(`/products/${data.product}`)
    
  //     .then((res) => {
  //       setProductData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err, "error fetching");
  //     });
  //   }
  //   getProductdata()
  // }, []);

>>>>>>> eedf3fc778747e0552facaaa4401baa938ebb9cb
  return (
    <Box
      sx={{
        backgroundColor: "#E9E9E9",
        width: "60vw",
        height: "95%",
        mr: "5vw",
        mt: "5vh",
        borderRadius: "5px",
      }}
    >
      <Grid container>
        <Grid item xs={3}>
          <Box sx={{ display: "flex", direction: "rtl" }}>
            <svg
              style={{ margin: "4.5vh 2vw 0 0" }}
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
                margin: "4vh 1vw 0 0",
                fontSize: "1em",
                fontFamily: "Rubik",
                fontWeight: "600",
              }}
            >
              طلب خدمة
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: "Rubik",
              fontWeight: "bold",
              mr: "2vw",
              mt: "8vh",
            }}
          >
            الأسم:
          </Typography>
          <Typography
            sx={{
              fontFamily: "Rubik",
              fontWeight: "bold",
              mr: "2vw",
              mt: "1vh",
            }}
          >
            تليفون:
          </Typography>
          <Typography
            sx={{
              fontFamily: "Rubik",
              fontWeight: "bold",
              mr: "2vw",
              mt: "1vh",
            }}
          >
            رساله:
          </Typography>
        </Grid>
        <Grid item sx={{ mt: "16vh" }} xs={5}>
          <Typography sx={{ mb: "1vh", fontFamily: "Rubik" }}>
            {data.customer.name}
          </Typography>
          <Typography
            sx={{
              direction: "ltr",
              mb: "1vh",
              textAlign: "end",
              fontFamily: "Rubik",
            }}
          >
            {" "}
            {data.phone}
          </Typography>
          <Typography sx={{ width: "20vw", fontFamily: "Rubik" }}>
            {data.message}
          </Typography>
        </Grid>
        <Grid item sx={{ mt: "5vh" }} xs={3} md={4}>
         {/* { productData && <ServiceCard product={productData}></ServiceCard>} */}
        {data && <ServiceCard orderData={data}></ServiceCard>}
        </Grid>
      </Grid>
    </Box>
  );
};

export default VendorOrderCard;
