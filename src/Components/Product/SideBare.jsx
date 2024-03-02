import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { useState } from 'react';
import CheckBoxComponnent from './checkBox';
const SideBare = () => {
    const [showCategory, setShowCategory] = useState(false);
    const [showSubCategory, setShowSubCategory] = useState(false);
    const toggleCategory = () => {
        setShowCategory(!showCategory);
    };
    const toggleSubCategory = () => {
        setShowSubCategory(!showSubCategory);
    };
    return (
        <Box>
            <Box sx={{ display: "flex", justifyContent: "space-around" }} onClick={toggleCategory}>
                <Typography variant='h4' sx={{ fontFamily: "'Rubik', sans-serif" }}> التصنيف</Typography>
                <Box mt={1.5} >
                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5234 1L6.80115 7.93235L1.00718 1.08577" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Box>
            </Box>
            {showCategory && <CheckBoxComponnent/>}
            <Box mt={20} sx={{ display: "flex", justifyContent: "space-around" }} onClick={toggleSubCategory}>
                <Typography variant='h5' sx={{ fontFamily: "'Rubik', sans-serif" }}> التصنيف الفرعي</Typography>
                <Box mt={1.5} ml={2}>
                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5234 1L6.80115 7.93235L1.00718 1.08577" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Box>
            </Box>
            {showSubCategory && <CheckBoxComponnent />}
        </Box>

    )
}

export default SideBare