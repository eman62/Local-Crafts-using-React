import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Container, TextField } from '@mui/material';
import { axiosInstance } from '../../api/config';
// import { useSelector } from 'react-redux'; 

const OrderModel = ({ open, handleClose ,prodectId}) => {
  const [errors, setErrors] = useState({});
  const token = localStorage.getItem("token")

  const [orderData, setOrderData] = useState({
    phone: "",
    message: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setOrderData({
      ...orderData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
  
    try {
      await axiosInstance.post(`/services/${prodectId}/order`,orderData, {
        headers: {
          token
          // 'Authorization': `Bearer ${token}`
        }
      });
      console.log("Order sent successfully!");
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "55%",
    height: "75%",
    bgcolor: 'background.paper',
    borderRadius: "10% ",
    boxShadow: 24,
    p: 4,
    direction: "rtl"
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Container>
          <Box sx={{ display: "flex" }}>
            <svg style={{ marginTop: "2%" }} width="10" height="10" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H17V17H0V0Z" fill="url(#paint0_linear_56_5536)" />
              <defs>
                <linearGradient id="paint0_linear_56_5536" x1="-29875" y1="87704.3" x2="-29853.6" y2="87705.8" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFB629" />
                  <stop offset="0.507189" stop-color="#FFDA56" />
                  <stop offset="1" stop-color="#FFD7A6" />
                </linearGradient>
              </defs>
            </svg>

            <Typography variant='h5' sx={{ fontFamily: "Rubik" }}> ارسال الطلب الى البائع </Typography>

          </Box>
          <form onSubmit={handleSubmit}>
            <Box mt={5} >
              <TextField
                id="standard-basic"
                name="phone"
                value={orderData.phone}
                onChange={handleChange}
                label="رقم الهاتف"
                variant="standard"
                placeholder=" أدخل رقم الهاتف "
                sx={{ width: "40vw", direction: "rtl", mb: "5vh" }}
              />
              <TextField
                name="message"
                value={orderData.message}
                onChange={handleChange}
                id="outlined-multiline-static"
                label="رسالة صغيرة"
                multiline
                rows={6}
                sx={{ width: "40vw", direction: "rtl", mb: "5vh" }}
              />
            </Box>
            <Box sx={{ display: 'flex', marginTop: 1, justifyContent: "space-evenly", marginLeft: "20%" }}>
              <Button
               type='submit'
                sx={{
                  background:
                    "linear-gradient(90deg, #1F2A69  0%, #091242 100%)",
                  border: 0,
                  color: "White",
                  height: 48,
                  padding: "0 2vw",
                  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                  marginTop: "2vh",
                  position: "relative",
                  borderRadius: 0,
                  textWrap: "nowrap",
                  fontSize: "1.5vw",
                }}
              >
                ارسال
                <Box
                  sx={{
                    position: "absolute",
                    background: "#1F2A69",
                    width: "20%",
                    borderRadius: "50% 0 0",
                    bottom: "0",
                    height: "40%",
                    opacity: "70%",
                    right: "0",
                  }}
                ></Box>
              </Button>
              <Button
                onClick={handleClose} 
                sx={{
                  background: "linear-gradient(45deg, #FFB629 0%, #FFDA56 50%, #FFD7A6 100%)",
                  border: 0,
                  color: "black",
                  height: 48,
                  padding: "0 2vw",
                  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                  marginTop: "2vh",
                  position: "relative",
                  borderRadius: 0,
                  textWrap: "nowrap",
                  fontSize: "1.5vw",
                }}
              >
                الغاء
                <Box
                  sx={{
                    position: "absolute",
                    background: "#1F2A69",
                    width: "20%",
                    borderRadius: "50% 0 0",
                    bottom: "0",
                    height: "40%",
                    opacity: "70%",
                    right: "0",
                  }}
                ></Box>
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </Modal>
  );
}

export default OrderModel;
