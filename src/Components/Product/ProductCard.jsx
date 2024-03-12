import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';


const ProductCard = ({ data }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const navigate = useNavigate();
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <Box sx={{ direction: "rtl" }} width={200}>
            <Card mb={10}>
                <CardMedia
                    component="img"
                    height={200}
                    image={data.photos[0]}
                    alt="Random"
                />
                <CardContent>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-around",
                    }}>
                        <Box sx={{ borderRadius: "50%" }}>
                            {data.vendor.photo ? (
                                <img height="35" width="35" src={data.vendor.photo} alt="Person" style={{ borderRadius: "50%" }} />
                            ) : (
                                <img height="35" width="35" src="https://th.bing.com/th/id/OIP.e4YIHGIZBy1X7GW01zOQfwHaHa?rs=1&pid=ImgDetMain" />)}
                        </Box>

                        <Typography
                            gutterBottom variant="p" component="div" sx={{ fontWeight: "bold" }}
                            onClick={() => navigate(`/productDetails/${data.id}`)}

                        >
                            {data.name}
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
                            {data.category.main}
                        </Typography>
                        <Typography gutterBottom variant="p" sx={{ fontFamily: " 'Rubik', sans-serif" }}>
                            {data.category.sub}
                        </Typography>

                    </Box>

                    <Typography mt={2} variant="body2">
                        {data.description}
                    </Typography>

                    <Box mt={2} sx={{
                        display: "flex",
                        justifyContent: "space-around",

                    }}>


                        <Typography gutterBottom variant="p" sx={{ fontFamily: " 'Rubik', sans-serif" }}>
                            السعر :  {data.price}  ج

                        </Typography>
                        <Box mt={.5}>
                            <StarBorderIcon sx={{ fontSize: "1rem" }} />
                            <StarBorderIcon sx={{ fontSize: "1rem" }} />
                            <StarBorderIcon sx={{ fontSize: "1rem" }} />
                            <StarBorderIcon sx={{ fontSize: "1rem" }} />


                        </Box>

                    </Box>


                </CardContent>
            </Card>
        </Box>
    );
};

export default ProductCard;
