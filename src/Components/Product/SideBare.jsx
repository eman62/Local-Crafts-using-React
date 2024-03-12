import React, { useState } from 'react';
import { Box, Typography, Checkbox } from '@mui/material';

const SideBare = ({ data, onCategorySelect, subCategories }) => {
    const [showMainCategories, setShowMainCategories] = useState(true);
    const [showSubCategories, setShowSubCategories] = useState({});
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);

    const handleMainCategoriesToggle = () => {
        setShowMainCategories(prevState => !prevState);
    };

    const handleCategoryClick = (categoryId) => {
        onCategorySelect(categoryId);
        setShowSubCategories(prevState => ({
            ...prevState,
            [categoryId]: !prevState[categoryId]
        }));
    };

    const handleSubCategorySelect = (subCategoryId) => {
        setSelectedSubCategory(subCategoryId);
    };

    const handleSubCategoryClick = (subCategoryId) => {
        handleSubCategorySelect(subCategoryId);
    };

    return (
        <Box>
            <Box
                mt={20} mb={5}
                onClick={handleMainCategoriesToggle}
                style={{ cursor: 'pointer', display: 'inline-block', marginLeft: '10px' }}
            >


                <Box sx={{ display: "flex" }}>
                    <Box mt={2} ml={1}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0H17V17H0V0Z" fill="url(#paint0_linear_29_3925)" />
                            <defs>
                                <linearGradient id="paint0_linear_29_3925" x1="-29875" y1="87704.3" x2="-29853.6" y2="87705.8" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FFB629" />
                                    <stop offset="0.507189" stop-color="#FFDA56" />
                                    <stop offset="1" stop-color="#FFD7A6" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </Box>
                    <Typography variant='h4' sx={{ fontFamily: "'Rubik', sans-serif" }}>
                        التصنيفات
                    </Typography>
                </Box>
            </Box>
            <Box
                style={{
                    height: showMainCategories ? "auto" : "0",
                    overflow: "hidden",
                    transition: "height 0.5s ease-in-out"
                }}
            >
                {data.map(category => (
                    <div key={category._id}>
                        <Box mt={4} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pl: 1 }}>
                            <Typography variant='h5' sx={{ fontFamily: "'Rubik', sans-serif" }}>
                                {category.name}
                            </Typography>
                            <Checkbox
                                checked={showSubCategories[category._id] || false}
                                onChange={() => handleCategoryClick(category._id)}
                            />
                        </Box>
                        {showSubCategories[category._id] &&
                            <Box mt={1} pl={2}>
                                {subCategories.map(subcategory => (
                                    subcategory.parent === category._id && (
                                        <Box key={subcategory._id} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                                            <Checkbox
                                                sx={{ pr: 1 }}
                                                onChange={() => handleSubCategoryClick(subcategory._id)}
                                            />
                                            <Typography variant='p' sx={{ fontFamily: "'Rubik', sans-serif" }} >
                                                {subcategory.name}
                                            </Typography>
                                        </Box>
                                    )
                                ))}
                            </Box>
                        }
                    </div>
                ))}
            </Box>
        </Box>
    );
};

export default SideBare;
