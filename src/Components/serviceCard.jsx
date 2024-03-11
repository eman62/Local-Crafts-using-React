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

const ServiceCard = ({orderData}) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <Box sx={{ direction: "rtl" }}  width={200}>
            <Card  mb={10}>
                <CardMedia
                    component="img"                  
                    height={200}
                    image={orderData.product.photos[0]}
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
                        <Typography gutterBottom variant="p" component="div" sx={{ fontWeight:"bold" }}>
                            {orderData.product.name}
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
                        {orderData.product.category.main}{/* {product.category.main} */}
                        </Typography>
                        <Typography gutterBottom variant="p" sx={{ fontFamily: " 'Rubik', sans-serif" }}>
                        {orderData.product.category.sub}
                        </Typography>

                    </Box>

                    <Typography mt={2} variant="body2">
                    {orderData.product.description}
                        </Typography>
                    <Box mt={2} sx={{
                        display: "flex",
                        justifyContent: "space-around", // Changed to space-between for spacing

                    }}>


                        <Typography gutterBottom variant="p" sx={{ fontFamily: " 'Rubik', sans-serif" }}>
                            السعر :  {orderData.product.price} ج

                        </Typography>
                        
                    </Box>


                </CardContent>
            </Card>
        </Box>
    )
}
export default ServiceCard;