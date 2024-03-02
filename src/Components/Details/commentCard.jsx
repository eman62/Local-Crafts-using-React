import React from 'react'
import { Box ,Typography } from '@mui/material'
import Rating from '@mui/material/Rating';
const value = 4.5;

const CommentCard = () => {
    return (
        <>
            <Box mt={10}>
                <Box sx={{ display: "flex", }} mb={3}>
                    <Box sx=
                        {{
                            borderRadius: "50%",
                            backgroundColor: "#164C96",
                            width: "30px",
                            height: "25px",
                            padding: "2%",
                            textAlign: "center",
                            color: "white",
                            fontSize: ".9rem"
                        }}>
                        <Box variant='p' mt={.5}>A . A</Box>

                    </Box>
                    <Box mt={1} sx={{ marginRight: "2%" ,marginLeft:"5%" }} >
                        <Typography variant='p'> أسم العميل </Typography>
                        <Box>
                            <Rating name="read-only" value={value} readOnly />
                        </Box>
                    </Box>
                    <Typography mt={1.5} variant='p'> منذ 3 أيام</Typography>

                </Box>
                <Typography variant='p' mb={3}>التقيم العام</Typography>

                <Box sx={{ width: "70%" }} mt={2}>
                    <Typography variant='p' sx={{ color: "#4F547B" }}>
                        التقيم العامالتقيم العامالتقيم العامالتقيم العامالتقيم العامالتقيم العامالتقيم العامالتقيم العامالتقيم العامالتقيم العامالتقيم العامالتقيم العامالتقيم العامالتقيم العامالتقيم العامالتقيم العامالتقيم العامالتقيم العامالتقيم العامالتقيم العامالتقيم العامالتقيم العامالتقيم العامالتقيم العامالتقيم العام
                    </Typography>
                </Box>
            </Box>




        </>
    )
}

export default CommentCard