import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import ServiceCard from '../serviceCard'; 
const FaverotPaggenation = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 8; 
    const totalCards = 30; 

    const handleChange = (event, value) => {
        setCurrentPage(value);
    };

    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    return (
        <Box mt={10} mb={7}>
            <Grid container spacing={4} sx={{ width: "90%" }}>
                {Array.from({ length: totalCards }).slice(startIndex, endIndex).map((_, index) => (
                    <Grid key={index} xs={12} md={6} lg={3} mb={5}>
                        <ServiceCard />
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Pagination color='primary' count={Math.ceil(totalCards / cardsPerPage)} page={currentPage} onChange={handleChange} />
            </Box>
        </Box>
    );
};

export default FaverotPaggenation;
