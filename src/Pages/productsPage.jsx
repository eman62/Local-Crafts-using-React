import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CardPaggenation from '../Components/Product/CardPaggnetion';
import SideBare from '../Components/Product/SideBare';

const ProductsPage = () => {
    const imgStyle = {
        backgroundImage: "linear-gradient(rgba(9, 18, 66, 0.5), rgba(9, 18, 66, 0.5)), url('https://s3-alpha-sig.figma.com/img/0d66/363b/6f00d7173f94ca7d7ab6bcc39bde6406?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nNS~WGeV-YZqRjq2K8z8Y0ZkboQaagtzO5-~ymUeJIlX60tb1SC55m2oQyBFliP1EiOzkWEURNE9viaL6E0vYTdvH7P~RulSceiaY9gwYFYFMMkyzf5fnmSMUgf~Dxp6rOpk1B~sOm7SqUeKcz~EgBLM94fMIYVCyJFQ1q1lgcJXPGN1h10xJYAmYOOgfmDBnAd3TNVQ6eL7HYzFMmcJZwvOVdsKIp2u4gZMHsNSldRmhVtGMZNtNn6XSah0-OczpBON2Hsv2APcER2QvWhd3Xt6Sph~qZqySsvegLNQP~pGqH9THcGfJmY00y5dSxODa5DHoKMYqZ8ocffq0kdXHg__')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        objectFit: "cover",
        padding: "10%",
    }
    const [showCategory, setShowCategory] = useState(false);
    const [showSubCategory, setShowSubCategory] = useState(false);
    const toggleCategory = () => {
        setShowCategory(!showCategory);
    };

    const toggleSubCategory = () => {
        setShowSubCategory(!showSubCategory);
    };
    const [filter, setFilter] = React.useState('');

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    return (

        <Box sx={{ direction: "rtl" }}>
            <Box sx={imgStyle}>
                <Container>
                    <Box sx={{ backgroundColor: "rgba(4, 28, 55, 0.5)", display: "flex", color: "rgba(255, 255, 255, 1)", width: "8%", padding: "3px", height: "23px" }}>
                        <Box ml={1}>
                            <svg width="5" height="23" viewBox="0 0 5 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.208008" width="4" height="23" fill="url(#paint0_linear_29_3859)" />
                                <defs>
                                    <linearGradient id="paint0_linear_29_3859" x1="0.0946058" y1="4.98333" x2="5.15124" y2="5.04578" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFB629" />
                                        <stop offset="0.507189" stop-color="#FFDA56" />
                                        <stop offset="1" stop-color="#FFD7A6" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </Box>
                        <Typography variant='p'> منتجاتنا</Typography>
                    </Box>
                    <Typography variant='h2' sx={{ color: "rgba(255, 255, 255, 1)", fontFamily: "'Rubik', sans-serif" }}>قائمة المنتجات</Typography>

                </Container>


            </Box>
            <Box mt={10}>
                <Box sx={{ padding: "2%" }}>
                    <Grid container spacing={3}>
                        <Grid xs={3}>
                            <SideBare/>
                            
                        </Grid>
                        <Grid xs={9}>
                            <Box>
                                <Container>
                                    <Box sx={{ display: "flex" ,justifyContent:"space-between" }}>
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
                                            <Typography variant='h3' sx={{ fontFamily: "'Rubik', sans-serif" }}>
                                                المنتجات
                                            </Typography>
                                        </Box>
                                        <Box sx={{marginLeft:"13%" ,textAlign:"right"}} >
                                            <FormControl sx={{ minWidth: 180 ,padding:"5%"}} dir='ltr'>
                                                <InputLabel  color='info'  id="demo-simple-select-autowidth-label"><Typography  variant='h5'sx={{ fontFamily: "'Rubik', sans-serif" }}>ترتيب حسب </Typography> </InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-autowidth-label"
                                                    id="demo-simple-select-autowidth"
                                                    value={filter}
                                                    onChange={handleChange}
                                                    fullWidth
                                                    color='info'
                                                    label="ترتيب حسب"
                                                    dir='rtl'
                                                    
                                                >
                                                    <MenuItem value={"السعر"}>السعر</MenuItem>
                                                    <MenuItem value={"التقيم"}>التقيم</MenuItem>
                                                    <MenuItem value={"التاريخ"}>التاريخ</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </Box>
                                    <CardPaggenation/>
                                </Container>
                            </Box>

                        </Grid>


                    </Grid>


                </Box>



            </Box>




        </Box>
    )
}

export default ProductsPage
// import { useState } from 'react';
// import { Box, Container, Grid, Typography } from '@mui/material';
// import CheckBoxComponent from './CheckBox';

// const ProductsPage = () => {
//     const [showCategory, setShowCategory] = useState(false);
//     const [showSubCategory, setShowSubCategory] = useState(false);

//     const toggleCategory = () => {
//         setShowCategory(!showCategory);
//     };

//     const toggleSubCategory = () => {
//         setShowSubCategory(!showSubCategory);
//     };

//     return (
//         <Box sx={{ direction: "rtl" }}>
//             {/* Your other code */}
//             <Box mt={10}>
//                 <Box sx={{ padding: "2%" }}>
//                     <Grid container spacing={3}>
//                         <Grid item xs={3}>
//                             <Box>
//                                 <Box sx={{ display: "flex", justifyContent: "space-around" }} onClick={toggleCategory}>
//                                     <Typography variant='h4' sx={{ fontFamily: "'Rubik', sans-serif" }}> التصنيف</Typography>
//                                     <Box mt={1.5} >
//                                         <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <path d="M12.5234 1L6.80115 7.93235L1.00718 1.08577" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                                         </svg>
//                                     </Box>
//                                 </Box>
//                                 {showCategory && <CheckBoxComponent />}
//                                 <Box mt={5} sx={{ display: "flex", justifyContent: "space-around" }} onClick={toggleSubCategory}>
//                                     <Typography variant='h5' sx={{ fontFamily: "'Rubik', sans-serif" }}> التصنيف الفرعي</Typography>
//                                     <Box mt={1.5} ml={2}>
//                                         <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <path d="M12.5234 1L6.80115 7.93235L1.00718 1.08577" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                                         </svg>
//                                     </Box>
//                                 </Box>
//                                 {showSubCategory && <CheckBoxComponent />}
//                             </Box>
//                         </Grid>
//                         {/* Your other code */}
//                     </Grid>
//                 </Box>
//             </Box>
//         </Box>
//     );
// };

// export default ProductsPage;
