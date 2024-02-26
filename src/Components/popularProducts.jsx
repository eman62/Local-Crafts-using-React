import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"
import ServiceCard from "./serviceCard";



const PopularProducts = () => {
    const serviceBox = {
        direction: " rtl",
        width: "86%",
        padding: "5%",


    }

    return (
        <Box sx={{
            backgroundColor: "#F4F4F4",
        }}>
            <Box sx={serviceBox}>
                <Box sx={{ display: "flex" }}>
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
                    <Typography variant="h4" sx={{ fontFamily: " 'Rubik', sans-serif" }}>المنتجات الأكثر طلبا</Typography>
                </Box>
                <Grid container >
                    <Grid sm={4}>
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
    )

}

export default PopularProducts