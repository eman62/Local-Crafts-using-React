import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

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
        console.log("Selected subcategory:", subCategoryId);
        setSelectedSubCategory(subCategoryId);
    };

    const handleSubCategoryClick = (subCategoryId) => {
        handleSubCategorySelect(subCategoryId);
    };
    return (
        <Box>
            <Box mt={1.5} onClick={handleMainCategoriesToggle} style={{ cursor: 'pointer', display: 'inline-block', marginLeft: '10px' }}>
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5234 1L6.80115 7.93235L1.00718 1.08577" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <Typography variant='h4' sx={{ fontFamily: "'Rubik', sans-serif", display: 'inline-block' }}> التصنيفات</Typography>
            </Box>
            <FormGroup style={{
                height: showMainCategories ? "auto" : "0",
                overflow: "hidden",
                transition: "height 0.5s ease-in-out"
            }}>
                {data.map(category => (
                    <div key={category._id}>
                        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={showSubCategories[category._id] || false}
                                        onChange={() => handleCategoryClick(category._id)}
                                    />
                                }
                                label={
                                    <Typography variant='h4' sx={{ fontFamily: "'Rubik', sans-serif" }}>
                                        {category.name}
                                    </Typography>
                                }
                            />
                        </Box>
                        {showSubCategories[category._id] &&
                            <Box mt={1}>
                                <FormGroup>
                                    {subCategories.map(subcategory => (
                                        subcategory.parent === category._id && (
                                            <Box key={subcategory._id} sx={{ display: "flex", justifyContent: "space-around", marginLeft: '20px' }}>
                                                <FormControlLabel
                                                    control={<Checkbox />}
                                                    label={
                                                        <Box>
                                                            <Typography variant='p' sx={{ fontFamily: "'Rubik', sans-serif" }}>
                                                                {subcategory.name}
                                                            </Typography>
                                                        </Box>
                                                    }
                                                    onClick={() => handleSubCategoryClick(subcategory._id)}
                                                />
                                            </Box>
                                        )
                                    ))}
                                </FormGroup>
                            </Box>
                        }
                    </div>
                ))}
            </FormGroup>
        </Box>
    );
};

export default SideBare;