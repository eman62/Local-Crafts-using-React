import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import VendorOrderCard from '../vendorOrderCard';
const VendorPaggenation = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 2;
    const totalCards = 9;
    const handleChange = (event, value) => {
        setCurrentPage(value);
    };
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return (
        <Box mt={10} mb={7}>
            <Grid container >
                {data.map(order => (
                    <Grid item key={order.id} xs={12} mr={3}>
                        <VendorOrderCard data={order} />
                    </Grid>
                ))}
                {/* {Array.from({ length: totalCards }).slice(startIndex, endIndex).map((_, index) => (
                    <Grid item key={index} xs={12} mr={3} >
                        <VendorOrderCard/>
                    </Grid>
                ))} */}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Pagination color='primary' count={Math.ceil(totalCards / cardsPerPage)} page={currentPage} onChange={handleChange} />
            </Box>
        </Box>
    );
};

export default VendorPaggenation;
