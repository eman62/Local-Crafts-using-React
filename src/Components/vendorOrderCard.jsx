import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ServiceCard from "./serviceCard";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";


const VendorOrderCard = ({ data }) => {
  return (
    <Box sx={{ direction: "rtl", width: "100%" }}>
      
      <Container sx={{ width: "75%", backgroundColor: "lightgray", padding: "2%" }}>
        <Box sx={{ display: "flex" }}>
          <Box mt={1}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H15V15H0V0Z" fill="url(#paint0_linear_56_9125)" />
              <defs>
                <linearGradient id="paint0_linear_56_9125" x1="-26360.3" y1="77386.1" x2="-26341.4" y2="77387.4" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFB629" />
                  <stop offset="0.507189" stop-color="#FFDA56" />
                  <stop offset="1" stop-color="#FFD7A6" />
                </linearGradient>
              </defs>
            </svg>
          </Box>

          <Typography variant="h5" fontFamily={"Rubik"}>طلب الخدمة </Typography>
        </Box>

        <Grid container mt={3} spacing={3}>

          <Grid item sm={4} mr={3} mb={3} >
            <Box mt={3} sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="p" fontWeight={"bold"} fontFamily={"Rubik"}>الأسم : </Typography>
              <Typography variant="p">   {data.customer.name}</Typography>

            </Box>
            <Box mt={3} sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="p" fontWeight={"bold"} fontFamily={"Rubik"}>تليفون : </Typography>
              <Typography variant="p">  {data.phone}</Typography>

            </Box>
            <Box mt={3} sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="p" fontWeight={"bold"} fontFamily={"Rubik"}>رسالة : </Typography>
              <Typography variant="p">  {data.message}</Typography>

            </Box>

          </Grid>
          <Grid item sm={2} >
          </Grid>
          <Grid item md={5} xs={12} >
            <Box  sx={{mr:{xs:"10%"}}}>

              {data && <ServiceCard orderData={data}></ServiceCard>}

            </Box>

          </Grid>

        </Grid>


      </Container>

    </Box >


    // <Box
    //   sx={{
    //     backgroundColor: "#E9E9E9",
    //     width: "60vw",
    //     // height: "95%",
    //     mr: "5vw",
    //     mt: "5vh",
    //     borderRadius: "5px",
    //   }}
    // >
    //   <Grid container>
    //     <Grid item xs={3}>
    //       <Box sx={{ display: "flex", direction: "rtl" }}>
    //         <svg
    //           style={{ margin: "4.5vh 2vw 0 0" }}
    //           width="17"
    //           height="17"
    //           viewBox="0 0 17 17"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path d="M0 0H17V17H0V0Z" fill="url(#paint0_linear_29_4153)" />
    //           <defs>
    //             <linearGradient
    //               id="paint0_linear_29_4153"
    //               x1="-29875"
    //               y1="87704.3"
    //               x2="-29853.6"
    //               y2="87705.8"
    //               gradientUnits="userSpaceOnUse"
    //             >
    //               <stop stopColor="#FFB629" />
    //               <stop offset="0.507189" stopColor="#FFDA56" />
    //               <stop offset="1" stopColor="#FFD7A6" />
    //             </linearGradient>
    //           </defs>
    //         </svg>
    //         <Typography
    //           sx={{
    //             display: "block",
    //             margin: "4vh 1vw 0 0",
    //             fontSize: "1em",
    //             fontFamily: "Rubik",
    //             fontWeight: "600",
    //           }}
    //         >
    //           طلب خدمة
    //         </Typography>
    //       </Box>
    //       <Typography
    //         sx={{
    //           fontFamily: "Rubik",
    //           fontWeight: "bold",
    //           mr: "2vw",
    //           mt: "8vh",
    //         }}
    //       >
    //         الأسم:
    //       </Typography>
    //       <Typography
    //         sx={{
    //           fontFamily: "Rubik",
    //           fontWeight: "bold",
    //           mr: "2vw",
    //           mt: "1vh",
    //         }}
    //       >
    //         تليفون:
    //       </Typography>
    //       <Typography
    //         sx={{
    //           fontFamily: "Rubik",
    //           fontWeight: "bold",
    //           mr: "2vw",
    //           mt: "1vh",
    //         }}
    //       >
    //         رساله:
    //       </Typography>
    //     </Grid>
    //     <Grid item sx={{ mt: "16vh" }} xs={5}>
    //       <Typography sx={{ mb: "1vh", fontFamily: "Rubik" }}>
    //         {data.customer.name}
    //       </Typography>
    //       <Typography
    //         sx={{
    //           direction: "ltr",
    //           mb: "1vh",
    //           textAlign: "end",
    //           fontFamily: "Rubik",
    //         }}
    //       >
    //         {" "}
    //         {data.phone}
    //       </Typography>
    //       <Typography sx={{ width: "20vw", fontFamily: "Rubik" }}>
    //         {data.message}
    //       </Typography>
    //     </Grid>
    //     <Grid item sx={{ mt: "5vh" }} xs={3} md={4}>
    //      {/* { productData && <ServiceCard product={productData}></ServiceCard>} */}
    //     {data && <ServiceCard orderData={data}></ServiceCard>}
    //     </Grid>
    //   </Grid>
    // </Box>
  );
};

export default VendorOrderCard;
