import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography"
import Card from '@mui/material/Card';
import  { useState } from 'react'

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ServiceCard = () => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <Box sx={{ direction: "rtl" }} >
            <Card sx={{width:"95%"}} mb={10}>
                <CardMedia
                    component="img"
                    
                    
                    image="https://s3-alpha-sig.figma.com/img/612d/be90/a1f53fd2458ab4004cf484363eb87688?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J52P5aQU7uXlco~Ed-a8g1y24QkdRf5JmG7tv0nLWfkpiwvJggH~P7SjedCkndhqB~xgiIic5N1NYoKhgzds9Boy2BXw9hPKq9bFiaE3pnKWIbO8XQYlLIrGhNHGDbPRaWzp6qG4TwLBLdhP2jHOSfQZqqQtDf7Ulpa9OFEVLXEcObt9G4KANjd9zthqON-~B~aw-JT-kUABn~quZ1rgn-gV366Y0pCKfKdvDRig7BUjQwXToihEG18NOprA0qKk5-H2tsQtG5K3RA-6IetC~xpY~gDa7LdrwEesKhvqCe98p~oNAmK2lNYKexxciJI5xRdMt9xm39R18keHKHlfcg__"
                    alt="Random"
                />
                <CardContent>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-around",
                    }}>
                        <Box sx={{ borderRadius: "50%" }}>
                            <img height="35" width="35" src="https://www.figma.com/file/KoAR42FTHSt4h6oCQSSZOL/image/b0b5575b38d94edf1272fe60bcdd977fef76cd81" alt="Person" style={{ borderRadius: "50%" }} />
                        </Box>
                        <Typography gutterBottom variant="h6" component="div" sx={{ fontFamily: " 'Rubik', sans-serif" }}>
                            عنوان الخدمة
                        </Typography>
                        <Box onClick={toggleFavorite}>
                            {isFavorite ? <FavoriteIcon sx={{ color: 'red', fontSize: "1.5rem" }} /> : <FavoriteBorderIcon sx={{ fontSize: "1.5rem" }} />}
                        </Box>

                    </Box>
                    <Box mt={2} sx={{
                        display: "flex",
                        justifyContent: "space-around",

                    }}>


                        <Typography gutterBottom variant="p" sx={{ fontFamily: " 'Rubik', sans-serif" }}>
                            التصنيف
                        </Typography>
                        <Typography gutterBottom variant="p" sx={{ fontFamily: " 'Rubik', sans-serif" }}>
                            التصنيف الفرعي
                        </Typography>

                    </Box>

                    <Typography mt={2} variant="body2">
                        Iحماده بالزنجبيلحماده بالزنجبيلحماده بالزنج بالزنجبيلحماده بالزنجبيلحماده بالالزنجبيلحماده بالزنجبيل                                </Typography>

                    <Box mt={2} sx={{
                        // display: "flex",
                        // justifyContent: "space-around", // Changed to space-between for spacing

                    }}>


                        <Typography gutterBottom variant="p" sx={{ fontFamily: " 'Rubik', sans-serif" }}>
                            السعر : 200 ج

                        </Typography>
                        <Box mt={2}>
                            <StarBorderIcon sx={{fontSize: "1.5rem"}}/>
                            <StarBorderIcon />
                            <StarBorderIcon />
                            <StarBorderIcon />
                            <StarBorderIcon />


                        </Box>

                    </Box>


                </CardContent>
            </Card>
        </Box>
    )
}
export default ServiceCard;