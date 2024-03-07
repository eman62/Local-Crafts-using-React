import React from 'react'
import { Box,  Typography } from '@mui/material'
import { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const SideBareservice = ({data ,subData}) => {
   
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

            {/* //////////////التصنيف الاساسي */}
            <Box sx={{ display: "flex", justifyContent: "space-around" }} onClick={toggleCategory}>
                <Typography variant='h4' sx={{ fontFamily: "'Rubik', sans-serif" }}> التصنيف</Typography>
                <Box mt={1.5} >
                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5234 1L6.80115 7.93235L1.00718 1.08577" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Box>
            </Box>
            {showCategory && 
             <Box mt={3} >
             <FormGroup >
             <Box mt={3}>
                    <FormGroup>
                        {data.map(category => (
                            <Box  sx={{ display: "flex", justifyContent: "space-around" }}>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label={
                                        <Box >
                                            <Typography variant='p' sx={{ fontFamily: "'Rubik', sans-serif" }}>
                                              
                                            </Typography>
                                        </Box>}
                                />
                                <Typography variant='p' mt={1}>
                                    250
                                </Typography>
                            </Box>
                        ))}
                    </FormGroup>
                </Box>
             </FormGroup>
             
         </Box>
        
            
            }
        {/* //////////////////////////التصنيف الفرعي  */}
            <Box mt={20} sx={{ display: "flex", justifyContent: "space-around" }} onClick={toggleSubCategory}>
                <Typography variant='h5' sx={{ fontFamily: "'Rubik', sans-serif" }}> التصنيف الفرعي</Typography>
                <Box mt={1.5} ml={2}>
                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5234 1L6.80115 7.93235L1.00718 1.08577" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Box>
            </Box>
            {showSubCategory && 
            <Box mt={3} >
            
                   <FormGroup>
                       {subData.map(category => (
                           <Box  sx={{ display: "flex", justifyContent: "space-around" }}>
                               <FormControlLabel
                                   control={<Checkbox />}
                                   label={
                                       <Box >
                                           <Typography variant='p' sx={{ fontFamily: "'Rubik', sans-serif" }}>
                                               {category.name}
                                           </Typography>
                                       </Box>}
                               />
                               <Typography variant='p' mt={1}>
                                   250
                               </Typography>
                           </Box>
                       ))}
                   </FormGroup>
              
            
            
        </Box>
            }
        </Box>

    )
}

export default SideBareservice