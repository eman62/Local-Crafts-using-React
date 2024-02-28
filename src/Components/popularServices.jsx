import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"
import ServiceCard from "./serviceCard";



const PopularServices = () => {
    const imgStyle = {
        backgroundImage: "url('https://stockyardssteakhouse.com/wp-content/uploads/2018/04/bg-texture-1-1024x1024.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        objectFit: "cover",
        padding: "10%",
    }

    const serviceBox = {
        position: "absolute",
        borderRadius: "2%",
        backgroundColor: "white",
        top: "65%",
        right: "5%",
        width: "80%",
        bottom: "10%",
        padding: "5%",



    }

    return (
        <Box sx={{ position: "relative", textAlign: "right", direction: " rtl" }} mb={80}>
            <Box mt={6}>
                <Box sx={imgStyle}></Box>
            </Box>
            <Box>
                <Box sx={serviceBox} mb={5}>
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
                    <Grid container spacing={1} >
                    <Grid md={4}>
                        <ServiceCard />
                    </Grid>
                    <Grid  sm={4}>
                        <ServiceCard />
                    </Grid>
                    <Grid  sm={4}>
                        <ServiceCard />
                    </Grid>
                    
                </Grid>
                </Box>
            </Box>
            <Box>

            </Box>
        </Box >
    );
}

export default PopularServices;
