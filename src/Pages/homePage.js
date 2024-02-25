import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const HomePage = () => {
  return (
    <>
      <Box sx={{ direction: "rtl" }}>
        <Box
          sx={{
            backgroundImage:
              'url("https://s3-alpha-sig.figma.com/img/b970/2aac/6778bc2deae56c05315551cfa7c442be?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JPwZPOb8aLRGdYtF832Fy7YmiLoKd~xZB6tADPWKD~LtfU7LtS0jBPar26QvqI5X9UTE5aMARTzNRaYPAWn9O0w9K~0zi87qsc6IcElgMOpBEdg8q3W3BEy7ndZxCX6D5kbgIKkfVTRua6H5gxZSJn26pUjvLkAJZ0MRFa01m9h8ZMfARUHvlRHL9eQzxsEZJohRdEWini3clJA-y2YNYXM~KkkcYRp8B9egp61I56xCVffbpzoNUofktDNY5X4Y6qIU1qj5vOeHDTpfdhtitnoQ2l4JpHO9CyBtYfjXgpsBmtiOew3Krcx7AT5yoN3Eg93O6904x9yvW8GyeJS~bg__")',
            width: "100vw",
            height: "80vh",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box>
            <Box>
              <Typography
                variant="h3"
                sx={{ textAlign: "right", padding: "0 3vw " }}
              >
                صناعات محلية وخدمات اكتشف
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  textAlign: "right",
                  padding: "0 3vw",
                  marginBottom: "10px",
                }}
              >
                معنا الإبداع المحلي
              </Typography>
            </Box>

            <Typography
              sx={{
                fontSize: "1em",
                textAlign: "start",
                width: "40vw",
                padding: "0 3vw",
              }}
            >
              حماده بالزنجبيل حماده بالزنجبيل حماده بالزنجبيل حماده بالزنجبيل
              حماده بالزنجبيل حماده بالزنجبيل حماده بالزنجبيل حماده بالزنجبيل
              حماده بالزنجبيل حماده بالزنجبيل حماده بالزنجبيل حماده بالزنجبيل
              حماده بالزنجبيل حماده بالزنجبيل حماده بالزنجبيل حماده بالزنجبيل
              حماده بالزنجبيل حماده بالزنجبيل حماده بالزنجبيل
            </Typography>
            <Button
              sx={{
                background:
                  "linear-gradient(45deg, #FFB629 0%, #FFDA56 50%, #FFD7A6 100%)",
                borderRadius: 3,
                border: 0,
                color: "white",
                height: 48,
                padding: "0 30px",
                boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
              }}
            >
              أكتشف أكثر
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
