import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ServiceCard from '../Components/serviceCard';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Orders = () => {
  const cardData = [1, 2, 3]; // Example array to map over

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
            top: "20vh",
            left: "50%",
            height: "95vh",
            transform: "translateX(-50%)",
            zIndex: 1,
            overflow: "auto",
            padding: "20px", // Added padding for spacing
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end", // Align header to the right
          }}
        >
          {/* Header */}
          <Typography variant="h4" component="h2" sx={{ marginBottom: 2 }}>
            الطلبات
          </Typography>

          {/* Card Component Loop */}
          <Grid
            container
            sx={{
              direction: "rtl",
              justifyContent: "center",
            }}
            spacing={3}
          >
            {cardData.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ServiceCard data={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      {/*box of blue and white box */}
      <Box sx={{ height: "80vh", position: "relative" }}>
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
    </Box>
  );
};

export default Orders;
